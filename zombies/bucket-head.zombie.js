const Zombie = require("./zombie");

class BucketHeadZombie extends Zombie {
    constructor() {
        super("Bucket Head Zombie", 50, 100, 10);
    }
}

module.exports = BucketHeadZombie;