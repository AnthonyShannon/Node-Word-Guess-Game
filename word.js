var Letter = require("./letter.js");

var Word = function (word) {

    this.buildWord = function (word) {
        var lettersStore = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            lettersStore.push(currentLetter);
        }
        return lettersStore;
    }

    this.chosenWord = word;
    this.letters = this.buildWord(word);

    this.checkGuess = function (guess) {

        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].letterGuess(guess);

        }
    }

    this.display = function () {
        var lettersStore = '';
        for (var i = 0; i < this.letters.length; i++) {
            lettersStore += this.letters[i].display();
        }
        return lettersStore;
    }


}

module.exports = Word;