var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition;

document.getElementById("Abhinav").onclick=function(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult =function(e){
    console.log(e);
    var content= e.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= content;
    console.log(content);
    if(content== "open my channel"){
        window.open("https://www.youtube.com/channel/UCr6cx883Poro6Acxe1UpZmQ")
    }
    
}
