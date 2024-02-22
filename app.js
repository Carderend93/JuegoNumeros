let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}    

function verificacionUsuario() {
     let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
     
     if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos == 1) ? "Vez" : "Veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
     } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        } if (intentos == maximoIntentos) {
            asignarTextoElemento("p","Llegaste al numero maximo de intentos");
            document.getElementById("reiniciar").removeAttribute("disabled");
            
        }
     }
    intentos++;
    limpiarCaja();

     return;
}

function limpiarCaja() {
   document.querySelector("#valorUsuario").value = "";
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros posibles 
    if(listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento("p","Llegaste al numero maximo");
    } else {
    // si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
       return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "El juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}
    
function reiniciarjuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero secreto
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton 
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();



 


