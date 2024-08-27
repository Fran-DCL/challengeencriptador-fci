//Encriptar texto
function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen1 = document.getElementById("imagen1");

    let textoCifrado = texto 
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "¡Texto encriptado con éxito!";
        parrafo.textContent = "";
        imagen1.src = "./img/clipboard_business_man.png";
    } else {
        imagen1.src = "./img/pose_yubisashi_kakunin_businessman.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("¡Debes ingresar algún texto!");
    }

 }
 
//Desencriptar texto
 function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen1 = document.getElementById("imagen1");

    let textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "¡Texto desencriptado con éxito!";
        parrafo.textContent = "";
        imagen1.src = "./img/challenge_mokuhyou_businessman.png";
    } else {
        imagen1.src = "./img/pose_yubisashi_kakunin_businessman.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("¡Debes ingresar algún texto!");

    }
 }


