var ball,database,position,ballImg,bg;

function preload(){


    bg = loadImage("build.jpg");
    ballImg = loadImage("hotairrballoon.png");
}
function setup(){
    createCanvas(800,800);
    database= firebase.database();
    ball = createSprite(250,250,10,10);
    ball.addImage(ballImg);
    ball.scale = 0.3;
    ball.shapeColor = "red";
var locOfchild= database.ref("ball/positions");
locOfchild.on("value",readOp,showerror);

}

function draw(){
    background(bg);
 
     if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/positions").set({
    
        y:ball.y+y
    })
}
function readOp(data){
position=data.val();
ball.y = position.y
}

function showerror(){
   // alert(showerror)
   console.log("show error")
}
