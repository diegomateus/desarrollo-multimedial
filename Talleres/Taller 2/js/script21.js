var playButton = document.getElementById('button-play');


class Carta {
    constructor(pinta, numero){
        this.pinta = pinta;
        this.numero = numero;
    }

    getValor(){
        if(this.numero === 11 || this.numero === 12 || this.numero ===13){
            return 10;
        }

        else if (this.numero === 1){
            return 11;
        }

        else {
            return this.numero;
        }
    }
}

class Mano {
    
    constructor(){
        this.mano = [];
        this.mano[0] = repartir();
        this.mano[1] = repartir();
    }

    getMano(){
        return this.mano;
    }
    
    puntaje(){
        var punt = 0;
        var as = 0;
        var cont;
        var cantEle;

        for(var i = 0; i < this.mano.length; i++){
            if (this.mano[i].getValor() == 11){
                as ++;
            }

            else {
                punt = this.mano[i].getValor() + punt;
            }
        }

        cont = 21 - punt;

        for(var i = 0; i < as; i++){
            if(punt + 11 <= 21){
                cantEle ++;
                punt = 11 + punt;
            }

            else if (punt + 1 <= 21) {
                punt = 1 + punt;
            }
            
            else if (cantEle > 0 && punt - 10 <= 21){
                punt = punt - 10;
                cantEle--;
            }
        }
        
        return punt;
    }

    imprimirMano(){
        var name = '';
        for(var i = 0; i < this.mano.length; i++){
            if(this.mano[i].numero == 1){
                name = name + 'As de ';
            }

            else if (this.mano[i].numero == 11){
                name = name + 'J de ';
            }

            else if (this.mano[i].numero == 12){
                name = name + 'Q de ';
            }

            else if (this.mano[i].numero == 13){
                name = name + 'K de ';
            }

            else {
                name = name + `${this.mano[i].numero} de `;
            }

            if(this.mano[i].pinta == 1){
                name = name + 'trebol, ';
            }

            else if (this.mano[i].pinta == 2){
                name = name + 'diamante, ';
            }

            else if (this.mano[i].pinta == 3){
                name = name + 'corazon, ';
            }

            else {
                name = name + 'pica, '
            }
        }

        return name;
    }
}

function repartir(){
    let randomPinta = Math.floor((Math.random() * (4 - 1) + 1));
    let randomNumero = Math.floor((Math.random() * (13 - 1) + 1));

    return new Carta(randomPinta,randomNumero);
}

function otraCarta(hand){
    let cart = repartir();

    hand.mano[hand.mano.length] = cart;
}

function jugarDealer(){
    var manoDealer = new Mano();

    while(manoDealer.puntaje() < 17){
        otraCarta(manoDealer);
    }

    return manoDealer;
}

function jugarJugador(){
    var manoJugador = new Mano();
    var opcion = confirm(`Sus cartas son : ${manoJugador.imprimirMano()}. ¿Desea otra carta?`);

    while (opcion == true && manoJugador.puntaje() < 21){
        otraCarta(manoJugador);
        opcion = confirm(`Sus cartas son : ${manoJugador.imprimirMano()}. ¿Desea otra carta?`);
    }

    return manoJugador;
}

function validarGanador(player,dealer){

    if(player.puntaje() > 21){
        if(dealer.puntaje() > 21){
            alert('Empate');
        }

        else{
            alert('Perdio');
        }
    }

    else if(player.puntaje() <= 21 && dealer.puntaje() > 21){
        alert('Gano');
    }

    else if(player.puntaje() <= 21 && dealer.puntaje() <= 21){
        if(player.puntaje() > dealer.puntaje()){
            alert('Gano');
        }

        else if (player.puntaje() == dealer.puntaje()){
            alert('empate');
        }

        else {
            alert('perdio');
        }
    }

}

function iniciarJuego(){
    var player = jugarJugador();
    var dealer = jugarDealer();

    validarGanador(player,dealer);

    alert(`La puntuacion del jugador es: ${player.puntaje()}, la puntuacion del dealer es: ${dealer.puntaje()}`);
}

playButton.addEventListener('click',()=>{
	
	iniciarJuego();

});

