//classificador de nivel de heroi by Marcelo Castilho

let nomeHeroi = "Marcelo"
let XPHeroi = 1000

do{
    switch (true){
        case (XPHeroi < 1000):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Ferro.")
            break
        case (XPHeroi >= 1000 && XPHeroi <= 2000):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Bronze.")
            break
        case (XPHeroi >= 2001 && XPHeroi <= 5000):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Prata.")
            break
        case (XPHeroi >= 5001 && XPHeroi <= 7000):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Ouro.")
            break
        case (XPHeroi >= 7001 && XPHeroi <= 8000):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Platina.")
            break
        case (XPHeroi >= 8001 && XPHeroi <= 9000):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Ascendente.")
            break
        case (XPHeroi >= 9001 && XPHeroi <= 10000):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Imortal.")
            break
        case (XPHeroi >= 10001):
            console.log("O Herói de nome " +nomeHeroi , "está no nível de " +XPHeroi, "-Radiante.")
            break
        default:
            console.log("Nenhum Heroi existente.")
    }
    XPHeroi += 1000
    if (XPHeroi === 11000){
        nomeHeroi = "Rodrigo"
        console.log("O nome agora do heroi é " +nomeHeroi)
    }
} while (nomeHeroi === "Marcelo")