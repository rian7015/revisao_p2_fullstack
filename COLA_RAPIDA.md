# ⚡ COLA RÁPIDA — P2

---

## 🖥️ COMANDOS TERMINAL

```bash
# Iniciar projeto Node.js do zero
mkdir meu-projeto && cd meu-projeto
npm init -y                        # cria package.json automaticamente

# Instalar pacotes
npm install express                # servidor web
npm install ejs                    # template engine
npm install mongodb@4.12           # banco de dados
npm install body-parser            # ler body do POST

# Rodar servidor
node servidor.js

# Acessar no browser
# http://localhost:3000
# http://localhost:80
```

---

## 📄 HTML — ESTRUTURA MÍNIMA

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Minha Página</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 CSS — SELETORES

```css
p { }            /* tag */
.classe { }      /* classe */
#id { }          /* id */
div p { }        /* descendência */
div:hover { }    /* pseudo-classe */
```

---

## 📦 CSS — BOX MODEL

```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;       /* espaço interno */
  margin: 20px;        /* espaço externo */
  border: 2px solid black;
  border-radius: 10px; /* arredonda cantos */
  box-shadow: 5px 5px 10px gray;
}
```

---

## 📍 CSS — POSICIONAMENTO

```css
.static   { position: static; }   /* padrão - ignora top/left */
.relative { position: relative; top: 10px; left: 20px; }
.absolute { position: absolute; top: 0; right: 0; }
.fixed    { position: fixed; bottom: 0; width: 100%; } /* menu fixo */

.sobre { z-index: 10; } /* quem fica na frente */
```

---

## 💪 CSS — FLEXBOX

```css
/* CONTAINER */
.container {
  display: flex;
  flex-direction: row;          /* row | column | row-reverse | column-reverse */
  flex-wrap: wrap;              /* nowrap | wrap | wrap-reverse */
  justify-content: center;      /* flex-start | flex-end | center | space-between | space-around */
  align-items: center;          /* stretch | flex-start | flex-end | center | baseline */
  align-content: space-between; /* alinha as linhas (quando há wrap) */
}

/* ITEMS */
.item {
  order: 1;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 200px;
  flex: 1 0 200px;  /* shorthand: grow shrink basis */
  align-self: flex-end;
}
```

---

## ⚙️ JAVASCRIPT — VARIÁVEIS E TIPOS

```javascript
let nome = "João";       // string
let idade = 20;          // number
let ativo = true;        // boolean
const PI = 3.14;         // constante (não muda)
var x = 10;              // escopo de função (evite)

// Conversões
let num = Number("42");  // string → número
let str = String(42);    // número → string
let inteiro = parseInt("42.9");  // → 42
let decimal = parseFloat("3.14"); // → 3.14
```

---

## 🔁 JAVASCRIPT — ESTRUTURAS

```javascript
// Condicional
if (x > 10) {
  console.log("maior");
} else if (x === 10) {
  console.log("igual");
} else {
  console.log("menor");
}

// Igualdade ESTRITA (use sempre)
x === y    // compara valor E tipo ✅
x == y     // compara só valor (converte tipo) ❌

// While
while (i < 10) { i++; }

// For
for (let i = 0; i < 10; i++) { console.log(i); }
```

---

## 🔧 JAVASCRIPT — FUNÇÕES

```javascript
// Sem parâmetro
function ola() { alert("Olá!"); }

// Com parâmetro
function saudacao(nome) { alert("Olá, " + nome); }

// Com retorno
function soma(a, b) { return a + b; }
let resultado = soma(5, 3); // 8
```

---

## 🌐 JAVASCRIPT — DOM E EVENTOS

```javascript
// Pegar elemento
let el = document.getElementById("meuId");

// Alterar conteúdo
el.innerHTML = "novo texto";

// Alterar estilo
el.style.color = "red";

// Entrada de dados
let nome = prompt("Digite seu nome:");

// Saída
alert("mensagem");
console.log("debug");
```

```html
<!-- Eventos no HTML -->
<button onclick="minhaFuncao()">Clique</button>
<div onmouseover="passouMouse()">Passe o mouse</div>
<input type="text" onchange="mudou()">
```

---

## 🎨 CANVAS — SETUP

```html
<canvas id="canvas" width="400" height="400"></canvas>
```
```css
#canvas { background-color: #eee; }
```
```javascript
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
```

---

## 🎨 CANVAS — DESENHOS

```javascript
// === RETÂNGULO ===
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.fillRect(x, y, largura, altura);   // preenchido
ctx.strokeRect(x, y, largura, altura); // só borda
ctx.closePath();

// === CÍRCULO ===
ctx.beginPath();
ctx.arc(x, y, raio, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// === LINHA ===
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
ctx.closePath();

// === TEXTO ===
ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.fillText("Olá!", x, y);
ctx.strokeText("Olá!", x, y);
```

---

## 🎬 CANVAS — ANIMAÇÃO

```javascript
let obj = {
  x: 0, y: 200,
  raio: 30,
  cor: "blue",
  desenha: function() {
    ctx.beginPath();
    ctx.fillStyle = this.cor;
    ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
};

function animacao() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // limpa tudo
  obj.x += 2;                                        // move
  obj.desenha();
  requestAnimationFrame(animacao);                   // ~60fps
}
animacao();
```

