let arreglo = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"];

window.onload = function() {
    console.log('¡Pagina cargada!');
    let primerParrafo = document.getElementById('primer-parrafo');
    primerParrafo.addEventListener('click',function(){
        mostrarMsj('click sobre el parrafo');
    });
    console.log(primerParrafo);

    primerParrafo.addEventListener('mouseover',function(){
        cambiarColor(this,colorAleatorio());
    });

    primerParrafo.addEventListener('mouseout',function(){
        cambiarColor(this,colorAleatorio());
    });
};

var mostrarMsj = function(texto){
    alert(texto);
    prompt('¿Cómo va todo?');
}

var cambiarColor = function(elemento, color){
    elemento.style.color = color;
}

var colorAleatorio = function(){
    var color = "#";

    for(var i = 0; i < 6; i++){
        var numero = Math.floor((Math.random() * 16));
        color = color + arreglo[numero];
    }

    return color;
}