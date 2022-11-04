function setup(){
    canvas = createCanvas(300 , 300)
    canvas.center();

    video = createCapture(VIDEO)
    video.size(350,350)
    video.hide()
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotposes)
}
function save(){
    save('myFilterImage.png');
}
function preload(){

}
function draw(){
    
}