/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) throw new Error('Erro: divisão por zero');
  return a / b;
}

function calcularMedia(...args) {
  const numeros = Array.isArray(args[0]) ? args[0] : args;
  if (numeros.length === 0) throw new Error('Forneça ao menos um número.');
  const soma = numeros.reduce((acc, n) => acc + n, 0);
  return soma / numeros.length;
}

function elevarPotencia(base, expoente) {
  return base ** expoente;
}

function calcularAreaRetangulo(largura, altura) {
  if (largura < 0 || altura < 0) throw new Error('Medidas não podem ser negativas.');
  return largura * altura;
}

function verificarParOuImpar(n) {
  return n % 2 === 0 ? 'par' : 'ímpar';
}

function calcularRaizQuadrada(n) {
  if (n < 0) throw new Error('Não existe raiz real para número negativo.');
  return Math.sqrt(n);
}

function calcularHipotenusa(catetoA, catetoB) {
  return Math.hypot(catetoA, catetoB);
}
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
