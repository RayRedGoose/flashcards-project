const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

let turn1, turn2, card1, card2;

beforeEach(() => {
  turn1 = new Turn('pug', card1);
  turn2 = new Turn('object', card2);
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
})

describe('Turn', function() {

  it ('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it ('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
    expect(turn2).to.be.an.instanceof(Turn);
  });

  it ('should store an answer', function() {
    expect(turn1.guess).to.equal('pug');
  });

  it ('should store the current card', function() {
    expect(turn1.card).to.deep.equal(card1);
  });

  it ('should returns the guess', function() {
    expect(turn1.returnGuess()).to.equal('pug');
  });

  it ('should returns the current card', function() {
    expect(turn1.returnCard()).to.deep.equal(card1);
  });

  it ('should compare user\'s guess and correct answer', function() {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it ('should show feedback', function() {
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
