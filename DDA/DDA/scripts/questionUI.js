function showQuestion(gameCharacter) {

    //Ajax
    var questionData = {
        question: "Who am I?",
        correct: 0,
        answers: [
            "Dido",
            "LeBron James",
            "ninja",
            "e oniq pi4"
        ]
    };

    var questionBox = document.getElementById('questionBox');
    var questionTitle = document.createElement('h3');
    questionTitle.innerHTML = questionData.question;
    questionBox.appendChild(questionTitle);
    var answerTemplate = document.createElement('button');
    for (var i = 0; i < questionData.answers.length; i++) {
        var currentAnswer = answerTemplate.cloneNode(true);
        currentAnswer.innerHTML = questionData.answers[i];
        currentAnswer.id = i + '-answer';
        questionBox.appendChild(currentAnswer);
        currentAnswer.addEventListener('click', function () {
            if(this.id.substr(0,1) == questionData.correct){
                PLAYER_SCORE += 10;
            }
        })
    }



}