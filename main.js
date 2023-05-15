function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(625, 300);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bz7ZDQnEj/model.json' , modelloaded);

}

function modelloaded(){
    console.log('model loaded');
}

function draw(){
    image(video, 0,0,300,300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}