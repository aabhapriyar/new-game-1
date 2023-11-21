let engine;
let world;

var apple;
var banana;
var panda;
var strawberry;
var watermelon;
var bowl;
var forestbackground;
var fruit;

var score = 0;

var bk_song;
var sad_song;
var happy_song;
var onepoint_song;
var mute_button;

function preload(){
  appleimg = loadImage('assets/apple.png');
  watermelonimg = loadImage('assets/watermelon.png');
  pandaimg = loadImage('assets/panda.png');
  bowlimg = loadImage('assets/bowl.png');
  bananaimg = loadImage('assets/banana.png');
  forestbackgroundimg = loadImage('assets/forest background.jpg');

  bk_song = loadSound('Sounds/sound1.mp3');
  sad_song = loadSound('Sounds/sad.sound.mp3')
  happy_song = loadSound('Sounds/happy.sound.mp3');
  onepoint_song = loadSound('Sounds/onepoint.sound.mp3');
  }


function setup() {
  createCanvas(10000,10000);
  //createSprite(400, 200, 50, 50);

  bk_song.play();
  bk_song.setVolume(0.0);

  panda = createSprite(700,450,70,900)
  panda.addImage(pandaimg)
  panda.scale = 0.2

  bowl = createSprite(700,500,70,900);
  bowl.addImage(bowlimg);
  bowl.scale = 0.2;
  edges = createEdgeSprites();

  mute_button = createImg('assets/mute.png');
  mute_button.position(10,10);
  mute_button.size(50,50);


fruit = new Group()
}

function draw() {
  //background(255,255,255);
  background(51);
  image(forestbackgroundimg,0,0,displayWidth+80,displayHeight);  
  panda.collide(edges);
  bowl.collide(edges);
 
  
  
  bowl.x = World.mouseX;
  panda.x = World.mouseX;
 

  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 50 == 0) {
   if (select_sprites == 1) {
     createApples();
   } else if (select_sprites == 2) {
      createBananas();
   }else {
      createWatermelons();
    }
   }
   if (fruit.isTouching(bowl)){
    score+=2
   }
   drawSprites();
  textSize(25)
  fill ("white")
   text ("score:"+score,10,80)

}

function createApples(){
apple = createSprite(random(50,900),40,10,10);
apple.addImage(appleimg);
apple.scale = 0.02;
apple.velocityY = 3;
apple.lifetime = 150;
fruit.add(apple)
}

function createWatermelons(){
watermelon = createSprite(random(50,900),40,10,10);
watermelon.addImage(watermelonimg);
watermelon.scale = 0.05;
watermelon.velocityY = 3;
watermelon.lifetime = 150;
fruit.add(watermelon)
}

function createBananas(){
banana = createSprite(random(50,900),40,10,10);
banana.addImage(bananaimg);
banana.scale = 0.05;
banana.velocityY = 3;
banana.lifetime = 150;
fruit.add(banana)
}

function collisionwithBowl(){
// if(appleimgcollisionwithBowl)
//  score+=2
}

function collide(body,sprite){
  if(body!=null)
  {
   var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
  if(d<=80)
      {
        World.remove(engine.world,fruit);
        // strawberry = null;
         return true; 
      }
      else{
        return false;
      }
   }
}
