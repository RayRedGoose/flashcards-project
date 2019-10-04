const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');

let card1, card2, card3, deck, game, round;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(12, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(14, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3]);
  game = new Game();
  round = new Round(deck, game);
});

describe('Round', function() {

  it ('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it ('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it ('should records all guesses cards in the game', function() {
    expect(round.deck).to.equal(deck.cards);
  });

  it ('should show current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it ('should start from no turn', function() {
    expect(round.turn).to.equal(0);
  });

  it ('should change current card after answer', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('pug');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it ('should show no current card after last card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('William');
    expect(round.returnCurrentCard()).to.equal(false);
  });

  it ('should increase turns count when guess is entered', function() {
    round.takeTurn('pug');
    round.takeTurn('capybara');
    expect(round.turn).to.equal(2);
  });

  it ('should show feedback', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.turn).to.equal(2);
  });

  it ('should store incorrect answers', function() {
    round.takeTurn('pug');
    round.takeTurn('spleen');
    expect(round.incorrectGuesses[0]).to.equal(card1.id);
    expect(round.incorrectGuesses[1]).to.equal(card2.id);
  });

  it ('should calculate the percentage of correct guesses', function() {
    round.takeTurn('pug');
    expect(round.calculatePercentCorrect()).to.equal(0);
    round.takeTurn('gallbladder');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it ('should notify when round is ended', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    round.calculatePercentCorrect()
    expect(round.showEndMessage()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });
});
