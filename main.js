var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
        console.log("Taking Selfie ---")
        speak();
    }
}

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
    

    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000)

    setTimeout(function()
    {
        take_snapshot();
        save();
    },10000)

    setTimeout(function()
    {
        take_snapshot();
        save();
    },15000)

}

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie1" src="'+data_uri+ '">'
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie1").src;
    link.href = image;
    link.click();
}
