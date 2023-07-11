

const name = prompt("Apka Name");
alert("Aaj Hamare Samne HotSeat Par Upasthit hain"+" "+name+" "+"ji")
alert("chaliye Prarambh Kiya Jaye. Let's play kon banega CrorePati");
alert("Game shuru karne se pehle aap ko batade ki aapke pass koi life line nhi hai kyu ki hamara utna budget nhi tha");


window.addEventListener('load', function() {
   const audio1 = document.getElementById('myAudio');
   const modal1 = document.getElementById('modal11');
   const playButton1 = document.getElementById('question1');
 
   playButton1.addEventListener('click', function() {
     audio1.play();
     modal1.style.display = 'none';
   });
 
   setTimeout(function() {
     modal1.style.display = 'block';
   }, 1);
 });
 
 

var answer1 = document.querySelectorAll("button")[1].innerHTML;

var chosenAnswer11 = document.querySelectorAll("button")[1].innerHTML;
document.querySelectorAll("button")[1].addEventListener("click",function(){
 if (chosenAnswer11==answer1){
    alert("Ye Sahi Utar Hai!! ")
    var Sahi_Jawab = new Audio("Kbc - Right Answer Sound.mp3");
    Sahi_Jawab.play();
    var Taliya = new Audio("KBC - Audience Clapping.mp3");
    Taliya.play();
    alert("Mubarak ho aap 1,000 ruppye ki Dhan Rashi Jeet Chuke hain ")
   
 }
 else{
    alert("apsoss ye galat uttar hai!!")
    var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
    Galat_Jawab.play();
 }
})

var chosenAnswer12 = document.querySelectorAll("button")[2].innerHTML;
document.querySelectorAll("button")[2].addEventListener("click",function(){
    if (chosenAnswer12==answer1){
       alert("Ye Sahi Utar Hai!! ")
     
    }
    else{
      alert("apsoss ye galat uttar hai!!") 
      var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
      Galat_Jawab.play();
    }

   })


var chosenAnswer13 = document.querySelectorAll("button")[3].innerHTML;
document.querySelectorAll("button")[3].addEventListener("click",function(){
    if (chosenAnswer13==answer1){
       alert("Ye Sahi Utar Hai!! ")
    }
    else{
        alert("apsoss ye galat uttar hai!!")
        var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
        Galat_Jawab.play();
    }

   })

var chosenAnswer14 = document.querySelectorAll("button")[4].innerHTML;
document.querySelectorAll("button")[4].addEventListener("click",function(){
    if (chosenAnswer14==answer1){
       alert("Ye Sahi Utar Hai!! ")
    }
    else{
        alert("apsoss ye galat uttar hai!!")
        var Galat_Jawab = new Audio("Kbc Galat Jawab.mp3");
        Galat_Jawab.play();
    }

   })
