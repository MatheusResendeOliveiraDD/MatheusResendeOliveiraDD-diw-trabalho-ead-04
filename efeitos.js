var CaracteresMinusculos = 0;
var CaracteresMaiusculos = 0;
var Simbolos = 0;
var qteNumeros = 0; 
var TotalCriteriosValidos = 0;

//Variáveis para mapear spans
var spanExibeSenha;                  
var spanValidaTamanho;      
var spanValidaMinusculo; 
var spanValidaMaiusculo; 
var spanValidaSimbol;             
var spanQteNum;              
var spanCriterios;             

//Colorindo spans
var CorValido   = 'green';
var CorInvalido = 'red';

window.onload = init;

function init() {

  spanExibeSenha = document.getElementById('ExibeSenha');  
  spanValidaTamanho = document.getElementById('ValidaTamanho');
  spanValidaMinusculo = document.getElementById('ValidaMinusculo');
  spanValidaMaiusculo = document.getElementById('ValidaMaiusculo');
  spanValidaSimbol = document.getElementById('ValidaSimbol');
  spanQteNum = document.getElementById('QteNum'); 
  spanCriterios = document.getElementById('Criterios'); 

  var validsenha  = document.getElementById('senha');
  validsenha.onkeyup = validandoSenha;
}

function validandoSenha() {

  var senhaDigitada = this.value;
  var qteCaracteresTotal = senhaDigitada.length;
  var senhaAceita = document.getElementById('senhaAcc');
  
  //Validando
  Quantidade(senhaDigitada); 
  ValidaCriterios();

  ValidaCor(spanExibeSenha, TotalCriteriosValidos,   3);  
  ValidaCor(spanValidaTamanho, qteCaracteresTotal, 8);
  ValidaCor(spanValidaMinusculo, CaracteresMinusculos, 1);
  ValidaCor(spanValidaMaiusculo, CaracteresMaiusculos, 1);
  ValidaCor(spanValidaSimbol, Simbolos, 1);
  ValidaCor(spanQteNum, qteNumeros, 1);
  ValidaCor(spanCriterios, TotalCriteriosValidos, 3);
  
  spanExibeSenha.innerHTML = 'Senha digitada:' + senhaDigitada; 
  spanValidaTamanho.innerHTML = 'Quantidade de caracteres total:' + qteCaracteresTotal;  
  spanValidaMinusculo.innerHTML = 'Quantidade de caracteres minúsculos:' + CaracteresMinusculos;
  spanValidaMaiusculo.innerHTML = 'Quantidade de caracteres maiúsculos:' + CaracteresMaiusculos;
  spanValidaSimbol.innerHTML = 'Quantidade de símbolos:' + Simbolos;
  spanQteNum.innerHTML = 'Quantidade de números:' + qteNumeros;
  spanCriterios.innerHTML = 'Quantidade de critérios aprovados:' + TotalCriteriosValidos + ' de 4';  
  senhaAceita.checked  = (TotalCriteriosValidos >= 3) && (qteCaracteresTotal >= 8);
  
  if (qteCaracteresTotal == 0)
    Limpa();
}

function ValidaCor(span, criterio, valor) {

  span.style.color = (criterio >= valor) 
                     ? CorValido 
                     : CorInvalido;
}

function Quantidade(senhaDigitada) {

  CaracteresMinusculos = 0;
  CaracteresMaiusculos = 0;  
  Simbolos = 0;  
  qteNumeros = 0;  

  for (var i = 0; i < senhaDigitada.length; i++) {
  
    CaractereAtual = senhaDigitada.charAt(i);
    
    if (CaractereAtual == ' ') {
      Simbolos++;
    }
    else {	
      if (VerificaLetra(CaractereAtual)) {

        if (VerificaMaiusculo(CaractereAtual)) {
          CaracteresMaiusculos++;
        }
        else {
          CaracteresMinusculos++;
        }
      }
      else {
      
        if (VerificaNumero(CaractereAtual)) {
          qteNumeros++;
        }
        else {
          Simbolos++;
        }
      }
    }  
  }
}

function ValidaCriterios() {

  TotalCriteriosValidos = 0;
  
  if (CaracteresMaiusculos > 0)
    TotalCriteriosValidos++;
	
  if (CaracteresMinusculos > 0)
    TotalCriteriosValidos++;
	
  if (Simbolos > 0)
    TotalCriteriosValidos++;
	
  if (qteNumeros > 0)
    TotalCriteriosValidos++;
}

function VerificaMaiusculo(Letra) {

  return (Letra == Letra.toUpperCase());
}

function VerificaLetra(Letra) {   

  var caractere = Letra.charCodeAt(0);
  
  return ( ( (caractere >= 65) && (caractere <= 90))   || 
           ( (caractere >= 97) && (caractere <= 122) ) );
}

function VerificaNumero(Letra) {  
 
  return !isNaN(Letra);
}

function Limpa() {

  spanExibeSenha.innerHTML = '';
  spanValidaTamanho.innerHTML = '';
  spanValidaMinusculo.innerHTML = '';
  spanValidaMaiusculo.innerHTML = '';
  spanValidaSimbol.innerHTML = '';
  spanQteNum.innerHTML = '';
  spanCriterios.innerHTML = '';
}
