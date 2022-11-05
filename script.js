var matrix = [];

var grassArr = [];
var grassEaterArr = [];
var gisatichArr = [];
var hzorgisatichArr = [];
var tunavorMichatArr = [];

var side = 27;

function setup() {
    matrix = generateMatrix(35);
    frameRate(4);
    createCanvas(side * matrix[0].length, side * matrix.length);
    background('#acacac');
    createObjects();
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

    for (var i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }
    for (var i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat();
    }
    for (var i = 0; i < gisatichArr.length; i++) {
        gisatichArr[i].eat();
    }
    for (var i = 0; i < hzorgisatichArr.length; i++) {
        hzorgisatichArr[i].eat();
    }
    for (var i = 0; i < tunavorMichatArr.length; i++) {
        tunavorMichatArr[i].eat();
    }
}

function createObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var g = new Grass(x, y, 1);
                grassArr.push(g);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2);
                grassEaterArr.push(ge);
            }
            else if (matrix[y][x] == 3) {
                var ges = new Gisatich(x, y, 3);
                gisatichArr.push(ges);
            }
            else if (matrix[y][x] == 4) {
                var gese = new HzorGisatich(x, y, 4);
                hzorgisatichArr.push(gese);
            }
            else if (matrix[y][x] == 5) {
                var gess = new TunavorMichat(x, y, 5);
                tunavorMichatArr.push(gess);
            }
        }
    }
}

function generateMatrix(size) {
    var matrix = [];
    for (var y = 0; y < size; y++) {
        matrix[y] = [];
        for (var x = 0; x < size; x++) {
            var randomElement = random([0, 2, 0, 0, 0, 4, 0, 4, 5, 5, 5, 5, 5, 5, 0, 2, 1, 2, 2, 0, 3, 0, 0, 1, 2, 3, 2, 2, 1, 2]);
            matrix[y][x] = randomElement;
        }
    }
    return matrix;
}