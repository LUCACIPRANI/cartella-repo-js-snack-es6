// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal;


const bicycle = [
    {
        name: 'Bianchi',
        weight: 8.8,
    },
    {
        name: 'Trek',
        weight: 6.8,
    },
    {
        name: 'Cervelo',
        weight: 7.2,
    }
];


let lowerWeightBike = bicycle[0].weight;
let lowerNameBike = bicycle[0];

for (let i = 0; i < bicycle.length; i++) {
    console.log(bicycle[i]);
    console.log(bicycle[i].weight);

    if (bicycle[i].weight < lowerWeightBike) {
        lowerWeightBike = bicycle[i].weight;

        lowerNameBike = bicycle[i].name;

    }
}


console.log(`the lowest weight Bike is ${lowerNameBike} with ${lowerWeightBike} kg`);


// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera;



// SNACK 2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


let teams = [
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0,
    }
]

console.log(teams);

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
for (let i = 0; i < teams.length; i++) {

    console.log(`Risultati: ${teams[i].nome} ha ${teams[i].puntiFatti} punti e ${teams[i].falliSubiti} falli subiti`);

    teams[i].puntiFatti = randomIntFromInterval(21, 28)
    teams[i].falliSubiti = randomIntFromInterval(3, 10)

}

//  function 
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for (let i = 0; i < teams.length; i++) {

    console.log(`Aggiornamento: ${teams[i].nome} ha ${teams[i].puntiFatti} punti e ${teams[i].falliSubiti} falli subiti`);
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

for (i = 0; i < teams.length; i++) {
    const { nome, falliSubiti } = teams[i];
    console.log(nome, falliSubiti);
}

let newArray = [];

newArray.splice(teams);
delete teams.puntiFatti;
console.log(teams);