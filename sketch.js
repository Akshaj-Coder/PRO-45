var Player1, Player2;
var Player1img;
var Player2img;

function preload() {
  Player1img = loadImage("assets/pixel_ship_green_small.png");
  Player2img = loadImage("assets/pixel_ship_red_small.png");
}



function setup() {
  createCanvas(800,600);


  Player1 = createSprite(650,550,20,20);
  Player1.addImage("player1", Player1img);
  Player1.scale = 1.5;

  Player2 = createSprite(100, 550,20,20);
  Player2.addImage("player2", Player2img);
  Player2.scale = 1.5;
}

function draw() {
  background(0);  

 
  

  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Player1.x -= 10;
  }

  if (keyCode === RIGHT_ARROW) {
    Player1.x += 10;
  }
}