
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

var idk = document.getElementById("sbutton");
idk.addEventListener("click", test);


function test()
        {
            
            //display input
            console.log(document.getElementById("submit").value);
           //  document.getElementById("name").submit();
            document.getElementById("showName").innerHTML =               document.getElementById("submit").value;
            
            //clear everything between into div tags
            var e = document.getElementById("intro1");
            console.log(e.style);
            if(e.style.display == "block"){
                alert("cookies");
                e.style.display = "none";
            }
            
            
            //var userName = document.getElementById("name");
           // document.write(userInput);
        }

// for correct answers?
//http://www.w3schools.com/js/js_validation.asp