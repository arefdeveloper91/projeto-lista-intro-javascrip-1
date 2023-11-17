// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
   
  console.log(num1+num2)
  return num1 + num2
}
soma (2 ,3)
// EXERCÍCIO 0B
function imprimeMensagem() {
   
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

imprimeMensagem (mensagem)

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const area=""
const base=3
const altura=4
const baseDoTriangulo = (area === base* altura )
}
console.log ("" === 3*4)

// EXERCÍCIO 02
function imprimeIdade() {
  const anoDeNascimento = Number(prompt ('digite o ano de nascimento'))
  const diaDeNascimento = Number (prompt('digite o dia do seu nascimento'))
  const mesDoSeuNascimento= prompt('digite o mes do seu nascimento')
  const anoAtual = 2023
  const idade = (anoAtual - anoDeNascimento)
 console.log (idade)

}
imprimeIdade(idade)

// EXERCÍCIO 03
function calculaIMC() {
 const peso =prompt('digite seu peso')
 const altura=prompt('digite a sua altura')
 const resultado= (peso/altura**2)
 console.log(resultado)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome= prompt ("digite o seu nome");
  const idade = Number(prompt('digite a sua idade'));
  const email= prompt('digite o seu email');

  console.log("meu nome e "+ nome + "eu tenho"+ idade+ 'meu email é'+email+'' );

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1= "Preto" 
  const cor2 = 'azul'
  const cor3= 'verde'
  console.log(cor1,cor2,cor3)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const nome = 'aref mehmari chucri'
  console.log(nome.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculo = custo / valorIngresso
  return calculo

}
calcularIngressoEspetaculo(3000,100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
const  nome = 'benny';
const sobrenome = 'thebull';
console.log('a string possui o mesmo tamanho'+ nome.length + sobrenome.length);
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 let ultimoElemento =array.length -1
 return array [ultimoElemento]

}
const ultimoNome = retornaUltimoElemento(arrayRecebido)
console.log(ultimoNome)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let ultimaPosicao = array.length -1
let ultimoElemento  = array[ ultimaPosicao]
let primeiroElemento = array [0]

let arrayMeio = array.slice (1,ultimaPosicao)
arrayMeio.unshift(ultimoElemento)
arrayMeio.push (primeiroElemento)
console.log(arrayMeio)

}


console.log(trocaPrimeiroEUltimo(array))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
const minuscula1 = 'ola'
const minuscula2 = 'OLA'
console.log (minuscula1 === minuscula2)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 const anoAtual= prompt('digite o ano atual')
 const  anoDeNascimento= prompt('digite o ano de nascimento')
 const emissaoDoRg= prompt ('qual a data da emissao do seu rg')
 let condi1 = (anoAtual - anoDeNascimento <= 20 && anoAtual - emissaoDoRg >= 5)
 let condi2 = (anoAtual - anoDeNascimento > 20 && anoAtual - emissaoDoRg <= 50 && anoAtual - emissaoDoRg < 10)
 let condi3 = (anoAtual - anoDeNascimento < 50 && anoAtual - emissaoDoRg < 15)
 const condicaoGeral  = condi1 || condi2 || condi3
 console.log (!condicaoGeral)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const div4 = ano % 4 ===0
  const div100= ano % 100 ===0
  const div400 = ano % 400 ===0  
  const verifica = div4 && ! div100 || div400
  return verifica

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 const usuario = confirm("voce tem mais de 18 anos")
 const formacao= confirm('voce possui ensino medio completo?')
 const possibilidades= confirm("voce possui disponibilidade de horario?")
const verificacao1 = usuario && formacao
const verificacao2= verificacao1 && possibilidades
console.log (verificacao2)

}