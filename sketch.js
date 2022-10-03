var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  grassImg=loadImage("grass.png")
}


function setup(){
  
  createCanvas(400,400);
//Mover fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creacion de Grass


//crear sprite rabbit 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  
  drawSprites();
  
var apple =Math.round(random(1,3));

var orangeL =Math.round(random(1,3));

var redL =Math.round(random(1,3));

var grass =Math.round(random(1,3));

// var select_sprites = Math.round(1,3);-INCORRECTO-
// var select_sprites = Math.random(random(1,3));-INCORRECTO-
// var select_sprites = Math(random(1,3));-INCORRECTO-
// var select_sprites = Math.round(random(1,3));-CORRECTO-


//CODIGO INCORRECTO-
 // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

 
//CODIGO CORRECTO-
  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  if (frameCount % 80 ==0){
    if(apple==1){
      createApples();
    }else if(orangeL==2){
      createOrange();
    }else if (redL==2){
      createRed();
    }else{
      createdGrass();
    }
  }

  console.log (redL)

//CODIGO INCORRECTO-  
  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }


  
//CODIGO INCORRECTO- 
  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}
//spawner de las manzanas- creador del sprite-velocidad-imagen
function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 2;
apple.lifetime = 160;
  
}
//spawner de las hojas naranjas- creador del sprite-velocidad-imagen
function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 2;
orangeL.lifetime = 160;
}
//spawner de las hojas rojas- creador del sprite-velocidad-imagen
function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
redL.velocityY = 2;
redL.lifetime = 160;
}
//spawner del pasto- creador del sprite-velocidad-imagen
function createdGrass(){
grass = createSprite(random(50,350),40,10,10);
grass.addImage(grassImg);
grass.scale=0.06
grass.velocityY = 2;
grass.lifetime = 160;

}
