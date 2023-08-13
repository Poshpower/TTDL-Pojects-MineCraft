const Plant = require('./plant');
class Peashooter extends Plant {
    constructor() {
        super("Peashooter", 100, 75, 20);
    }
}

module.exports = Peashooter;