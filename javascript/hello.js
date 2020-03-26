// alert("Hello world");

// let message = "Hello world";
// alert(message);
// message = 'Hallo Welt';
// alert(message);

const LINK_COLOR = '#FF0000'
console.log("Link bitte in der Farbe", LINK_COLOR);

let highscore = 523434;
let fullname = "Jeffrey 'The Dude' Lebowski";
fullname = 'Jeffrey "The Dude" Lebowski'; // geht beides
console.log(fullname)

let template = `Dein Highscore sind ${highscore} Punkte`;
console.log(template);


// listen oder array
let participants = ["John", "Peter", "Reto"];
console.log(participants);
console.log(participants.length);
console.log(participants[0]);

let user = {
    Firstname: "John",
    lastname: "Smith",
    age: 25
}

console.log(user);
console.log(user.Firstname);
user.highscore = 200;
user["highscore ever"] = 400
console.log(user);

// let myAge = prompt("Wie alt bist du?");
// console.log(`Du bist ${myAge} alt.`);

// if (myAge > 18) {
//     console.log("Glückwunsch über 18");
// } else {
//     console.log("Leider unter 18");
// }

for (let i = 0; i < 10; i++) {
    console.log(`Schleife ${i}`);
}

participants.forEach(participants => {
    console.log(`Teilnehmer*in ${participants}`)
});

// Fuktionen

function showAge(birthYear) {
    console.log(`Du bist ca. ${2020 - birthYear} Jahre alt.`);
}

showAge(1993)

function calcAge(birthYear) {
    return 2020 - birthYear;
}

console.log(`Max ist ${calcAge(1977)} Jahre alt (ca.)`);

let users = [
    { firstname: "John", lastname: "Smith", birthYear: 1960},
    { firstname: "Peter", lastname: "Halle", birthYear: 1970},
    { firstname: "Ale", lastname: "Lenk", birthYear: 1980},
];

console.log(users); // hier hatter schleife mit funktion


let firstParagraph = document.querySelector("#pFirst");
// console.log(firstParagraph);
firstParagraph.innerHTML = "Test";
firstParagraph.style.color = "red";

let indetedParas = document.querySelectorAll(".indent"); // wenn nicht querySelectorAll dann wird immer nur das erste Benutzt
console.log(indetedParas);
indetedParas.innerHTML = "Test2";
indetedParas.forEach((para, index) => {
    console.log(`Data attribut LAT ${para.CDATA_SECTION_NODE.lat}`);
    para.innerHTML = `Absatz ${index}`;
    if ( index % 2 == 0) {
        para.style.color = "red";
    } else {
        para.style.color = "blue";
    }
});