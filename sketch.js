var canvas, backgroundImage;
var carsAtEnd;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playerInfoRef;
var form, player, game;
var bike;

var cars, car1, car2, car3;

var car1Img,car2Img,car3Img;
var groundImg;
var track;
var carImg,carTop;
var bike,bikeTop;
var rcar,rcarTop;
var user;
var test;



function preload(){
carImg=loadImage("car.png")
carTop=loadImage("carTop.png")

bike=loadImage("bike.png")
bikeTop=loadImage("bikeTop.png")

rcar=loadImage("rcar.png")
rcarTop=loadImage("rcarTop.png")

user=loadImage("user.png")

}

function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  //test=new Test();
}


function draw(){
  
  if(playerCount === 3){
    game.update(1);
    game.chooseChar();

  }
  if(gameState === 1){
    clear();
    game.play();
    textSize(20)
    fill(0)
    text("Chose your character:",displayWidth-800,displayHeight+100)
  }

  if(gameState === 2){
    game.end();
    
  }
}
