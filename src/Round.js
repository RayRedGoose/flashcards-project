const Turn = require('./Turn');

class Round {
  constructor(deck, game) {
    this.deck = deck.cards;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.currentCardIndex = 0;
    this.game = game;
  }

  returnCurrentCard() {
    return (this.currentCardIndex < this.deck.length) ? this.deck[this.currentCardIndex] : false;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turn++;
    this.currentCardIndex++;
    return (guess === turn.card.correctAnswer) ? 'correct!' : this.addIncorrectGuess(turn.card.id);
  }

  addIncorrectGuess(guess) {
    this.incorrectGuesses.push(guess);
    return 'incorrect!';
  }

  calculatePercentCorrect() {
    var percent = (this.turn - this.incorrectGuesses.length) / this.turn * 100;
    return parseInt(percent.toFixed());
  }

  endRound() {
    const endTime = Date.now();
    this.game.setTime(endTime, 'end');
    console.log(this.game.showGameTime());
    return (this.calculatePercentCorrect() < 90) ? this.game.start() : this.game.goToNextRound();
  }

  showEndMessage() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
