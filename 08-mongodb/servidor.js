var http       = require('http');
var express    = require('express');
var bodyParser = require('body-parser');
var mongodb    = require('mongodb');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

const MongoClient = mongodb.MongoClient;

const uri = "COLE_SUA_STRING_DE_CONEXAO_AQUI";

const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo, usuarios;

client.connect(function(err) {
  if (err) {
    console.log('Erro ao conectar ao MongoDB:', err);
    return;
  }
  dbo      = client.db("meu_banco");
  usuarios = dbo.collection("usuarios");
  console.log('Conectado ao MongoDB com sucesso!');
});

app.get('/', function(req, res) {
  res.redirect('home.html');
});

app.post('/cadastrar', function(req, res) {
  var data = {
    nome:  req.body.nome,
    login: req.body.login,
    senha: req.body.senha
  };

  usuarios.insertOne(data, function(err) {
    if (err) {
      console.log('Erro ao cadastrar:', err);
      res.render('resposta', { mensagem: '❌ Erro ao cadastrar usuário!' });
    } else {
      res.render('resposta', { mensagem: '✅ Usuário cadastrado com sucesso!' });
    }
  });
});

app.post('/login', function(req, res) {
  var data = {
    login: req.body.login,
    senha: req.body.senha
  };

  usuarios.find(data).toArray(function(err, items) {
    if (err) {
      res.render('resposta', { mensagem: '❌ Erro ao buscar usuário!' });
    } else if (items.length === 0) {
      res.render('resposta', { mensagem: '⚠️ Login ou senha incorretos!' });
    } else {
      res.render('resposta', { mensagem: '✅ Login realizado! Olá, ' + items[0].nome + '!' });
    }
  });
});

app.get('/listar', function(req, res) {
  usuarios.find({}).toArray(function(err, items) {
    if (err) {
      res.render('resposta', { mensagem: '❌ Erro ao listar usuários!' });
    } else {
      res.render('lista_usuarios', { usuarios: items });
    }
  });
});

app.post('/atualizar', function(req, res) {
  var filtro    = { login: req.body.login };
  var novoValor = { $set: { nome: req.body.novo_nome } };

  usuarios.updateOne(filtro, novoValor, function(err) {
    if (err) {
      res.render('resposta', { mensagem: '❌ Erro ao atualizar!' });
    } else {
      res.render('resposta', { mensagem: '✅ Usuário atualizado com sucesso!' });
    }
  });
});

app.post('/deletar', function(req, res) {
  var filtro = { login: req.body.login };

  usuarios.deleteOne(filtro, function(err) {
    if (err) {
      res.render('resposta', { mensagem: '❌ Erro ao deletar!' });
    } else {
      res.render('resposta', { mensagem: '✅ Usuário deletado com sucesso!' });
    }
  });
});

var server = http.createServer(app);
server.listen(3000);
console.log('=================================');
console.log('Servidor: http://localhost:3000');
console.log('=================================');
