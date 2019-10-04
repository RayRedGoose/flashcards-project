const data = require('./data');
const prototypeQuestions = [data.prototypeData, data.secondDataset];
const util = require('./util');

const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
    this.currentDataIndex = 0;
    this.cards = [];
    this.gameTime = {
      start: 0,
      end: 0,
      allTimeMs: 0,
      minutes: 0,
      seconds: 0
    }
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const startTime = Date.now();
    this.setTime(startTime, 'start');
    this.cards = prototypeQuestions[this.currentDataIndex];
    let deck = new Deck(this.cards);
    let round = new Round(deck, this);
    this.printMessage(deck, round);
    this.printQuestion(round);
    this.currentRound = round;
  }

  goToNextRound() {
    this.currentDataIndex++;
    this.start();
  }

  setTime(time, point) {
    this.gameTime[point] = time;
    switch (point) {
      case 'end':
        var gameTime = this.gameTime
        gameTime.allTimeMs = gameTime.end - gameTime.start;
        gameTime.minutes = (gameTime.allTimeMs / 60000).toFixed();
        gameTime.seconds = Math.abs((gameTime.allTimeMs / 1000) - (gameTime.minutes * 60)).toFixed();
      }
    }

    showGameTime() {
      return `Game took ${this.gameTime.minutes} minutes ${this.gameTime.seconds} seconds`;
    }
}

module.exports = Game;
