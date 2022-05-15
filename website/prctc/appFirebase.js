var obj;
var z=1;

    
function showQuest(){
    var quest=document.getElementById("quest");
    var opt=document.getElementsByClassName("ans");
    quest.innerHTML=obj.question;
    opt[0].innerHTML=obj.options.option1;
    opt[1].innerHTML=obj.options.option2;
    opt[2].innerHTML=obj.options.option3;
    opt[3].innerHTML=obj.options.option4;
    }

    function nextQuest(){
         if(z<=3){validate();
            remOpt();
        }
         if(z==3){
             document.getElementById("main").innerHTML="<h1 id='fS'>Final Score = "+score+"</h1><br><button onclick='playAgain()' id='PA'>Play Again</button>";
        }
        z++;    
        getData();
    }

    function selOpt(e){
        remOpt();
        var opt=document.getElementsByClassName("ans")[e];
        opt.setAttribute("class","ans active");
        
        }
        
        function remOpt(){
            var opt=document.getElementsByClassName("active");
            for(var a=0;a<opt.length;a++){
            opt[a].setAttribute("class","ans");    
        }
        }
        
        var score=0; 
        var myScore=document.getElementById("score");
        function validate(){
        var opt=document.getElementsByClassName("active");
        if(opt[0]==undefined){
        alert("Kindly Choose an Answer");
        z--;
    }
        else if(opt[0].innerHTML==obj.answer ){
        score+=10;
        myScore.innerHTML="Score = "+score;
        }
        else{
            myScore.innerHTML="Score = "+score;
        }
        }
        
    function getData(){
if(z<=3){
firebase.database().ref("myQuestions/Question"+z).once("value",function(data){
    obj=data.val();    
    showQuest();
});
}
}
    
function playAgain(){
 document.location.href="file:///C:/Users/XTREME-TECH/Desktop/website/prctc/Quiz App with Firebase.html";
 }
    