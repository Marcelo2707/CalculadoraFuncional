/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//alert("Bom dia!");
let botao1 = document.getElementById("b1");
let botao2 = document.getElementById("b2");
let botao3 = document.getElementById("b3");
let botao4 = document.getElementById("b4");
let botao5 = document.getElementById("b5");
let botao6 = document.getElementById("b6");
let botao7 = document.getElementById("b7");
let botao8 = document.getElementById("b8");
let botao9 = document.getElementById("b9");
let botao0 = document.getElementById("b0");

let botaom = document.getElementById("bm");
let botaod = document.getElementById("bd");
let botaoso = document.getElementById("bso");
let botaosu = document.getElementById("bsu");
let botaoig = document.getElementById("bi");
let botaobce = document.getElementById("bce");

let auxiliar = document.getElementById("auxiliar");
let operador = document.getElementById("operador");
let botaoponto = document.getElementById("bp");



botao1.addEventListener("click",function(){numero(this.value);}) ;
botao2.addEventListener("click",function(){numero(this.value);}) ;
botao3.addEventListener("click",function(){numero(this.value);}) ;
botao4.addEventListener("click",function(){numero(this.value);}) ;
botao5.addEventListener("click",function(){numero(this.value);}) ;
botao6.addEventListener("click",function(){numero(this.value);}) ;
botao7.addEventListener("click",function(){numero(this.value);}) ;
botao8.addEventListener("click",function(){numero(this.value);}) ;
botao9.addEventListener("click",function(){numero(this.value);}) ;
botao0.addEventListener("click",function(){numero(this.value);}) ;
     
botaom.addEventListener("click", function(){opera(this.value)});
botaod.addEventListener("click", function(){opera(this.value)});
botaoso.addEventListener("click", function(){opera(this.value)});
botaosu.addEventListener("click", function(){opera(this.value)});

botaobce.addEventListener("click",esvaziar)
  
botaoig.addEventListener("click",igual);  

botaoponto.addEventListener("click",ponto);
function numero(valor){  
        let aux = document.getElementById("mostrador");
        aux.value += valor ;
        if (aux.value.indexOf(".") == -1){
            aux.value = parseFloat(aux.value);
        }
}

function opera(conteudo){
    if (operador.value != ""){
        igual();
    }
    let mostra = document.getElementById("mostrador");
    auxiliar.value = mostra.value;
    mostra.value = 0;
    operador.value = conteudo;
}

function igual(){
    let mostrador = document.getElementById("mostrador");
    let operador1 = parseFloat(mostrador.value);
    let operador2 = parseFloat(auxiliar.value);
    let operacao = operador.value;
    if (operacao == "+"){
        mostrador.value = operador2+operador1;
    }
    if (operacao == "-"){
        mostrador.value = operador2-operador1;
    }
    if (operacao == "/"){
        mostrador.value = operador2/operador1;
    }
    if (operacao == "X"){
        mostrador.value = operador2 * operador1;
    }

    auxiliar.value = 0;
    operador.value ="";
}

function ponto(){
    let mostrador = document.getElementById("mostrador");
    mostrador.value = parseFloat(mostrador.value);
    if (mostrador.value.indexOf(".") == -1){
        mostrador.value+= ".";
        
    }
}

function esvaziar() {
    auxiliar.value = "0";
    operador.value = "";
    mostrador.value = "0";
  }