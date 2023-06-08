// CIT 281 Project 2 
// Name: Eli Savage



// This function returns a random number between min (inclusive) and max (exclusive)

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    // const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    // let result = "";
    // for (let i = 0; i < getRandomInteger(5, 26); i++) {
    // result += alphabet[getRandomInteger(1,alphabet.length-1)];
    // }
    // console.log(result);




// This function grabs a single random lowercase letter from the alphabet:

const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,26)];
    }
    
    console.log("Get single random lowercase letter: " + getRandomLetter());




// This function will return a random length string 

const getRandomString = function(minLength, maxLength) {
    
    let result = "";
    let length = getRandomInteger(minLength,maxLength); 
    for (let i = 0; i < length; i++) {
    result += getRandomLetter();
}
return result;
}

console.log("Get Random Length String of Letters:  " + getRandomString(10,20));




// This function will return a string of letters in ascending/alphabetical order 

const getSortedString = function(string){
return Array.from(string).sort().join('');
}
console.log("Ramdom string of letters in ascending/alphabetical order: " + getSortedString(getRandomString(10,20)));


