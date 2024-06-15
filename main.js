noseX=0;
noseY=0;
function preload(){
funny_mustache = loadImage("https://i.postimg.cc/g2MtnBCb/download-2.jpg");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide(); 
poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);  
}
function draw(){
image(video, 0, 0, 300, 300);
fill(250, 0 ,0);
stroke(250, 0, 0);
image(funny_mustache , noseX -30, noseY-8, 70, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelloaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            noseX= results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x =" + results[0].pose.nose.x);
            console.log("nose y =" + results[0].pose.nose.y);
        }
}