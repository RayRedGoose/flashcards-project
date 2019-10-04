const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const data = require('../src/data');
const cards = data.prototypeData;

let game;

beforeEach(() => {
  game = new Game();
})

describe('Game', function () {

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function () {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start with no round', function () {
    expect(game.currentRound).to.equal(0);
  });

  it('should start with no cards', function () {
    expect(game.cards).to.deep.equal([]);
  });

  it('should update current round', function () {
    expect(game.currentRound).to.equal(0);
    game.start();
    expect(game.currentRound).to.be.a('object');
  });

  it('should create cards when game starts', function () {
    expect(game.cards).to.have.lengthOf(0);
    game.start();
    expect(game.cards).to.have.lengthOf(cards.length);
    process.exit();
  });

  it('should store start time', function () {
    const start = Date.now();
    game.setTime(start, 'start');
    expect(game.gameTime.start).to.equal(start);
  });

  it('should store end time', function () {
    const end = Date.now();
    game.setTime(end, 'end');
    expect(game.gameTime.end).to.equal(end);
  });

  it('should show how much time game took', function () {
    const start = 1;
    game.setTime(start, 'start');
    const end = 200000;
    game.setTime(end, 'end');
    expect(game.showGameTime()).to.equal('It takes 3 minutes 20 seconds');
  });
});
