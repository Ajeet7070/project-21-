var canvas;
var music;
var box1, box2, box3, box4;
var mBox;

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    box1 = createSprite(80,590,180,10);
    box1.shapeColor="black";
    box2 = createSprite(280,590,180,10);
    box2.shapeColor="blue";
    box3 = createSprite(480,590,180,10);
    box3.shapeColor="green";
    box4 = createSprite(680,590,180,10);
    box4.shapeColor="red";

    mBox = createSprite(400,300,20,20);
    mBox.shapeColor = "white";
    mBox.velocityX = 10;
    mBox.velocityY = 12;

    
    

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() 
{
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    mBox.bounceOff(edges)
   /* mBox.bounceOff(box1)
    mBox.bounceOff(box2)
    mBox.bounceOff(box3)
    mBox.bounceOff(box4)*/

    if(box1.isTouching(mBox) && mBox.bounceOff(box1))
    {
        mBox.shapeColor = "black";
        music.play();
    }
    if(box2.isTouching(mBox))
    {
        mBox.shapeColor = "blue";
        music.stop();
        mBox.velocityX =0;
        mBox.velocityY =0;
        
        
    }
    if(box3.isTouching(mBox)&& mBox.bounceOff(box3))
    {
        mBox.shapeColor = "green";
        
    }
    if(box4.isTouching(mBox)&& mBox.bounceOff(box4))
    {
        mBox.shapeColor = "red";

       
    }
    
drawSprites();


    //add condition to check if box touching surface and make it box
}
