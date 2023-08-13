const Zombie = require("./zombie");

class FootballZombie extends Zombie {
    constructor() {
        super("Football Zombie", 150, 200, 10);
    }
}

module.exports = FootballZombie;