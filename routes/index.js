var express = require('express');
var router = express.Router();
var crypt = require('bcrypt');
var Cadastro = require('../model/cadastro');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var cookies = require('cookies');
var assert = require('assert');
require('../Database/mongoUtil')();

var urlConnectionMongo = 'mongodb://admin:WVKJVYLNGCTLKWFA@sl-us-south-1-portal.15.dblayer.com:31775,sl-us-south-1-portal.14.dblayer.com:31775/compose?authSource=admin&ssl=true';
var dbNome = "compose";

router.get('/', function(req, res) {
  res.render('index', { title: "Banco atom" });
});

router.post('/cadastro', function(req, res){
  var emailCliente = req.body.emailCadastro;
  var passwordCliente = req.body.passwordCadastro;

  crypt.hash(passwordCliente, 5, function(err, password){
    var pessoaCadastrar = new Cadastro(emailCliente, password);

    insert(pessoaCadastrar);
  })
})

router.post('/login/auth', function(req, res){
  var emailCliente = req.body.emailLogin;
  var passwordCliente = req.body.passwordLogin;
  var lista = [];
  var count = 0;

  MongoClient.connect(urlConnectionMongo, (err, client) => {
    var collection = client.db(dbNome).collection('cadastro');
    collection.find({}).toArray(function(err, docs){
      assert.equal(err, null);
      for(count; count < docs.length; count++){
        lista.push(docs[count]);
        // return res.redirect('/');
        // next();
      }
      for(count = 0; count < lista.length; count++){
        if(emailCliente == lista[count].email){
          crypt.compare(passwordCliente, lista[count].senha, function(err, doesMatch){
            if(doesMatch == true){
              res.cookie('pass', 'cookieValue');
              return res.redirect('/sim');
              next();
            }else{
              return res.redirect('/nao');
              next();
            }
          })
        }else{
          return res.redirect('/nao');
          next();
        }
      }
    })
  })
})

// router.post('/post/login', function(req, res){
//   var listaCadastro = req.body.list;
//   var passwordCliente = req.body.originalPass;
//   var emailCliente = req.body.originalEmail;
//   var count = 0
//
//   for(count; count < listaCadastro.length; count++){
//       if(emailCliente == listaCadastro[count].email){
//         crypt.compare(passwordCliente, listaCadastro[count].senha, function(err, doesMatch){
//           console.log(count)
//           if(doesMatch){
//             //request.get('http://localhost:3000/dashboard')
//             res.redirect('/')
//           }else{
//             console.log(false)
//           }
//         })
//       }else{
//         //res.render('index', { title: 'Banco atom' });
//       }
//   }
// });

module.exports = router;
