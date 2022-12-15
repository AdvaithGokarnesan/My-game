const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var map
var player1
var player1Img
var player2
var player2Img

function preload()
{
map = loadImage("map.png")
player1Img = loadImage("Normalhuman.png")   
player2Img = loadImage("RoboSorcerer.png")
}

function setup() 
{
  
  createCanvas(windowWidth,windowHeight);
  

  engine = Engine.create();
  world = engine.world;
  player1 = createSprite(1450,700,100,100)
 player1.addImage(player1Img)
 player1.scale = 0.2;

 player2 = createSprite(200,150,100,100)
 player2.addImage(player2Img)
 player2.scale = 0.2;
}

function draw() 
{
  background(map);
  

  Engine.update(engine);
  if(keyDown("W")){
player1.y = player1.y - 5;
}
if(keyDown("A")){
  player1.x = player1.x - 5;
  }
  if(keyDown("D")){
    player1.x = player1.x + 5;
    }
    if(keyDown("S")){
      player1.y = player1.y + 5;
      }
      if(keyDown("UP_ARROW")){
        player2.y = player2.y - 5;
        }
        if(keyDown("LEFT_ARROW")){
          player2.x = player2.x - 5;
          }
          if(keyDown("RIGHT_ARROW")){
            player2.x = player2.x + 5;
            }
            if(keyDown("DOWN_ARROW")){
              player2.y = player2.y + 5;
              }

  drawSprites();
}

