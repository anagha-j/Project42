var issImg, bgImg, spacecraftImg1, spacecraftImg2,spacecraftImg3,spacecraftImg4, iss, spacecraft, hasDocked = false;

function preload(){

  issImg = loadImage("iss.png");
  bgImg = loadImage("spacebg.jpg");
  spacecraftImg1 = loadAnimation("spacecraft1.png");
  spacecraftImg2 = loadAnimation("spacecraft2.png");
  spacecraftImg3 = loadAnimation("spacecraft3.png");
  spacecraftImg4 = loadAnimation("spacecraft4.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);

  iss = createSprite(displayWidth/2,displayHeight/2,100,100);
  iss.addImage(issImg);
  iss.scale = 2;

  spacecraft = createSprite(displayWidth/2-30,displayHeight/2+150,100,100);
  spacecraft.addAnimation("Img1",spacecraftImg1);
  spacecraft.addAnimation("Img2",spacecraftImg2);
  spacecraft.addAnimation("Img3",spacecraftImg3);
  spacecraft.addAnimation("Img4",spacecraftImg4);

  spacecraft.scale = 0.3;

}

function draw() {
  background(bgImg);  
  //text (mouseX + ","+ mouseY, mouseX, mouseY)
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-4,4)
    if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-1
 
    }
    if (keyDown("DOWN_ARROW")){
     // spacecraft.y = spacecraft.y+1
     spacecraft.changeAnimation("Img2",spacecraftImg2)
    }

    if (keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x-1
        
      spacecraft.changeAnimation("Img3",spacecraftImg3)
    }

    if (keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x+1
      spacecraft.changeAnimation("Img4",spacecraftImg4)
    }


  }
  if(spacecraft.x <= 600 && spacecraft.y <= 500){
    push();
    fill ("white")
    textSize (30)
    text("Docking successful",displayWidth/2-40,displayHeight-80);
    hasDocked = true;
    pop();
  }
  drawSprites();
}