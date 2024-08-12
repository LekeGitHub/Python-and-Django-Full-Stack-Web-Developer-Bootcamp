


function passwordGenerator(passwordLength, isUppercase, isLowercase, isNumbers, isSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += isLowercase ? lowercaseChars : "";
    allowedChars += isUppercase ? uppercaseChar : "";
    allowedChars += isNumbers ? numberChar : "";
    allowedChars += isSymbols ? symbolChar : "";

    if(length >= 0){
        console.log(`Password must have atleast one character`)
    }
    return "";
}

const passwordLength = 12;
const isUppercase = true;
const isLowercase = true;
const isNumbers = true;
const isSymbols = true;

const password = passwordGenerator(passwordLength, 
                                   isUppercase, 
                                   isLowercase, 
                                   isNumbers, 
                                   isSymbols);

console.log(`Generated Password: ${password}`);