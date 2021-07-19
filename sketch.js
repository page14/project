var box;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	box = createSprite(100,350,50,50);
	
	box.shapeColor = "red"
	
	

 
}


function draw() {

background("grey");
 
lol();



  drawSprites();
 
}

function lol() {
 if(box.x < 400 && keyDown(LEFT_ARROW)){
	box.x = 500;
    console.log(box.x);
	}
	else
	 if(box.x> 400 && keyDown(RIGHT_ARROW)){  
box.x = 100;

	 }

	
  }
