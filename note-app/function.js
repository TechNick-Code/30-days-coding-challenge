// let animal = {
//   name: "goat",
//   legs: 4,
//   age: 4,
//   isMale: true,
// }

// setTimeout(() => {
//   console.log(animal.name);
// }, 5000);

// console.log("Hello worldly");

// let password;
// const random1 = Math.floor(Math.random() * 10000);
// const random2 = Math.floor(Math.random() * 10000);

// let randomNumberGenerat = random1 + random2
// console.log(randomNumberGenerat);

// if(randomNumberGenerat > 0){
//   if(password === randomNumberGenerat){
//     console.log("Access granted");
// }}
// else{
//     console.log("Access denied");
// }

// let passwordgererated = document.getElementById("passwordgererated");
// passwordgererated.innerHTML = `Your password is ${randomNumberGenerat}, it will expire in 10mins`;


// setTimeout(() => {
//     passwordgererated.innerHTML = `too slow! your password has expired`;
//     passwordgererated.style.color = "red";
// }, 3000);

function generatrePassword(){
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

let character = "";
let password = "";
}

const length = 10;
const haslowercase = true;
const hasuppercase = true;
const hasnumbers = true;
const hassymbols = true;
generatrePassword();