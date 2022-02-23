var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var game_state ="iniciando";
var limit=0;
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var potato = 0; potato <=width; potato = potato + 80) {
     divisions.push(new Divisions(potato, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var pontinho = 75; pontinho <=width; pontinho=pontinho+50) {
       plinkos.push(new Plinko(pontinho,75));
    }

    for (var pontinho = 50; pontinho <=width-10; pontinho=pontinho+50) {
        plinkos.push(new Plinko(pontinho,175));
    }

    for (var pontinho = 75; pontinho <=width; pontinho=pontinho+50) {
        plinkos.push(new Plinko(pontinho,275));
    }

    for (var pontinho = 50; pontinho <=width-10; pontinho=pontinho+50) {
        plinkos.push(new Plinko(pontinho,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 200 ", 720, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  Engine.update(engine);
  ground.display();
  
  if(game_state=="finalizando"){
    textSize(100)
    fill("red")
  text(" GAME CABO ", 100, 250);
  for (var batata= 0; batata < plinkos.length; batata++) {
    plinkos[batata].remove()
    
    
  }

}

  for (var batata= 0; batata < plinkos.length; batata++) {
    plinkos[batata].display()
    
    
  }
 
    if(ball!=null)
    {
       ball.display();
       if(ball.body.position.y>780){
         if(ball.body.position.x<300){
           score+=500;
           ball=null;
           if ( limit>= 5) game_state ="finalizando";
           
          }
          else if (ball.body.position.x < 600 && ball.body.position.x > 301){
            score+=100
            ball=null;
            if ( limit>= 5) game_state ="finalizando";
          }
          else if (ball.body.position.x < 900 && ball.body.position.x > 601){
            score+=200
            ball=null;
            if ( limit>= 5) game_state ="finalizando";
          }
        }
      }
      
      
      for (var potato = 0; potato < divisions.length; potato++) 
      {
        divisions[potato].display();
      }
      
    }
    
    
    function mousePressed()
    {
      if (game_state!=="finalizando"){
        limit++
        ball=new Ball(mouseX, 10, 10, 10);
      }
      
    }
    
    