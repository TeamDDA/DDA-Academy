function showQuestion(gameCharacter) {

    //Ajax
    /*var questionData = {
        question: "Who am I?",
        correct: 0,
        answers: [
            "Dido",
            "LeBron James",
            "ninja",
            "e oniq pi4"
        ]
    };*/
    var questionData;

    $.ajax({
        type: 'POST',
        url: 'php/getQuestionIDs.php',
        data: { questionType: gameCharacter.characteristic + 1 }
    }).done(function (data) {
        var json = JSON.parse(data);
        var randomIndex = Math.floor(Math.random() * json.length);
        var questionId = parseInt(json[randomIndex]);
        $.ajax({
            type: 'POST',
            url: 'php/getQuestion.php',
            data: { questionId: questionId }
        }).done(function (data) {
            questionData = JSON.parse(data);

            var answers = document.getElementsByClassName('answers');
            $('.answers').off();

            for (var j = 0; j < 4; j++) {
                answers[j].style.backgroundColor = '#C0C0C0';
            }

            document.getElementById('questionBox').style.display = 'block';

            var questionTitle = document.getElementById('question');
            questionTitle.innerText = questionData.question;

            for (var i = 0; i < questionData.answers.length; i++) {
                var currentAnswer = document.getElementById(i + '-answer');
                currentAnswer.innerText = questionData.answers[i];

                $(currentAnswer).on('click', function () {

                    for (var j = 0; j < 4; j++) {
                        if (answers[j].id.substr(0, 1) == questionData.correct) {
                            answers[j].style.backgroundColor = 'green';
                        } else {
                            answers[j].style.backgroundColor = 'red';
                        }
                    }

                    if (this.id.substr(0, 1) == questionData.correct) {
                        PLAYER_SCORE += 10;
                        console.log(questionData.information);
                    }

                })
            }
        });
    });
}