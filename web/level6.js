window.addEventListener('load', function() {
    const audio6 = document.getElementById('myAudio');
    const modal6 = document.getElementById('modal61');
    const playButton6 = document.getElementById('question6');
  
    playButton6.addEventListener('click', function() {
      audio6.play();
      modal6.style.display = 'none';
    });
  
    setTimeout(function() {
      modal6.style.display = 'block';
    }, 1);
  });
  
  
 

var answer2 = document.querySelectorAll("button")[1].innerHTML;

var chosenAnswer21 = document.querySelectorAll("button")[1].innerHTML;
document.querySelectorAll("button")[1].addEventListener("click",function(){
 if (chosenAnswer21==answer2){
    alert("Ye Sahi Utar Hai!! ");
    var Sahi_Jawab = new Audio("Kbc - Right Answer Sound.mp3");
       Sahi_Jawab.play();
       var Taliya = new Audio("KBC - Audience Clapping.mp3");
       Taliya.play();
       alert("Mubarak ho aap 20,000 ruppye ki Dhan Rashi Jeet Chuke hain ");   
 }

 else{
    alert("apsoss ye galat uttar hai!!")
    var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
    Galat_Jawab.play();
 }
})

var chosenAnswer22 = document.querySelectorAll("button")[2].innerHTML;
document.querySelectorAll("button")[2].addEventListener("click",function(){
    if (chosenAnswer22==answer2){
       alert("Ye Sahi Utar Hai!! ");
      
    }

    else{
      alert("apsoss ye galat uttar hai!!") 
      var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
      Galat_Jawab.play();
    }

   })


var chosenAnswer23 = document.querySelectorAll("button")[3].innerHTML;
document.querySelectorAll("button")[3].addEventListener("click",function(){
    if (chosenAnswer23==answer2){
       alert("Ye Sahi Utar Hai!! ")
        
    }
    else{
        alert("apsoss ye galat uttar hai!!")
        var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
        Galat_Jawab.play();
    }

   })

var chosenAnswer24 = document.querySelectorAll("button")[4].innerHTML;
document.querySelectorAll("button")[4].addEventListener("click",function(){
    if (chosenAnswer24==answer2){
    alert("Ye Sahi Utar Hai!! ")
    
    }


    else{
        alert("apsoss ye galat uttar hai!!")
        var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
        Galat_Jawab.play();
    }

   })

   
