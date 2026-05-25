var http       = require('http');
var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
  res.redirect('home.html');
});

app.get('/ola', function(req, res) {
  res.send('Olá Mundo! Servidor funcionando!');
});

app.get('/formulario-get', function(req, res) {
  var nome      = req.query.nome;
  var sobrenome = req.query.sobrenome;
  var nascimento = req.query.nascimento;
  var civil     = req.query.civil;
  console.log('GET recebido:', nome, sobrenome);
  res.render('resposta_cadastro', { nome, sobrenome, nascimento, civil });
});

app.post('/formulario-post', function(req, res) {
  var nome  = req.body.nome;
  var login = req.body.login;
  var senha = req.body.senha;
  console.log('POST recebido:', nome, login);
  res.render('resposta_login', { nome, login, mensagem: 'Dados recebidos com sucesso!' });
});

app.get('/lista', function(req, res) {
  var itens = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'];
  res.render('lista', { itens });
});

var server = http.createServer(app);
server.listen(3000);
console.log('=================================');
console.log('Servidor rodando em http://localhost:3000');
console.log('=================================');
