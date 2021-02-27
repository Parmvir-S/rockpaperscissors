function dark() {
    document.getElementById('backgroundColor').setAttribute("class", "dark");
}

function light() {
    document.getElementById('backgroundColor').setAttribute("class", "light");
}

let score = 0;

function rock(val) {
    var compChoice = ["Rock", "Paper", "Scissors"];
    var randCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    var userInput = val;
    if (userInput == "Rock" & randCompChoice == "Rock") {
        document.getElementById("result").innerHTML = "It's A Tie!";
        document.getElementById("Computer").innerHTML = "Computer Chose Rock Too";
        score = score;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    } else if (userInput == "Rock" & randCompChoice == "Scissors") {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("Computer").innerHTML = "Computer Chose Scissors";
        score = score + 1;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    } else {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("Computer").innerHTML = "Computer Chose Paper";
        score = 0;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    }

}

function paper(val) {
    var compChoice = ["Rock", "Paper", "Scissors"];
    var randCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    var userInput = val;
    if (userInput == "Paper" & randCompChoice == "Paper") {
        document.getElementById("result").innerHTML = "It's A Tie!";
        document.getElementById("Computer").innerHTML = "Computer Chose Paper Too";
        score = score;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    } else if (userInput == "Paper" & randCompChoice == "Rock") {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("Computer").innerHTML = "Computer Chose Rock";
        score = score + 1;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    } else {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("Computer").innerHTML = "Computer Chose Scissors";
        score = 0;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    }
}

function scissors(val) {
    var compChoice = ["Rock", "Paper", "Scissors"];
    var randCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    var userInput = val;
    if (userInput == "Scissors" & randCompChoice == "Scissors") {
        document.getElementById("result").innerHTML = "It's A Tie!";
        document.getElementById("Computer").innerHTML = "Computer Chose Scissors Too";
        score = score;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    } else if (userInput == "Scissors" & randCompChoice == "Paper") {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("Computer").innerHTML = "Computer Chose Paper";
        score = score + 1;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    } else {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("Computer").innerHTML = "Computer Chose Rock";
        score = 0;
        document.getElementById("score").innerHTML = score
        if (score == 3) {
            score = 0
            document.getElementById("score").innerHTML = score
            alert("You Win!!!")
        }
    }
}

