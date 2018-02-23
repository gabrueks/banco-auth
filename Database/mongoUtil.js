var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var urlConnectionMongo = 'mongodb://admin:WVKJVYLNGCTLKWFA@sl-us-south-1-portal.15.dblayer.com:31775,sl-us-south-1-portal.14.dblayer.com:31775/compose?authSource=admin&ssl=true';
var dbNome = "compose";

module.exports = function(){
  this.insert = function(parametroInsert){
    MongoClient.connect(urlConnectionMongo, (err, client) => {
      var collection = client.db(dbNome).collection('cadastro');

      collection.insert(parametroInsert);
      client.close();
    })
  }
  // this.find = function(clienteInsertEmail, clienteInsertPassword){
  //   MongoClient.connect(urlConnectionMongo, (err, client)  {
  //     var lista = [];
  //     var collection = client.db(dbNome).collection('cadastro');
  //     collection.find({}).toArray(function(err, docs){
  //       assert.equal(err, null);
  //       for(var count = 0; count < docs.length; count++){
  //         lista.push(docs[count]);
  //       }
  //       //cagada monstra
  //         request.post(
  //             'http://localhost:3000/post/login',
  //             { json: { list: lista, originalEmail:  clienteInsertEmail, originalPass: clienteInsertPassword} },
  //             function (error, response, body) {
  //                 if (!error && response.statusCode == 200) {
  //                   console.log('Certo.')
  //                 }
  //             }
  //         );
  //     })
  //   })
  // }
  // this.find = function(clienteInsertEmail, clienteInsertPassword){
  //   var lista = []
  //   MongoClient.connect(urlConnectionMongo).then(conn => {
  //     return conn.db(dbNome).collection('cadastro').find({}).toArray.then(out => console.log(out)).then(() => conn.close)
  //   })
  // }
}
