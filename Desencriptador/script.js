var textoEncriptado;
var textoingresado;


function encriptar()
{
    textoingresado = document.getElementById("TextoIngresado").value.toLowerCase(); //Trae el texto con id TextoIngresado

    // i  Mayuculas y minusculas
    // g  Toda la linea o oracion
    // m  Multiples lineas

    textoEncriptado = textoingresado.replace(/(e)/img,"enter");
    textoEncriptado = textoEncriptado.replace(/(i)/img,"imes");
    textoEncriptado = textoEncriptado.replace(/(a)/img,"ai");
    textoEncriptado = textoEncriptado.replace(/(o)/img,"ober");
    textoEncriptado = textoEncriptado.replace(/(u)/img,"ufat");

    document.getElementById("textoDesencriptado").innerHTML= textoEncriptado;

   /*  document.getElementById("bCopiar").style.display = "show";
    document.getElementById("bCopiar").style.display = "inherit"; */

}

function desencriptar()
{
    textoingresado = document.getElementById("TextoIngresado").value.toLowerCase(); //Mismo texto ya ingresado
    //Realiza lo mismo que el encriptador pero al revez
    // Respeta espacios al reemplazar algo "ai "--> No es "ai" Tiene un espacio
    textoEncriptado = textoingresado.replace    (/enter/img,    "e");
    textoEncriptado = textoEncriptado.replace   (/imes/img ,    "i");
    textoEncriptado = textoEncriptado.replace   (/ai/img   ,    "a");
    textoEncriptado = textoEncriptado.replace   (/ober/img ,    "o");
    textoEncriptado = textoEncriptado.replace   (/ufat/img ,    "u");

    document.getElementById("textoDesencriptado").innerHTML= textoEncriptado;
    
    
}

/* function copiar()
{
    var contenido = document.querySelectorAll("#textoDesencriptado"); //Relacionamos
    contenido.select(); //Seleccionamos lo que hay en donde relacionamos
    
    document.execCommand("Copy");   //Coopeamos el contenido


}
 */


   
