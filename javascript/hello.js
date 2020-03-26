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