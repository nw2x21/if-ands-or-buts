const prompt = require("prompt-sync")();

/* You've been contracted to write the software for a lock box. 
Write a program called `lock-box.js` that stores the pin code 
to the lock box in a variable at the top of your program 
(i.e.: `const pinCode = '1234';`).*/


let correctcode = Number(prompt("Enter Code to unlock card"));

if (correctcode === 1234){
    console.log("Unlock box")

}else {
    console.log("Box remains locked");   
}