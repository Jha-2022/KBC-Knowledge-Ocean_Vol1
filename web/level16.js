window.addEventListener('load', function() {
    const audio16 = document.getElementById('myAudio');
    const modal16 = document.getElementById('modal161');
    const playButton16 = document.getElementById('question16');
  
    playButton16.addEventListener('click', function() {
    audio16.play();
    modal16.style.display = 'none';
    });
  
    setTimeout(function() {
      modal16.style.display = 'block';
    }, 1);
  });
  
  
 

var answer2 = document.querySelectorAll("button")[2].innerHTML;

var chosenAnswer21 = document.querySelectorAll("button")[1].innerHTML;
document.querySelectorAll("button")[1].addEventListener("click",function(){
 if (chosenAnswer21==answer2){
    alert("Ye Sahi Utar Hai!! ");
   
    
 }

 else{
    alert("Kya lagta hain apko?");
    alert("Sahi utar to 1Crore, Galat utar to 320 pe girr jayenge app.")
    alert("apsoss ye galat uttar hai!!")
    var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
    Galat_Jawab.play();
 }
})

var chosenAnswer22 = document.querySelectorAll("button")[2].innerHTML;
document.querySelectorAll("button")[2].addEventListener("click",function(){
    if (chosenAnswer22==answer2){ 
       alert("Kya lagta hain apko?");
       alert("Sahi utar to 1crore, Galat utar to 320 pe girr jayenge app.")
       var Sahi_Jawab = new Audio("Kbc - Right Answer Sound.mp3");
       Sahi_Jawab.play();
       var Taliya = new Audio("KBC - Audience Clapping.mp3");
       Taliya.play();
       alert("1 Crore!! Jeet gaye hain Aap!!");
    }

    else{
      alert("Kya lagta hain apko?");
      alert("Sahi utar to 1crore, Galat utar to 320 pe girr jayenge app.")
      alert("apsoss ye galat uttar hai!!") 
      var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
      Galat_Jawab.play();
    }

   })


var chosenAnswer23 = document.querySelectorAll("button")[3].innerHTML;
document.querySelectorAll("button")[3].addEventListener("click",function(){
    if (chosenAnswer23==answer2){
       alert("Ye Sahi Utar Hai!! ");
    }
    else{
        alert("Kya lagta hain apko?");
        alert("Sahi utar to 1crore, Galat utar to 320 pe girr jayenge app.")
        alert("apsoss ye galat uttar hai!!")
        var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
        Galat_Jawab.play();
    }

   })

var chosenAnswer24 = document.querySelectorAll("button")[4].innerHTML;
document.querySelectorAll("button")[4].addEventListener("click",function(){
    if (chosenAnswer24==answer2){
        alert("Ye Sahi Utar Hai!! ");
   
    }
    else{
        alert("Kya lagta hain apko?");
        alert("Sahi utar to 1crore, Galat utar to 320 pe girr jayenge app.")
        alert("apsoss ye galat uttar hai!!")
        var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
        Galat_Jawab.play();
    }

   })

   
