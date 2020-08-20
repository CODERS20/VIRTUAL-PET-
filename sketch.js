//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var DOGIMG1;
var DOGIMG2;

function preload()
{
  //load images here
 DOGIMG1 = loadImage("images/dogImg.png");
 DOGIMG2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1500, 1500);
  dog = createSprite(600,600,200,200);
  dog.addImage(DOGIMG1);
  
  database = firebase.database();

  foodStock = database.ref('FOOD');
  foodStock.on("value",readStock);
  
}


function draw() {  
background("#3D8B58");

fill("#C0D2DB")
textSize(40);
text("NOTE: PRESS UP_ARROW KEY TO FEED FARM_FRESH MILK",100,200);

text("MILK : " +foodS,1000,300);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(DOGIMG2);
}

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<= 0){
  x = 0;
} else{
  x = x-1;
}

database.ref('/').update({
  FOOD: x
})

}

