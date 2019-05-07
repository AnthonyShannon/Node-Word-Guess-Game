let wordBank = ["Here", "are", "some", "sample", "words"]
let randomSelection = Math.floor(Math.random() * wordBank.length)
let wordSelect = wordBank[randomSelection]
let wordToGuess = "World";
let goodGuesses = ["o", "r"];
var inquirer = require('inquirer');
var prompt = require('prompt');
console.log(wordSelect);


// console.log(word);

// function Word(wordParameter) {
//   this.word = wordParameter.split("");
  
//   this.showPlaceholders = function() {
//     let tmpString = "";
//     this.word.forEach(element => {
//       if (goodGuesses.includes(element)) {
//         tmpString += element + " ";
//       } else {
//         tmpString += "_ ";
//       }
//     });
//     console.log(tmpString);
//     return tmpString;
//   }
// }

// let myWord = new Word(wordToGuess);
// let whatsReturned = myWord.showPlaceholders();
// console.log("showPlaceholders function returned " + whatsReturned);