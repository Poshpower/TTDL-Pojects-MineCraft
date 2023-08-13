const Field = require("./field");

class GameArea {
    constructor() {
        this.area = [];
        for (let i = 0; i < 6; i++) {
            this.area[i] = [];

            for (let j = 0; j < 3; j++) {
                this.area[i].push(new Field(i, j));
            }
            this.area.push(this.area[i]);
        }
    }
}

module.exports = GameArea;

// [
// [] [] [] []
// [] [] [] []
// [] [] [] []
//]