// inital variables
let answer;
let answerTotal = parseInt(document.getElementById("pracTotal").innerHTML);
let answeredAnswered = 1;

// gets answer from app
function getAnswer() {
    answer = pracContent[pracSide2][pracWord].toLowerCase();
    document.getElementById("pracBox").value = answer;
    checkWord();
}

// set, check and loop answer
while (answerTotal > answeredAnswered) {
    getAnswer();
    nextWord();
    answeredAnswered++;
}

// get answer one last time
getAnswer();
