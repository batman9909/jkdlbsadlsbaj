let toggle = false;


function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

fetch('https://api.ipify.org?format=json')
         .then(response => response.json())
         .then(data => {
        if(toggle == true)
         document.getElementById('ip').innerHTML = data.ip;
        else
        document.getElementById('ip').innerHTML = "";
});

function play(){
         if(toggle == false){
            toggle = true
            document.getElementById("audio").play();
            document.getElementById("music-icon").src = "playing.png";
            //document.getElementById("music-icon").style.width = "40px";
            //document.getElementById("music-icon").style.height = "40px";
         }else{
            toggle = false
            document.getElementById("audio").pause();
            //document.getElementById("music-icon").style.width = "30px";
            //document.getElementById("music-icon").style.height = "30px";
            document.getElementById("music-icon").src = "stop2.png";

         } 
}

async function enter(){
   const elem1 = document.getElementById("welcome-sign");
   const elem2 = document.getElementById("for-welcome");
   elem1.remove();
   elem2.style.transition = "backdrop-filter 2s"
   elem2.style["backdrop-filter"] = "blur(0px)";
   document.getElementById("audio").play();
   await sleep(1 * 2000);
   elem2.remove();
}

   