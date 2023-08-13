const Minion = require("../common/minion");

class Zombie extends Minion{
    constructor(nameArg, hpArg, costArg, dmgArg) {
        super("Zombie", nameArg, hpArg, costArg, dmgArg);
    }
}

module.exports = Zombie;