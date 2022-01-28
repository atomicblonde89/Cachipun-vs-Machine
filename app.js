//Cachipun vs la maquina: Tijeras > Papel > Piedra > Tijeras.
//Si "user" y "machine" eligen la misma opción es un empate.
//El "user" debe eligir cuantas veces jugara -> "repeats"


do{
    repeats = +prompt("¿Cuantas veces quieres jugar? ");
    
}while(repeats < 1);


function random(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function convert(interpolation){
let random = "";

    if(interpolation === 1 )
        random = "PIEDRA";
    else if(interpolation === 2)
        random = "PAPEL";
    else if (interpolation === 3)
        random = "TIJERA";


    return random;
}

for(let i = 1; i <= repeats; i++){

    do{
        user = prompt(`Jugada N° ${i} Piedra, Papel, Tijera: `);
        user = user.trim().toUpperCase();

    }while((user != "PIEDRA") && (user != "PAPEL") && (user != "TIJERA"));

   
    interpolation = random(1, 3);
  
    machine = convert(interpolation);


  
    if (user === "PIEDRA" && machine === "PAPEL")
        result = "Maquina"
    else if (user === "PIEDRA" && machine === "TIJERA")
        result = "Usuario";
    else if (user === "PAPEL" && machine === "PIEDRA")
        result = "Usuario";
    else if (user === "PAPEL" && machine === "TIJERA")
        result = "Maquina";
    else if (user === "TIJERA" && machine === "PAPEL")
        result = "Usuario";
    else if (user === "TIJERA" && machine === "PIEDRA")
        result = "Maquina";
    else if (user ===  machine)
        result = "EMPATE";


document.write(`Usuario: ${user} <br>` );
document.write(`Maquina1: ${machine} <br> `);
document.write(`El ganador fué: ${result} <br>`);
document.write(`___________________________________<br>`);

}