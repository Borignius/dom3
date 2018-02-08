var div = document.getElementsByTagName('div')
var listOfC = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]

function createWheel(){
  listOfC.forEach(function(thisValue, i) {
    var butt = document.createElement("div")
    var cWheel = document.getElementById("colourwheel")
    butt.textContent = thisValue
    cWheel.appendChild(butt)
    butt.addEventListener('click', function(event) {
      colorSwatch = butt.textContent
    })
  })
}
createWheel()

var colorSwatch = "black"

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var size = 15
var width = (canvas.width / size)
var height = (canvas.height / size)
var squaresNeeded = width * height
var mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener('click',
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    sUpdate(mouse.x, mouse.y)

  }, false)

function sUpdate(x, y) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < squares.length; i++) {
    squares[i].update();
    }
}
function Square(x, y, col, size) {
  this.x = x
  this.y = y
  this.numclick = 0
  this.size = size
  this.col = col
  this.draw = function() {
    if (this.numclick == 0) {
      c.fillStyle = "white"
      c.fillRect(this.x + 1, this.y + 1, this.size -2 , this.size - 2)
    }else{
      c.fillStyle = this.col
      c.fillRect(x, y, this.size , this.size)
    }
  }

  this.update = function(){
    if(mouse.x <= this.x + this.size && mouse.x >= this.x && mouse.y <= this.y + this.size && mouse.y >= this.y){
      
      this.col = colorSwatch

      this.numclick++
    }
    this.draw()
  }
  this.draw()
}
var x = -size
var y = 0

var squares = [];

function init() {
  squares = [];
  for (var i = 0; i < squaresNeeded; i++) {
    if (x != canvas.width - size){
      x = x + size
    }else{
      x = 0
      y = y + size
    }

  var col = 'white'
  squares.push(new Square(x, y, col, size))
  }
}



init()
