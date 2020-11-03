var movingrect, fixedrect

function setup() {
  createCanvas(1200,800);
  movingrect= createSprite(400, 200, 80, 50);
  movingrect.shapeColor="green"
  movingrect.debug= true
  fixedrect= createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="green"
fixedrect.debug=true

  gameobj1= createSprite(100,100,50,50)
  gameobj1.shapeColor= "green"

  gameobj2= createSprite(200,100,50,50)
  gameobj2.shapeColor= "green"

  gameobj3= createSprite(300,100,50,50)
  gameobj3.shapeColor= "green"
}

function draw() {
  background(255,115,50);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY

  if(isTouching(movingrect,gameobj2)){
    movingrect.shapeColor="red"
    gameobj2.shapeColor="red"
  }
  else {
    movingrect.shapeColor="green"
    gameobj2.shapeColor="green"
  }
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x-obj2.x < obj2.width/2+obj1.width/2 && 
    obj2.x-obj1.x < obj2.width/2+obj1.width/2 &&
    obj1.y-obj2.y < obj2.width/2+obj1.width/2 && 
    obj2.y-obj1.y < obj2.width/2+obj1.width/2 ){
    return true
  }
  else{
    return false
  }
}