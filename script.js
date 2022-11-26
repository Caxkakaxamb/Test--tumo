var side = 27;

function setup() {
    frameRate(4);
    createCanvas(side * matrix[0].length, side * matrix.length);
    background('#acacac');
}


  
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
            }
            else if (matrix[y][x] == 3) {
                fill('red');
            }
            else if (matrix[y][x] == 4) {
                fill('blue');
            }
            else if (matrix[y][x] == 5) {
                fill('black');
            }
            else {
                fill('#acacac');
            }
            rect(side * x, side * y, side, side)
        }

    }
}