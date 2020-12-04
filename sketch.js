var dog;
var cat;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  dog = createSprite(200,200,50,50);
  dog.shapeColor = "red";
  cat = createSprite(250,250,50,50);
  cat.shapeColor = "blue";
}


function draw() {
  background(255,255,255);  
  dog.y = World.mouseY;
  dog.x = World.mouseX;
  console.log (dog.y - cat.y);
  if(dog.x-cat.x<cat.width/2+dog.width/2 && cat.x-dog.x<cat.width/2 + dog.width/2 &&
    dog.y - cat.y<cat.height/2+dog.height+2 && cat.y - dog.y< cat.height/2+dog.height+2 ){
    dog.shapeColor = "green";
    cat.shapeColor = "green";
  }
else{
  dog.shapeColor = "red";
  cat.shapeColor = "blue";
}
  drawSprites();
}