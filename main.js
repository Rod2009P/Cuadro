noseX = 0;
noseY = 0;
rightwristX=0;
leftwristX=0;
difference=0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(150, 100)
    canvas = createCanvas(400, 370);
    canvas.position(600, 100);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#F5F5F5');
    fill('#234DA8');
    stroke('#103179');
    document.getElementById("square_side").innerHTML="El ancho y alto del cuadrado es " + difference + "px";
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log("model loaded");
}

function gotPoses(results)
{
    if (results.length >0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("coordenada x de la nariz: " + noseX);
        console.log("coordenada y de la nariz: " + noseY);

        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference= floor(leftwristX-rightwristX);
        console.log("coordenada x de la muñeca derecha: " + rightwristX);
        console.log("coordenada y de la muñeca izquierda: " + leftwristX);
    }
}