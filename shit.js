let toggle = true;
    fetch('https://api.ipify.org?format=json')
         .then(response => response.json())
         .then(data => {
        if(toggle == true)
         document.getElementById('ip').innerHTML = data.ip;
        else
        document.getElementById('ip').innerHTML = "ip xd";
       });

    var toggle2 = false

    /*window.onload = function(){
        document.getElementById("header").style.filter = "blur(10px)";
        document.getElementById("header").style["-webkit-filter"] = "blur(10px)";
        document.getElementById("header").style["-moz-filter"] = "blur(10px)";
        document.getElementById("header").style["-o-filter"] = "blur(10px)";
        document.getElementById("header").style["-ms-filter"] = "blur(10px)";
        document.body.background = '#000000 url("gray.jpg") center center;'
        document.getElementById("playbutton").style.filter = "blur(0px)";
    }*/


    function play(){
         if(toggle == false){
            toggle = true
            document.getElementById("audio").play();
            document.getElementById("playbutton").src = "stop.png";
            /*document.getElementById("header").style.filter = "blur(0px)";
            document.getElementById("header").style["-webkit-filter"] = "blur(0px)";
            document.getElementById("header").style["-moz-filter"] = "blur(0px)";
            document.getElementById("header").style["-o-filter"] = "blur(0px)";
            document.getElementById("header").style["-ms-filter"] = "blur(0px)";*/
            document.body.backgroundImage = "url('gray.jpg')";
         }else{
            toggle = false
            document.getElementById("audio").pause();
            document.getElementById("playbutton").src = "play.png";
         }
    }
