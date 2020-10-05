
$(document).ready(function(){


// Selector de ID

//forma con una variable
var rojo = $("#rojo").css("background","red")
                     .css("color","white");

// forma corta de escribir
$("#amarillo").css("background","yellow");                    

console.log(rojo);

// Selectores de clases

var mi_clase = $('.zebra');


$('.sin_borde').click(function(){

$(this).addClass('zebra'); 

});


// selectores de etiquetas.


var parrafo = $('p');

parrafo.click(function(){

    var that = $(this);

    if(!that.hasClass('grande')){
        
        that.addClass('grande');
        
    }else{
        that.removeClass('grande')
    }

});


// selectores de atributo

$('[title="Google"]').css('background', '#ccc');
$('[title="Facebook"]').css('background','blue');


// Otros selectores

$('p, a').addClass('margen-superior');

});


