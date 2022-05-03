var square
function setup() {
  createCanvas(400,400);
  square=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
drawSprites()
if (keyIsDown(RIGHT_ARROW)){
  square.x=square.x+4
}
}




