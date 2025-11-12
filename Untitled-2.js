// const person = {
//     name: "John",
//     age: 29,
//     ID: 23454437,
//     dateOfBirth: "15-06-1994"
// }
// const num = [22, 55, 67, 89, 90, 34, 23, 12];

// const filt = num.filter(num => num < 40);
// const sum = num.reduce((acc, curr) => acc + curr,);
// const add = num.map(num => num + 5);
// console.log(add+sum);

// const name = "nicholas";

// console.log(name.charAt(0));
// console.log(name.toUpperCase());
// console.log(name.length)


// let fullName = "johnson nicholas";
// const email = "nicholas@gmail.com"


// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let username = email.slice(0, email.indexOf("@"));
// let  extension = email.slice(email.indexOf("@") + 1);

// fullName = fullName.trim();
// let firstletter = fullName.charAt(0).toUpperCase();
// let theRestLetters = fullName.slice(1).toLowerCase();
// fullName = firstletter + theRestLetters;


// console.log(fullName)

// console.log(lastName +" "+ firstName);
// console.log(email);
// console.log(username);

// generating random numbers

function generatePassword(length, lowercaseChars, uppercaseChars, numberChars, specialChars ) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = "";
    let password = "";

    allChars += lowercase ? lowercaseChars : "";
    allChars += uppercase ? uppercaseChars : "";
    allChars += number ? numberChars : "";
    allChars += special ? specialChars : "";

    if (allChars.length === 0) {
        return "Please select at least one character type.";
    }
    if (length < 1) {
        return "Password length must be at least 1.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt[randomIndex];
    
    };
};

const passwordLength = 10;
const lowercaseChars = true;
const uppercaseChars = true;
const numberChars = true;
const specialChars = true;


const password = generatePassword(passwordLength, lowercaseChars, uppercaseChars, numberChars, specialChars);

console.log(password);