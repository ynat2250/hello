
//var mes1 = 'Hello! Please enter your name below.';

var quiz = {
    title: 'Nathalie Quiz1',
    description: 'This quiz was made by Nathalie',
    difficulty: 10, //btw 1-20
    
    questions: [
    {
    text: "Question One",
    answers: ["0","2"],
    correctanswer: 1,
    metatags: ["question1","cool"],
    },
    {
    text: "Question Two",
    answers: ["10", "30"],
    correctanswer: 0,
    metatags: ["question2","cooler"],
    },
    {
    text: "Question Three" ,
    answers:["hi", "low"] ,
    correctanswer: 1 ,
    metatags: ["question3", "coolest"],
    }]
};

var intro2q = document.getElementById("sbutton").addEventListener("click", introfunc);
var nextq = document.getElementById("nbutton").addEventListener("click", callQ);



function introfunc(){
            
            //display input
            console.log(document.getElementById("submit").value);
           //  document.getElementById("name").submit();
            document.getElementById("showName").innerHTML = "Welcome to the first question of the quiz " + document.getElementById("submit").value;
            
            //clear everything between intro div tags
            // var introthere = document.getElementById("intro1");
    
            document.getElementById("intro1").className="hidden";
            //console.log(introthere.style);
            //if(introthere.style.display === "block"){
            //    introthere.style.display = "none";
           // }
    
            //show everything b/w questions tags
           // var qthere = document.getElementById("question");
            //if(qthere.style.display === "none") {
            //qthere.style.display = "block";
            //}
    
            document.getElementById("question").className="notHidden";
            callQ();
    
}

j=0;
numCorrect=0;
tempA=0;

function callQ(){

    if(j<quiz.questions.length){
    for(i=0; i<quiz.questions[j].answers.length; i++){
        //console.log("i= ", i,"j= ", j);
        //console.log(document.getElementById("label"+i));
        document.getElementById("button"+i).className="notHidden";
        document.getElementById("label"+i).className="notHidden";
        document.getElementById("label"+i).innerHTML = quiz.questions[j].answers[i];
        document.getElementById("qtext").innerHTML = quiz.questions[j].text;
        
        if(document.getElementById("button"+i).checked==true){
           tempA=i;
        }
        document.getElementById("button"+i).checked=false;
        
    }
        if( j>0){
        questionChecking=j-1;  //you are checking the previous question when the new question is called  
        console.log("tempA: ",tempA);
        console.log("correct: ",quiz.questions[questionChecking].correctanswer);
        if(tempA==quiz.questions[questionChecking].correctanswer){
            console.log("right answer");
            numCorrect++;
        console.log(numCorrect);
        }
    }
    }
    j++;
}  

function checkAnswer(tempA){
    console.log("tempA= ", tempA);
    quiz.questions[j].correctanswer
    
}
        
    


// for correct answers?
//http://www.w3schools.com/js/js_validation.asp
//label
//try document.getElementById("myDIV").className = "newClassName"; with class name as hidden