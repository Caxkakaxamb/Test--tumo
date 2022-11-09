class GrassEater extends LivingCreature {
    constructor(x, y, id){
        super(x, y, id);
        this.energy = 8;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            var newGrassEater = new GrassEater(newX, newY, this.id);
            grassEaterArr.push(newGrassEater);
            this.energy = 8;
        }
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy--;
        }
        this.die();
    }
    eat() {
        var emptyCellsTunavorMichat = this.chooseCell(5);
        var emptyCellsGrass = this.chooseCell(1);
        var emptyCells = emptyCellsTunavorMichat.concat(emptyCellsGrass)
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in tunavorMichatArr) {
                if (newX == tunavorMichatArr[i].x && newY == tunavorMichatArr[i].y) {
                    tunavorMichatArr.splice(i, 1);
                    break;
                }
            }

            this.mul();
        } else {
            this.move();
        }
    }

    die() {
        if (this.energy <= 0) {
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0
        }
    }
}   