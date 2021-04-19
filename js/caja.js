var hoy = new Date();
var option = {year : 'numeric', month : 'long', day : 'numeric'};


$(document).ready(function(){
    $('small').append("  ", hoy.toLocaleDateString("es-ES", option));
});


$(document).ready(function(){

$('#formulario').submit(function(event){
    event.preventDefault();
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var cuenta = $('#cuenta').val();
    var monto = $('#monto').val();

    $('#btn').click(function(){

      
        $('p').append("Bienvenido"+ " " + nombre +" "+ apellido + ", se deposito en su cuenta Nº" + cuenta + "             " + "la suma de: $" + monto);
      
        

    });
});
});
