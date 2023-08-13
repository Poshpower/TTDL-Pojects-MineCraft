const Minion = require("../common/minion");

class Plant extends Minion {
    constructor(nameArg, hpArg, costArg, dmgArg) {
        super("Plant", nameArg, hpArg, costArg, dmgArg);
    }
}

module.exports = Plant;