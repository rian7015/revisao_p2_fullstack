window.onload = function() {
  desenharRetangulo();
  desenharCirculo();
  desenharLinhas();
  desenharTexto();
  iniciarAnimacao();
  iniciarMouse();
};

function desenharRetangulo() {
  let canvas = document.getElementById('c-retangulo');
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 3;
  ctx.fillRect(20, 20, 100, 80);
  ctx.strokeRect(20, 20, 100, 80);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
  ctx.fillRect(80, 50, 120, 80);
  ctx.closePath();
}

function desenharCirculo() {
  let canvas = document.getElementById('c-circulo');
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = 'purple';
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 3;
  ctx.arc(80, 75, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 100, 0, 0.7)';
  ctx.arc(180, 75, 40, 0, Math.PI);
  ctx.fill();
  ctx.closePath();
}

function desenharLinhas() {
  let canvas = document.getElementById('c-linha');
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = 'cyan';
  ctx.lineWidth = 3;
  ctx.moveTo(10, 10);
  ctx.lineTo(100, 140);
  ctx.lineTo(200, 10);
  ctx.lineTo(240, 140);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,255,0,0.4)';
  ctx.strokeStyle = 'orange';
  ctx.lineWidth = 2;
  ctx.moveTo(10, 10);
  ctx.lineTo(100, 140);
  ctx.lineTo(200, 10);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function desenharTexto() {
  let canvas = document.getElementById('c-texto');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, 250, 150);

  ctx.font = "bold 28px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = 'yellow';
  ctx.fillText("Canvas!", 125, 60);

  ctx.font = "16px Arial";
  ctx.fillStyle = 'white';
  ctx.fillText("Olá Mundo", 125, 100);

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;
  ctx.strokeText("stroke", 125, 130);
}

let bola = {
  x: 50,
  y: 150,
  raio: 25,
  cor: '#f0db4f',
  velocidadeX: 2,
  velocidadeY: 1,
  desenha: function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
};

let teclasPressionadas = {};
let animCanvas, animCtx;

function iniciarAnimacao() {
  animCanvas = document.getElementById('c-animacao');
  animCtx = animCanvas.getContext('2d');

  document.addEventListener('keydown', function(e) {
    teclasPressionadas[e.key] = true;
  });
  document.addEventListener('keyup', function(e) {
    teclasPressionadas[e.key] = false;
  });

  animLoop();
}

function animLoop() {
  animCtx.clearRect(0, 0, animCanvas.width, animCanvas.height);

  animCtx.fillStyle = '#0f3460';
  animCtx.fillRect(0, 0, animCanvas.width, animCanvas.height);

  animCtx.font = "14px Arial";
  animCtx.fillStyle = 'white';
  animCtx.fillText("Use as setas ← ↑ → ↓ para mover a bola", 10, 20);

  if (teclasPressionadas['ArrowUp'])    bola.y = Math.max(bola.raio, bola.y - 5);
  if (teclasPressionadas['ArrowDown'])  bola.y = Math.min(animCanvas.height - bola.raio, bola.y + 5);
  if (teclasPressionadas['ArrowLeft'])  bola.x = Math.max(bola.raio, bola.x - 5);
  if (teclasPressionadas['ArrowRight']) bola.x = Math.min(animCanvas.width - bola.raio, bola.x + 5);

  bola.desenha(animCtx);
  requestAnimationFrame(animLoop);
}

let bolaMouse = { x: 250, y: 100, raio: 30, cor: '#e44d26' };
let mouseCanvas, mouseCtx;

function iniciarMouse() {
  mouseCanvas = document.getElementById('c-mouse');
  mouseCtx = mouseCanvas.getContext('2d');

  mouseCanvas.addEventListener('mousemove', function(evento) {
    let rect = mouseCanvas.getBoundingClientRect();
    bolaMouse.x = evento.clientX - rect.left;
    bolaMouse.y = evento.clientY - rect.top;
  });

  mouseLoop();
}

function mouseLoop() {
  mouseCtx.clearRect(0, 0, mouseCanvas.width, mouseCanvas.height);
  mouseCtx.fillStyle = '#0f3460';
  mouseCtx.fillRect(0, 0, mouseCanvas.width, mouseCanvas.height);

  mouseCtx.font = "14px Arial";
  mouseCtx.fillStyle = 'white';
  mouseCtx.fillText("Mova o mouse sobre este canvas", 10, 20);

  mouseCtx.beginPath();
  mouseCtx.fillStyle = bolaMouse.cor;
  mouseCtx.arc(bolaMouse.x, bolaMouse.y, bolaMouse.raio, 0, 2 * Math.PI);
  mouseCtx.fill();
  mouseCtx.closePath();

  requestAnimationFrame(mouseLoop);
}
