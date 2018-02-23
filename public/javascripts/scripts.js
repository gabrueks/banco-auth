$('#buttonCadastro').click(function(){
  $('#buttonCadastro').hide();
  $('#buttonLogin').hide();
  $('body').append('<form class="" action="/cadastro" method="post"> E-mail <input type="email" name="emailCadastro" id="emailCadastro" required> <br/> Senha <input type="password" name="passwordCadastro" id="passwordLogin" required> <br/> <button type="submit" name="buttonSubmit" id="buttonSubmit" formmethod="post" value="Submit"> Login </button> </form>');
});

$('#buttonLogin').click(function(){
  $('#buttonCadastro').hide();
  $('#buttonLogin').hide();
  $('body').append('<form class="" action="/login/auth" method="post"> E-mail <input type="text" name="emailLogin" id="emailLogin" required> <br/> Senha <input type="password" name="passwordLogin" id="passwordLogin" required> <br/> <button type="submit" name="buttonSubmit" id="buttonSubmit" formmethod="post" value="Submit"> Login </button> </form>');
});
