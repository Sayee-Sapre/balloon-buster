var bow , arrow,  playground, redB,blueB,greenB,pinkB,  arrowsGroup; 
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var swooshSound;
var score = 0;
 
function preload(){
  //loading Images
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  swooshSound = loadSound("Arrow+Swoosh+1.mp3")
}

function setup() {
  createCanvas(500, 500);
  
  //creating background
  playground = createSprite(0,0,600,600);
  playground.addImage(backgroundImage);
  playground.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //creating group
  arrowsGroup = createGroup();
  redB = createGroup();
  blueB  = createGroup();
  greenB = createGroup();
  pinkB = createGroup();
  

  
}

function draw() {
  background("black");
  
  // moving ground
   playground.velocityX = -3 

    if (playground.x < 0){
      playground.x = playground.width/2;
    }
  
  //to destroy the balloons
  if(arrowsGroup.isTouching(redB)){
    redB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowsGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+3;
  }
  
  if(arrowsGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+2;
  }
  
  if(arrowsGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowsGroup.destroyEach();
    score = score+5;
  }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
     createArrow();
    swooshSound.play();
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  
  textSize(20);
  fill ("black");
  text("score :"+score,395,30);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1
  blueB.add(blue); 
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1
  greenB.add(green);  
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2
  pinkB.add(pink); 
}  


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.velocityX = -6;
  arrow.y = bow.y;
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  arrowsGroup.add(arrow);
}

