var hoy = new Date();
var option = {year : 'numeric', month : 'long', day : 'numeric'};


$(document).ready(function(){
    $('small').append("  ", hoy.toLocaleDateString("es-ES", option));
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

  
  
