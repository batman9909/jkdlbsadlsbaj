let toggle = true;
    fetch('https://api.ipify.org?format=json')
         .then(response => response.json())
         .then(data => {
        if(toggle == true)
         document.getElementById('ip').innerHTML = data.ip;
        else
        document.getElementById('ip').innerHTML = "ip xd";
       });

    function play(){
         if(toggle == false){
            toggle = true
            document.getElementById("audio").play();
            document.getElementById("playbutton").src = "stop.png";
            document.body.backgroundImage = "url('gray.jpg')";
         }else{
            toggle = false
            document.getElementById("audio").pause();
            document.getElementById("playbutton").src = "play.png";
         }
    }
