var hoy = new Date();
var option = {year : 'numeric', month : 'long', day : 'numeric'};


$(document).ready(function(){
    $('small').append("  ", hoy.toLocaleDateString("es-ES", option));
});



var vUsdC=91.61;
var vUsdbC=136;
var vBtC=9852.07;



var tiposDeCambio=[1,vUsdC,vUsdbC, vBtC];
var simbolos=["ARG", "USD","USDB","BTC"];

$(document).ready(function(){

      $("#btn-calcular-divisa").click(function(){
        var monedaOrigen=$("#origen").val();
        var monedaDestino=$("#destino").val();
        var cantidadConverion=$("#campo-cantidad").val();
        var precioPesos=cantidadConverion*tiposDeCambio[monedaDestino];
        var precioResultado=Math.round(precioPesos/tiposDeCambio[monedaOrigen] * 100) / 100;
        $("#contenedor-resultado").html(cantidadConverion+" "+simbolos[monedaOrigen]+ " = " + precioResultado+" "+simbolos[monedaDestino]);
      });
    });

    $(document).ready(function(){
      $(function(){
        $('#ventana').modal('show')
       
   
     
      });
    });
   
   function Close(){
     $('#ventana').hide()
     
   };
  
   for(let dolar of DOLARHOY){
        $("#dolarHoy").append(mostrarComponente(dolar));
      }
   
   
   for (let index = 0; index < DOLARHOY.length; index+=3){
       $("#dolarHoy").append(`<div  agencia="fila${DOLARHOY[index].agencia}"></div>`);
       $(`#fila${DOLARHOY[index].agencia}`).append(mostrarComponente(DOLARHOY[index]));
       $(`#fila${DOLARHOY[index].agencia}`).append(mostrarComponente(DOLARHOY[index+1]));
       $(`#fila${DOLARHOY[index].agencia}`).append(mostrarComponente(DOLARHOY[index+2]));
     }
     
     
     
     function mostrarComponente(dolar){
       return `<div>
                 <h3>${dolar.nombre}</h3>
                 <p> Compra ${dolar.compra}</p>
                 <p> Venta ${dolar.venta}</p>
               </div>`;
     }
   
     
     
   