const IdCounter = require("./id-counter");

class Minion {
    constructor(typeArg, nameArg, hpArg, costArg, dmgArg) {
        this.id = IdCounter.id++;
        this.type = typeArg;
        this.name = nameArg;
        this.healthPoints = hpArg;
        this.cost = costArg;
        this.dmg = dmgArg;
    }
}

module.exports = Minion;