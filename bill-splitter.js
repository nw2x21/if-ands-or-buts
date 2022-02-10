const prompt = require("prompt-sync")();

/* Write a program called `bill-splitter.js`
that prompts the user for how much Person 1 paid, 
then for how much Person 2 paid. 
It should then log out the message, 
'Person 1 owes $_____' or 
'Person 2 owes $_____' depending on who owes who.*/

let person1 = Number(prompt("Person1 paid: "));
// shows bill for person1

let person2 = Number(prompt("Person2 paid: "));
// shows bill for person2

let totalbill = person1 + person2;

console.log("The total bill is: ");
console.log(totalbill);

let evensplit = totalbill / 2;
console.log("the amount for each person is: ");

console.log(evensplit);

let person1owes = evensplit - person1;
let person2owes = evensplit - person2;


console.log("Person 1 owes " + person1owes + " and Person 2 owes " + person2owes);

