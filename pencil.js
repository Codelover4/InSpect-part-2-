status="";
img="";

function preload() {
    img = loadImage("pencils.jpg");
}

function setup() {
canvas = createCanvas(400,700);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
status = true;
objectDetector.detect(img, gotResult);
}

function gotResults() {
    document.getElementById("status").innerHTML = gotResults;
}