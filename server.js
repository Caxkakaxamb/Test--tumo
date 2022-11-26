var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);

matrix = [];
grassArr = [];
grassEaterArr = [];
gisatichArr = [];
hzorgisatichArr = [];
tunavorMichatArr = [];

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


Grass = require("./Grass")
GrassEater = require("./GrassEater")
Gisatich = require("./Gisatich")
Hzorgisatich = require("./HzorGisatich")
TunavorMichat = require("./TunavorMichat")

function game() {
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
  io.sockets.emit("send matrix", matrix);
}
setInterval(game, 1000)

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
  io.sockets.emit('send matrix', matrix)
}

io.on('connection', function (socket) {
  createObjects();
})