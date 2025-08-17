'use strict';

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(main);

function main() {

    var oben
    var mid
    var but1_down
    var but2_down
    var but3_down

    var count = 0

    oben = document.getElementById("oben")
    mid = document.getElementById("mid")
    but1_down = document.getElementById("but1_down")
    but2_down = document.getElementById("but2_down")
    but3_down = document.getElementById("but3_down")

    document.getElementById("but1_down").onclick = function() {
 
  
        if(document.getElementById("but1_down").classList.contains("Step1")){
 
            document.getElementById("but1_down").classList.add("Step2")
            document.getElementById("but2_down").classList.add("Step2")
            Step2()
          
            if(document.getElementById("but1_down").innerHTML == "YESS 🥰"){
                document.getElementById("but1_down").classList.add("Step3")
            document.getElementById("but2_down").classList.add("Step3")
       
            }

      
           

        }else{
            document.getElementById("mid_pic").src = "/img/blue-blush-emoji.webp"
             document.getElementById("top").innerHTML = "Kinda nervous, ngl 😧"
            document.getElementById("but1_down").innerHTML="YEA SAME :3"
              document.getElementById("but2_down").innerHTML="WHAT DO YOU WANT?! 🙄"
          
          
            }


        document.getElementById("but1_down").classList.add("Step1")



        if(document.getElementById("but2_down").classList.contains("invisible")){
            count = 1
            Step3();
            document.getElementById("but1_down").classList.add("FINAL")
   
        }

        if(document.getElementById("but1_down").classList.contains("FINAL")){
            setTimeout(() => {
                StepFinal();
            }, 5000);
              
          
         
        }
  
        if(document.getElementById("but1_down").classList.contains("Step3")) {
          
            document.getElementById("but2_down").classList.add("invisible")
   
        }

    

      };

      document.getElementById("but2_down").onclick = function() {
        if(!document.getElementById("but1_down").classList.contains("Step1")){
        document.getElementById("mid_pic").src = "/img/sad-cat-sad.gif"
        document.getElementById("top").innerHTML= "Oh Damn 💔"
        setTimeout(() => {
            location.reload()
        }, 8000);
    }else{

        document.getElementById("but1_down").classList.add("Step2")
        document.getElementById("but2_down").classList.add("Step2")
        Step2();


        document.getElementById("but1_down").classList.add("Step3")
        document.getElementById("but2_down").classList.add("Step3")
        alert("EXCUSE ME?? NUH UH THATS NOT THE RIGHT ANSWER")
    

    }



    };
   
}


function Step2() {
    
    document.getElementById("mid_pic").src = "/img/ques.png"
    document.getElementById("top").innerHTML = "next Week Sonntag haben wir unser zweites DATE?"
   document.getElementById("but1_down").innerHTML="YESS 🥰"
     document.getElementById("but2_down").innerHTML="unfortunately 🙄"

}


function Step3()  { 


    document.getElementById("mid_pic").src = "/img/flush.png"
    document.getElementById("top").innerHTML = "BIST DU FINE MIT SPAZIEREN GEHEN UND DANN VLLT EIN CAFE?"
     document.getElementById("but1_down").innerHTML="YES SURE :3"
    document.getElementById("mid_2").classList.remove("invisible")
     document.getElementById("mid_2").innerHTML = "If u press YES (hopfully) dann u need to wait 5 Seconds 😧"

}

function StepFinal(){

     document.getElementById("but2_down").classList.add("invisible")
        document.getElementById("mid_pic").src = "/img/signthis.png"
    document.getElementById("top").innerHTML = "SIGN THIS THAN"
    document.getElementById("but1_down").innerHTML ="Sign"
    // document.getElementById("mid_2").classList.add("invisible")
      document.getElementById("mid_2").innerHTML = "ich hoffe du hast auf den button gedrückt WENN JA DANN SOLLST DU WISSEN DAS ICH DICH LIEB HAB DU TOLLER MENSCH MEINE :3"
    }
