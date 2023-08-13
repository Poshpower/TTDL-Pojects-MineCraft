const Peashooter = require('./plants/peashooter');
const Sunflower = require('./plants/sunflower');
const BucketHeadZombie = require('./zombies/bucket-head.zombie');
const FootballZombie = require('./zombies/football-zombie');
const GrandpaZombie = require('./zombies/granpa-zombie');
const Player = require('./player/player');
const Game = require('./common/game');

let player1 = new Player("human");
let player2 = new Player("zombie master");

player1.spawn(new Peashooter(), 0, 0);
player1.spawn(new Peashooter(), 0, 1);
player2.spawn(new BucketHeadZombie(), 2, 2);
player2.spawn(new BucketHeadZombie(), 2, 1);
// player2.spawn(new BucketHeadZombie(), 2, 0);
// player1.spawn(new Peashooter(), 0, 2);
// player1.spawn(new Peashooter(), 1, 0);
// player1.spawn(new Peashooter(), 0, 0);


Game.transferDmg(Game.gameArea.area[0][0].plants[0], Game.gameArea.area[2][2].zombies[0]);
Game.transferDmg(Game.gameArea.area[0][0].plants[0], Game.gameArea.area[2][2].zombies[0]);
Game.transferDmg(Game.gameArea.area[0][0].plants[0], Game.gameArea.area[2][2].zombies[0]);
Game.transferDmg(Game.gameArea.area[0][0].plants[0], Game.gameArea.area[2][2].zombies[0]);

console.log(JSON.stringify(Game.gameArea.area));