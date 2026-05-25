function mostrarNome() {
  let nome = document.getElementById("campo-nome").value;
  let resultado = document.getElementById("resultado-nome");
  if (nome === "") {
    resultado.innerHTML = "<span style='color:red'>Digite um nome primeiro!</span>";
  } else {
    resultado.innerHTML = "Olá, <strong>" + nome + "</strong>! 👋";
  }
}

function calcular(operador) {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let res;

  if (operador === "+") res = n1 + n2;
  else if (operador === "-") res = n1 - n2;
  else if (operador === "*") res = n1 * n2;
  else if (operador === "/") {
    if (n2 === 0) {
      document.getElementById("resultado-calc").innerHTML = "Erro: divisão por zero!";
      return;
    }
    res = n1 / n2;
  }

  document.getElementById("resultado-calc").innerHTML =
    n1 + " " + operador + " " + n2 + " = <strong>" + res + "</strong>";
}

function gerarAleatorio() {
  let num = Math.floor(Math.random() * 101);
  document.getElementById("resultado-aleatorio").innerHTML =
    "Número gerado: <strong>" + num + "</strong>";
}

function imprimirImpares() {
  let resultado = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) resultado += i + " ";
  }
  console.log("Ímpares de 1 a 100:", resultado);
  return resultado;
}

function fatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
