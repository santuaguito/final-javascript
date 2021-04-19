var hoy = new Date();
var option = {year : 'numeric', month : 'long', day : 'numeric'};


$(document).ready(function(){
    $('small').append("  ", hoy.toLocaleDateString("es-ES", option));
});




var Crear = function(){
    let cliente = document.getElementsByClassName("user"), arrayGuardar =[];
    for(var i = 0; i < cliente.length; i++){
        arrayGuardar[i] = cliente[i].nodeValue;
        console.log(cliente[i].value);
        console.log(arrayGuardar.sort());
        
    }
    alert ("Usuario creado con exito"); 

}
