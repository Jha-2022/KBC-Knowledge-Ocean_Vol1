window.addEventListener('load', function() {
    const audio17 = document.getElementById('myAudio');
    const modal17 = document.getElementById('modal171');
    const playButton17 = document.getElementById('question17');
  
    playButton17.addEventListener('click', function() {
    audio17.play();
    modal17.style.display = 'none';
    });
  
    setTimeout(function() {
      modal17.style.display = 'block';
    }, 1);
  });
  
  
 

var answer2 = document.querySelectorAll("button")[1].innerHTML;

var chosenAnswer21 = document.querySelectorAll("button")[1].innerHTML;
document.querySelectorAll("button")[1].addEventListener("click",function(){
 if (chosenAnswer21==answer2){
    alert("Kya lagta hain apko?");
    alert("Sahi utar to 7.5Crore, Galat utar to 75Lakh pe girr jayenge app.")
    var Sahi_Jawab = new Audio("Kbc - Right Answer Sound.mp3");
    Sahi_Jawab.play();
    var Taliya = new Audio("KBC - Audience Clapping.mp3");
    Taliya.play();
    alert("7.5 Crore!! Jeet gaye hain Aap!!");
   
    
 }

 else{
    alert("Kya lagta hain apko?");
    alert("Sahi utar to 7.5Crore, Galat utar to 75Lakh pe girr jayenge app.")
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
      alert("Kya lagta hain apko?");
      alert("Sahi utar to 7.5Crore, Galat utar to 75Lakh pe girr jayenge app.")
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
        alert("Sahi utar to 7.5Crore, Galat utar to 75Lakh pe girr jayenge app.")
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
        alert("Sahi utar to 7.5Crore, Galat utar to 75Lakh pe girr jayenge app.")
        alert("apsoss ye galat uttar hai!!")
        var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
        Galat_Jawab.play();
    }

   })

   