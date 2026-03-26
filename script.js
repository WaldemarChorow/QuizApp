let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wofür steht die Abkürzung CSS?",
        "answer_1": "Computer Style Sheets",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Creative Style System",
        "answer_4": "Colorful Style Sheets",
        "right_answer": 2
    },
    {
        "question": "Welches Schlüsselwort wird in JavaScript oft verwendet, um eine Variable zu erstellen, deren Wert sich noch ändern darf?",
        "answer_1": "const",
        "answer_2": "static",
        "answer_3": "let",
        "answer_4": "variable",
        "right_answer": 3
    },
    {
        "question": "Welches HTML-Tag wird verwendet, um die wichtigste Hauptüberschrift einer Seite zu definieren?",
        "answer_1": "<heading>",
        "answer_2": "<title>",
        "answer_3": "<header>",
        "answer_4": "<h1>",
        "right_answer": 4
    },
    {
        "question": "Welches Zeichen wird in CSS verwendet, um ein Element anhand seiner ID auszuwählen (z.B. id=\"content\")?",
        "answer_1": ". (Punkt)",
        "answer_2": "* (Sternchen)",
        "answer_3": "# (Raute)",
        "answer_4": "@ (At-Zeichen)",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptaufgabe eines Web-Browsers?",
        "answer_1": "Websites programmieren",
        "answer_2": "HTML, CSS und JS rendern und anzeigen",
        "answer_3": "Das Internet reparieren",
        "answer_4": "Daten auf dem Webserver speichern",
        "right_answer": 2
    },
    {
        "question": "Wie erzeugt man in JavaScript ein einfaches Pop-up-Fenster mit einer Nachricht?",
        "answer_1": "alert(\"Hallo\");",
        "answer_2": "msg(\"Hallo\");",
        "answer_3": "popup(\"Hallo\");",
        "answer_4": "window.show(\"Hallo\");",
        "right_answer": 1
    }
];

let rightQuestions = 0;
let currentQuestions = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestions();
}

function showQuestions(){

    if(currentQuestions >= questions.length){
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('amount-questions').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-img').src = 'img/Group5.png';
    }
    else {

        let percent = (currentQuestions + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style =`width: ${percent}%;`;
        
        let question = questions[currentQuestions];
  
        document.getElementById('question-number').innerHTML = currentQuestions +1;
        document.getElementById('questiontext').innerHTML = question['question']
        document.getElementById('answer_1').innerHTML = question['answer_1']
        document.getElementById('answer_2').innerHTML = question['answer_2']
        document.getElementById('answer_3').innerHTML = question['answer_3']
        document.getElementById('answer_4').innerHTML = question['answer_4']
    }
}

function answer(selection){
     let question = questions[currentQuestions];
     let selectedQuestionNumber = selection.slice(-1);
     let idRightAnswer = `answer_${question['right_answer']}`;
     
     if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
     }
     else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idRightAnswer).parentNode.classList.add('bg-success');
     }
     document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestions++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestions();    
}

function resetAnswerButtons(){     
     document.getElementById("answer_1").parentNode.classList.remove('bg-success');
     document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
     document.getElementById("answer_2").parentNode.classList.remove('bg-success');
     document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
     document.getElementById("answer_3").parentNode.classList.remove('bg-success');
     document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
     document.getElementById("answer_4").parentNode.classList.remove('bg-success');
     document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartQuiz(){
    document.getElementById('header-img').src = 'img/bg b.png';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    rightQuestions = 0;
    currentQuestions = 0;
    init();
}