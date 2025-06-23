//write your code here
console.log("Hello Rigo from the console!");

const manos = ["rock", "paper", "scissors", "lizard", "spock"];

const reglas = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
}


const getRandomManos = () => {
    const index = Math.floor(Math.random() * manos.length)
    return manos[index]

}

const checkManosGuess = (userGuess) => {
    const seleccionCompu = getRandomManos()
console.log (reglas[userGuess])
    if (seleccionCompu == userGuess) {
        console.log("empatastes desgraciado")
        return
    }


    if (reglas[userGuess].includes(seleccionCompu)) { 
        console.log ("ganastes perro")


    } else {
        console.log("perdiste de nuevo")
    }
    


};

 let userGuess = prompt("Elige: rock, paper, scissors, lizard o spock").toLowerCase();


if (manos.includes(userGuess)) {
    checkManosGuess(userGuess);
} else {
    console.log("Opción inválida. Recarga la página y escribe una opción válida.");
}
