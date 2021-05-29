const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    sun1=loadImage("sunrise1.png")
    sun2=loadImage("sunrise2.png")
    sun3=loadImage("sunrise3.png")
    sun4=loadImage("sunrise4.png")
    sun5=loadImage("sunrise5.png")
    sun6=loadImage("sunrise6.png")
    sun7=loadImage("sunset7.png")
    sun8=loadImage("sunset8.png")
    sun9=loadImage("sunset9.png")
    sun10=loadImage("sunset10.png")
    sun11=loadImage("sunset11.png")
    sun12=loadImage("sunset12.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);
    getBackgroundImg()

}

async function getBackgroundImg(){

    var worldTime=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var extract= await worldTime.json()
    console.log (extract)
 var dayTime=extract.datetime
 var hours=dayTime.slice(11,13)
  console.log(hours)
 
 
    if(hours>=2 && hours<4){
        background(sun12)
    }
   else if (hours>=4&& hours<6){
       background (sun1)
   }else if(hours>=6&& hours<8){
       background(sun2)

   }else if(hours>=8&& hours<10){
    background(sun3)
   }else if(hours>=10&& hours<12){
    background(sun4)
   }else if(hours>=12&& hours<14){
    background(sun5)
   }else if(hours>=14&& hours<16){
    background(sun6)
   }else if(hours>=16&& hours<18){
    background(sun7)
   }else if(hours>=18&& hours<20){
    background(sun8)
   }else if(hours>=20&& hours<22){
    background(sun9)
   }else if(hours>=22 && hours<23){
    background(sun10)
   }else if(hours>=23||hours<2){
    background(sun11)
   }



  


    

}
