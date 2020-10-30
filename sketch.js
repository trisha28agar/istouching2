var movingRect,fixedRect,shape1,shape2


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,200,50,50)
fixedRect=createSprite(100,300,100,100)
movingRect.debug=true
fixedRect.debug=true
movingRect.shapeColor="green"
fixedRect.shapeColor="green"
shape1=createSprite(300,300,50,50)
shape2=createSprite(400,200,50,50)

}

function draw() {
  background(255,255,255);  
  movingRect.y=mouseY
  movingRect.x=mouseX

  var result=isTouching(movingRect,shape1)
if(result===true){
  movingRect.shapeColor="red"
  shape1.shapeColor="red"
}
  else{
    movingRect.shapeColor="green"
  shape1.shapeColor="green" 
  }
  var result=isTouching(movingRect,shape2)
  if(result===true){
    movingRect.shapeColor="red"
    shape2.shapeColor="red"
  }
    else{
      movingRect.shapeColor="green"
    shape2.shapeColor="green" 
    }

    var result=isTouching(movingRect,fixedRect)
if(result===true){
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}
  else{
    movingRect.shapeColor="green"
 fixedRect.shapeColor="green" 
  }
  
  drawSprites();
}

