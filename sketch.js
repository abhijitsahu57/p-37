var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("../images/S.jpg");
  car1_img = loadImage("../images/images.jpg");
  car2_img = loadImage("../images/images.jpg");
  car3_img = loadImage("../images/images.jpg");
  car4_img = loadImage("../images/images.jpg");
  ground = loadImage("../images/S.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
