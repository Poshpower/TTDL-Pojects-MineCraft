const Game = require('../common/game');
class Player {
    constructor(typeArg) { // human or zombie master
        this.sunRays = 250;
        this.type = typeArg;
    }

    spawn(minion, row, column) {
        if (minion.type.toLowerCase() === "zombie" && this.type.toLowerCase() === "human") {
            console.log(`Only Zombie master can spawn zombies`);
            return;
        }

        if (minion.type.toLowerCase() === "plant" && this.type.toLowerCase() === "zombie master") {
            console.log(`Only Human can spawn plants`);
            return;
        }

        // if we cannot affor minion then dont even execute the rest and return from this function
        if (this.sunRays - minion.cost < 0) {
            console.log(`Cannot afford ${minion.name}. Player has only ${this.sunRays} sunrays`);
            return;
        }

        if (this.type.toLowerCase() === "human") {
            if (Game.gameArea.area[row][column].plants.length > 0) {
                let ocupyingPlant = Game.gameArea.area[row][column].plants[0];
                console.log(`Cannot add ${minion.name} in row ${row}, column ${column} because it is already
                occupied by #${ocupyingPlant.id} ${ocupyingPlant.name}`);
            } else {
                Game.gameArea.area[row][column].plants.push(minion);
                this.sunRays = this.sunRays - minion.cost;
                console.log(`Planted ${minion.name}. #${minion.id}`);
            }
        }

        if (this.type.toLowerCase() === "zombie master") {
            Game.gameArea.area[row][column].zombies.push(minion);
                this.sunRays = this.sunRays - minion.cost;
                console.log(`Spawned ${minion.name}. #${minion.id}`);
        }
    }
}

module.exports = Player;