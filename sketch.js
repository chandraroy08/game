function preload(){
  WhiteSAk=loadImage("WhiteAkmStand.png");
  WhiteAk=loadImage("WhiteAkm.png");

  BlackSAk=loadImage("BlackAkmStand.png");
  BlackAk=loadImage("BlackAkm.png");

  WhiteSDp=loadImage("WhiteDpStand.png");
  WhiteDp=loadImage("WhiteDp28.png");

  BlackSDp=loadImage("BlackDpStand.png");
  BlackDp=loadImage("BlackDp28.png");

  Geo=loadImage("Georgopol.png");
  StartButton=loadImage("StartButton.png");

  RulesImg=loadImage("Rules.png");

  PlainBlue=loadImage("PlainBlue.jpg");

  WhiteImg= loadImage("whiteDress.jpg")
  BlackImg= loadImage("blackdress.jpg")

  gunimg= loadImage("gun1.jpg")
  gunimg2= loadImage("gun2.jpg")

  blckgun1 = loadImage("blackgun1.png")
  

}

function setup() {
  createCanvas(1600,700);
  Sb=createSprite(1500,600);
  Sb.addImage(StartButton);
  Sb.scale=0.5

  Rule=createSprite(500,300);
  Rule.addImage(RulesImg);
  Rule.scale=0.8

  Geor=createSprite(650,500)
      Geor.addImage(Geo);
      Geor.scale=1
  Geor.visible=false;

  BlueImg=createSprite(650,500);
  BlueImg.addImage(PlainBlue);
  BlueImg.scale=1
  BlueImg.visible=false;

  white = createSprite(375,200)
  white.addImage(WhiteSAk)
  white.scale=1.0
  white.visible= false


  Black = createSprite(475,200)
  Black.addImage(BlackSAk)
  Black.scale=2.0
  Black.visible= false

  BlackD= createSprite(675,200)
  BlackD.addImage(BlackImg)
  BlackD.visible= false

  WhiteD= createSprite(375,200)
  WhiteD.addImage(WhiteImg)
  WhiteD.visible=false

  gun1= createSprite(675,200)
  gun1.addImage(gunimg)
  gun1.visible= false

  gun2=createSprite(375,200)
  gun2.addImage(gunimg2)
  gun2.visible= false

  blackgun1= createSprite(375,200)
  blackgun1.addImage(blckgun1)
  blackgun1.visible=false
  
  }



function draw() {
  background("yellow");  
  if(mousePressedOver(Sb)){
    BlueImg.visible=true;
    //white.visible= true 
    //Black.visible= true
    //WhiteD.visible= true
    //BlackD.visible= true 
    blackgun1.visible= true

  }

    if(mousePressedOver(WhiteD)){
      
      console.log("hello")
      BlueImg.visible=false
      Geor.visible=true
      WhiteD.visible=false
      BlackD.visible=false
      white.visible=true
      white.y=550
      //Black.visible=false
      

    }
    
// when we press Balck dress black should be selected
    if(mousePressedOver(blackgun1)){
      //BlueImg.visible= true
     // Sb.visible= true
      blackgun1.visible= false
     

       Geor.visible= true
      Black.visible=true
     // BlackD.visible=false
      //WhiteD.visible=false

      
      
      white.visible= false
      Black.visible=true
      Black.y= 400
    }
  drawSprites();
}