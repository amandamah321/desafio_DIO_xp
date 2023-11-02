

function Game() {

    var nomeHeroi = "Gamanda";
    var xp = 5500;
    var nivel = "";


    if (xp <= 1000) {
        var nivel = "Ferro"
    } else if (xp >= 1001 && xp <= 2000){
        var nivel = "Bronze"
    } else if (xp >= 2001 && xp <= 5000){
        var nivel = "Prata"
    }else if (xp >= 5001 && xp <= 7000){
        var nivel = "Ouro"
    }else if (xp >= 7001 && xp <= 8000){
        var nivel = "Platina"
    }else if (xp >= 8001 && xp <= 9000){
        var nivel = "Ascendente"
    }else if (xp >= 9001 && xp <= 10000){
        var nivel = "Imortal"
    }else {
        var nivel = "Radiante"
    }


    switch (nivel) {
        case "Ferro":
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;

        case "Bronze":
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;

        case "Prata":
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;

        case "Ouro":
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;

        case "Platina":
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;

        case "Ascendente":
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;

        case "Imortal":
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;
    
        default:
            console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivel)
        break;
    }

}

Game()

