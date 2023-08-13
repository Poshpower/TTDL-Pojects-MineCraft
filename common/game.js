const GameArea = require('../field/game-area');
class Game {
    static gameArea = new GameArea();

    static transferDmg(minion1, minion2) {
        console.log(`${minion1.name} #${minion1.id} is dealing ${minion1.dmg} damage
        to ${minion2.name} #${minion2.id}`);
        minion2.healthPoints = minion2.healthPoints - minion1.dmg;
        console.log(`${minion2.name} #${minion2.id} has only ${minion2.healthPoints} hp left`);

        if (minion2.healthPoints <= 0) {
            console.log(`${minion2.name} #${minion2.id} has died.`)
        }
    }
}

module.exports = Game;