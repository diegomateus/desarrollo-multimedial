var start = document.getElementById('start');
var finish = document.getElementById('finish');
var svg = document.getElementById('svg');
var gamesWon = 0;
var startGame = false;
let arreglo = ["blue","red","yellow","black","pink","green","orange"];
var svg = document.getElementsByTagName('svg')[0];
var finish;

start.addEventListener('click',()=>{
	
	if(startGame == false){
		animate();
		startGame = true;
	}
});


finish.addEventListener('click',()=>{
	if(startGame == false){
		alert("Debe iniciar el juego primero");
	}

	else {
		alert("FELICIDADES");
		startGame = false;
		gamesWon++;

		for(var i = 1; i <= gamesWon * 3; i++){
			finish = document.getElementById('temp');
			finish.remove();
		}
	}

});

function gameOver() {
	var playerPromise = document.getElementById('player').play()
	playerPromise.then(gameOverAction).catch(gameNotStartedAction);

	for(var i = 1; i <= (gamesWon + 1) * 3; i++){
		finish = document.getElementById('temp');
		finish.remove();
	}
}

function gameOverAction() {
	console.log('Sonido Exitoso!');
	alert("Juego Terminado");
	startGame = false;
}

function gameNotStartedAction(error){
	alert('El usuario debe hacer click en el punto gris para iniciar!');
	console.log(error);
	console.log(error.name);
	console.log(error.message);
}

function animate(){
	if (gamesWon == 0){
		createCircles(3);	
	}

	else if (gamesWon == 1){
		createCircles(6);
	}

	else {
		createCircles(9);	
	}
}

function createCircles(num){

	for(var i = 0; i < num; i++){

		var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
		newElement.setAttribute("id","temp");
		newElement.setAttribute("r",Math.floor((Math.random() * 100)));
		newElement.setAttribute("cx", Math.floor((Math.random() * 100)));
		newElement.setAttribute("cy", Math.floor((Math.random() * 100)));
		newElement.setAttribute("stroke",arreglo[Math.floor((Math.random() * 7))]);
		newElement.setAttribute("onmouseover","gameOver()");
		newElement.setAttribute("fill",arreglo[Math.floor((Math.random() * 7))]);
		newElement.style.strokeWidth = "5px";		

		var animate1 = document.createElementNS("http://www.w3.org/2000/svg", 'animate');

		var random = Math.floor((Math.random() * 100));

		animate1.setAttribute("dur", `${Math.floor((Math.random() * 10))}s`);
		animate1.setAttribute("attributeName","r");
		animate1.setAttribute("values",`${random};${Math.floor((Math.random() * 100))}; ${Math.floor((Math.random() * 100))}; ${random}`);
		animate1.setAttribute("repeatCount","indefinite");

		newElement.appendChild(animate1);

		var animate2 = document.createElementNS("http://www.w3.org/2000/svg", 'animate');

		var random2 = Math.floor((Math.random() * 100));

		animate2.setAttribute("dur",`${Math.floor((Math.random() * 10))}s`);
		animate2.setAttribute("attributeName","cx");
		animate2.setAttribute("values",`${random2}%;${Math.floor((Math.random() * 100))}%; ${Math.floor((Math.random() * 100))}%; ${random2}%`);
		animate2.setAttribute("repeatCount","indefinite");

		newElement.appendChild(animate2);

		var animate3 = document.createElementNS("http://www.w3.org/2000/svg", 'animate');

		var random3 = Math.floor((Math.random() * 100));

		animate3.setAttribute("dur",`${Math.floor((Math.random() * 10))}s`);
		animate3.setAttribute("attributeName","cy");
		animate3.setAttribute("values",`${random3}%;${Math.floor((Math.random() * 100))}%; ${Math.floor((Math.random() * 100))}%; ${random3}%`);
		animate3.setAttribute("repeatCount","indefinite");

		newElement.appendChild(animate3);

		svg.appendChild(newElement);
	}
}
