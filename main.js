// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicycle = [
    {
        name: 'Bianchi',
        weight: 7.8,
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

// Stampare a schermo la bici con peso minore;

let lightBike = bicycle[0];

for (let i = 0; i < bicycle.length; i++) {
    console.log(bicycle[i].name);
    console.log(bicycle[i].weight);

    if (bicycle[i].weight < lightBike.weight) {
        lightBike = bicycle[i];
    }
}

console.log(lightBike);

// utilizzando destructuring e template literal;

const {weight, name} = lightBike;
console.log(weight, name);

document.getElementById('container').innerHTML = 
`
<ul>
    <li> nome: ${name} </li>
    <li> peso: ${weight} </li>
</ul>
`;

// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera;



// SNACK 2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


const teams = [
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

    teams[i].puntiFatti = randomNumber(21, 28)
    teams[i].falliSubiti = randomNumber(3, 10)

}

//  function 
function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for (let i = 0; i < teams.length; i++) {
    console.log(`Aggiornamento: ${teams[i].nome} ha ${teams[i].puntiFatti} punti e ${teams[i].falliSubiti} falli subiti`);
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const newTeams = [];

for (i = 0; i < teams.length; i++) {
    const { nome, falliSubiti } = teams[i];
    newTeams.push( {nome, falliSubiti});
    console.log(nome, falliSubiti);
}

console.log(newTeams);