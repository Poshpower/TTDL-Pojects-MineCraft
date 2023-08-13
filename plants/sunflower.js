const Plant = require('./plant');
class Sunflower extends Plant {
    constructor() {
        super("Sunflower", 50, 50, 0);
    }
}

module.exports = Sunflower;