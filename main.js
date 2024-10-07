'use strict';

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(main);

function main() {


const skills = ["Frontend Developer", "Backend Developer", "Graphic Designer", "Video Editor", "Perfectionist"]

let varT = document.getElementById("varT")


var textIndex = 0; 
var i = 0; 
var speed = 120;  

var deleting = false; 

function typeWriter() {
  var currentText = skills[textIndex]; 

  if (!deleting && i < currentText.length) {
  
    varT.innerHTML += currentText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (deleting && i >= 0) {
    
    varT.innerHTML = "I'm a " + currentText.substring(0, i);
    i--;
    setTimeout(typeWriter, speed);
  } else {

    if (!deleting) {
     
      deleting = true;
      setTimeout(typeWriter, speed);
    } else {
   
      deleting = false;
      textIndex = (textIndex + 1) % skills.length;  
      i = 0;  
      setTimeout(typeWriter, speed);
    }
  }
}

typeWriter();  

    


}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
