const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const bgSound = new Audio("GodzillaMusic.wav");

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box3, box14, box15, box16;
var hero, monster, rope, ground;

var backgroundImg2;

var bg2, hourI, minutes2;
var timeOfDay;

async function getBackgroundImg() {
    var response1 = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON1 = await response1.json();

    var datetime1 = responseJSON1.datetime;
    hourI = datetime1.slice(11, 13);
    minutes2 = datetime1.slice(11, 16);

    // add conditions to change the background images from sunrise to sunset
    if(hourI >= 00 && hourI <= 02) {
        bg2 = "sunset12.png";
    } else if(hourI > 02 && hourI <= 04) {
        bg2 = "sunset11.png";
    } else if(hourI > 04 && hourI <= 06) {
        bg2 = "sunset10.png";
    } else if(hourI > 06 && hourI <= 08) {
        bg2 = "sunrise1.png";
    } else if(hourI > 08 && hourI <= 10) {
        bg2 = "sunrise2.png";
    } else if(hourI > 10 && hourI <= 12) {
        bg2 = "sunrise3.png";
    } else if(hourI > 12 && hourI <= 14) {
        bg2 = "sunrise4.png";
    } else if(hourI > 14 && hourI <= 16) {
        bg2 = "sunrise5.png";
    } else if(hourI > 16 && hourI <= 18) {
        bg2 = "sunrise6.png";
    } else if(hourI > 18 && hourI <= 20) {
        bg2 = "sunset7.png";
    } else if(hourI > 20 && hourI <= 22) {
        bg2 = "sunset9.png";
    } else if(hourI > 22 && hourI < 00) {
        bg2 = "sunset10.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg2 = loadImage(bg2);
}

function preload() {
  getBackgroundImg();
  bg = loadImage("kongGodzillaBG.jpeg");
}

function setup() {
  createCanvas(1300, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(200,400,250);
  rope = new Rope(hero.body, { x: 500, y: 300 });
  monster = new Monster(1100,550,300);

  box1 = new Box(800, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(800, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);

  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(900, 100, 70, 70);

  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);

  box17 = new Box(800, 100, 70, 70);
  box18 = new Box(900, 100, 70, 70);
  box19 = new Box(800, 100, 70, 70);
  box20 = new Box(900, 100, 70, 70);

  box21 = new Box(600, 100, 70, 70);
  box22 = new Box(600, 100, 70, 70);
  box23 = new Box(600, 100, 70, 70);
  box24 = new Box(600, 100, 70, 70);

  box25 = new Box(800, 100, 70, 70);
  box26 = new Box(800, 100, 70, 70);
  box27 = new Box(900, 100, 70, 70);
  box28 = new Box(900, 100, 70, 70);

  box29 = new Box(700, 100, 70, 70);
  box30 = new Box(700, 100, 70, 70);
  box31 = new Box(700, 100, 70, 70);
  box32 = new Box(700, 100, 70, 70);

}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();

  bgSound.play();
  bgSound.loop = true;

  fill("red");
  textSize(30);

  if(backgroundImg2) 
      image(backgroundImg2, 0, 0, 1300, 700);
      Engine.update(engine);

      // write code to display time in correct format here
      text(minutes2, 250, 100);
      text("INDIA", 250, 130);

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();
  box32.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

// function keyPressed(){
//   if(keyCode === 32){
//      slingshot.attach(bird.body);
//      bird.trajectory = [];
//      Matter.Body.setPosition(bird.body, {x: 200, y: 50});
//   }
// }