---

## ⌨️ CANVAS — TECLADO E MOUSE

```javascript
// Teclado
document.addEventListener('keydown', function(evento) {
  let tecla = evento.key;
  if (tecla == 'ArrowUp')    obj.y -= 5;
  if (tecla == 'ArrowDown')  obj.y += 5;
  if (tecla == 'ArrowLeft')  obj.x -= 5;
  if (tecla == 'ArrowRight') obj.x += 5;
});

// Mouse
document.addEventListener('mousemove', function(evento) {
  let rect = canvas.getBoundingClientRect();
  let mx = evento.clientX - rect.left;
  let my = evento.clientY - rect.top;
  obj.x = mx;
  obj.y = my;
});
```

---

## 🚀 SERVIDOR — servidor.js BÁSICO

```javascript
var http    = require('http');
var express = require('express');

var app = express();

// Serve arquivos estáticos da pasta public/
app.use(express.static('./public'));

// Rota GET
app.get('/ola', function(req, res) {
  res.send("Olá Mundo!");
});

var server = http.createServer(app);
server.listen(3000);
console.log("Servidor rodando em http://localhost:3000");
```

---

## 📬 SERVIDOR — GET E POST COM EJS

```javascript
var http       = require('http');
var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

// GET — dados chegam na URL (?nome=joao)
app.get('/cadastro', function(req, res) {
  var nome = req.query.nome;
  res.render('resposta', { nome: nome });
});

// POST — dados chegam no body
app.post('/cadastro', function(req, res) {
  var nome = req.body.nome;
  res.render('resposta', { nome: nome });
});

// Redirect
app.get('/', function(req, res) {
  res.redirect('home.html');
});

var server = http.createServer(app);
server.listen(3000);
console.log("Servidor rodando em http://localhost:3000");
```

---

## 📝 EJS — TEMPLATE

```html
<!-- views/resposta.ejs -->
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Resposta</title></head>
<body>
  <h1>Olá, <%= nome %>!</h1>

  <!-- Código JS dentro do EJS -->
  <% if (idade > 18) { %>
    <p>Maior de idade</p>
  <% } %>

  <!-- Loop -->
  <% for (let i = 0; i < lista.length; i++) { %>
    <p><%= lista[i] %></p>
  <% } %>
</body>
</html>
```

---

## 🍃 MONGODB — CRUD COMPLETO

```javascript
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = "SUA_STRING_DE_CONEXAO_AQUI";
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo, usuarios;

// Conectar ao banco
client.connect(function(err) {
  if (err) { console.log("Erro:", err); return; }
  dbo = client.db("meu_banco");
  usuarios = dbo.collection("usuarios");
  console.log("Conectado ao MongoDB!");
});

// CREATE — inserir
app.post('/cadastrar', function(req, res) {
  var data = { nome: req.body.nome, login: req.body.login, senha: req.body.senha };
  usuarios.insertOne(data, function(err) {
    if (err) res.render('resposta', { msg: "Erro ao cadastrar!" });
    else     res.render('resposta', { msg: "Cadastrado com sucesso!" });
  });
});

// READ — buscar todos
app.get('/listar', function(req, res) {
  usuarios.find({}).toArray(function(err, items) {
    res.render('lista', { usuarios: items });
  });
});

// READ — buscar um
app.post('/login', function(req, res) {
  var data = { login: req.body.login, senha: req.body.senha };
  usuarios.find(data).toArray(function(err, items) {
    if (items.length == 0) res.render('resposta', { msg: "Usuário não encontrado!" });
    else                   res.render('resposta', { msg: "Login realizado! Olá, " + items[0].nome });
  });
});

// UPDATE — atualizar
app.post('/atualizar', function(req, res) {
  var filtro = { login: req.body.login };
  var novoValor = { $set: { nome: req.body.novo_nome } };
  usuarios.updateOne(filtro, novoValor, function(err) {
    if (err) res.render('resposta', { msg: "Erro ao atualizar!" });
    else     res.render('resposta', { msg: "Atualizado com sucesso!" });
  });
});

// DELETE — apagar
app.post('/deletar', function(req, res) {
  var filtro = { login: req.body.login };
  usuarios.deleteOne(filtro, function(err) {
    if (err) res.render('resposta', { msg: "Erro ao deletar!" });
    else     res.render('resposta', { msg: "Deletado com sucesso!" });
  });
});
```

---

## 🗂️ ESTRUTURA DE PASTAS (servidor com banco)

```
meu-projeto/
├── servidor.js
├── package.json
├── .gitignore          ← contém: node_modules/*
├── public/
│   ├── home.html
│   └── estilo.css
└── views/
    ├── resposta.ejs
    └── lista.ejs
```

## .gitignore
```
node_modules/*
```

---

## 📋 CHECKLIST DA PROVA

- [ ] Criar estrutura de pastas (public/, views/)
- [ ] `npm init -y`
- [ ] `npm install express ejs body-parser mongodb@4.12`
- [ ] Criar `.gitignore` com `node_modules/*`
- [ ] Criar `servidor.js` com Express
- [ ] Criar página HTML em `public/`
- [ ] Criar template EJS em `views/`
- [ ] Testar: `node servidor.js` → abrir `http://localhost:3000`
- [ ] Conectar MongoDB com a string de conexão do Atlas
