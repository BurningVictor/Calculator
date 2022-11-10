/*
Dados Necessários:
.Botões:
  -Números
  -Operadores
  -Reset Completo
  -Limpa Registro (atual)
.Tela
  -Números Digitados
  -Resultados
.

]-------------------[

Ações:
.Digitação:
  -Restrição Máxima de 9 dígitos
.Limpeza (Clear)
.Reset (Resetar Tudo)
.Envios:
  -Com o igual
  -Com os próprios operadores aritméticos
.Aritmética:
  -Soma, Subtração, Multiplicação, Divisão, Porcentagem
.

]-------------------[
*/

const numbers = document.querySelectorAll('td.numbers')
const operators = document.querySelectorAll('td.operators')
const acReset = document.querySelector('td#AC')
const ceClear = document.querySelector('td#CE')
const screen = document.querySelector('td#screen')
var nums = []



const typings = (n) => {

}

/*
const resets = () => {
  acReset.addEventListener('click', resets)
  ceClear.addEventListener('click', resets)

}

const operations = () => {

}

const sendings = () => {

}
*/


