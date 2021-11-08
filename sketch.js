var bg,sleep, brush, gym, eat, bath, move;
var astronaut;
var gamestate = "initial";

function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
  eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
  move = loadAnimation("move1.png","move1.png","move2.png","move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  if(gamestate=="initial"){
  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  text("s key = Sleeping",20, 130);
  text("i key = Instructions",20, 145);
  if(keyDown("UP_ARROW")||keyDown("DOWN_ARROW")||keyDown("LEFT_ARROW")||keyDown("RIGHT_ARROW")||keyDown("m")||keyDown("s")){
    gamestate = "action";
  }
  }

  if(gamestate == "action"){
    edges=createEdgeSprites();
    astronaut.bounceOff(edges);
    
    if(keyDown("UP_ARROW")){
      astronaut.addAnimation("brushing", brush);
      astronaut.changeAnimation("brushing");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gymming", gym);
      astronaut.changeAnimation("gymming");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating", eat);
      astronaut.changeAnimation("eating");
      astronaut.x = 150;
      astronaut.y = 350;
      astronaut.velocityX = 0.5;
      astronaut.velocityY = 0.5;
    }
    
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing", bath);
      astronaut.changeAnimation("bathing");
      astronaut.x = 300;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }

    if(keyDown("m")){
      astronaut.addAnimation("moving", move);
      astronaut.changeAnimation("moving");
      astronaut.velocityX = 1;
      astronaut.velocityY = 1;
    }

    if(keyDown("s")){
      astronaut.addAnimation("sleeping", sleep);
      astronaut.changeAnimation("sleeping");
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      astronaut.x = 300;
      astronaut.y = 230;
    }

    if(keyDown("i")){
      textSize(20);
      fill("white")
      text("Instructions:",20, 35);
      textSize(15);
      text("Up Arrow = Brushing",20, 55);
      text("Down Arrow = Gymming",20, 70);
      text("Left Arrow = Eating",20, 85);
      text("Right Arrow = Bathing",20, 100);
      text("m key = Moving",20, 115);
      text("s key = Sleeping",20, 130);
    }
  }
}