const Zombie = require("./zombie");

class GrandpaZombie extends Zombie {
    constructor() {
        super("Granpa Zombie", 125, 175, 10);
    }
}

module.exports = GrandpaZombie;