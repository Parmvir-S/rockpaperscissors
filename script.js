function dark() {
    document.getElementById('backgroundColor').setAttribute("class", "dark");
}

function light() {
    document.getElementById('backgroundColor').setAttribute("class", "light");
}

function rock(val) {
    var compChoice = ["Rock", "Paper", "Scissors"];
    var randCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    var userInput = val;
    if (userInput == "Rock" & randCompChoice == "Rock") {
        document.getElementById("result").innerHTML = "It's A Tie!";
        document.getElementById("Computer").innerHTML = "Computer Chose Rock Too";
    } else if (userInput == "Rock" & randCompChoice == "Scissors") {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("Computer").innerHTML = "Computer Chose Scissors";
    } else {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("Computer").innerHTML = "Computer Chose Paper";
    }

}

function paper(val) {
    var compChoice = ["Rock", "Paper", "Scissors"];
    var randCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    var userInput = val;
    if (userInput == "Paper" & randCompChoice == "Paper") {
        document.getElementById("result").innerHTML = "It's A Tie!";
        document.getElementById("Computer").innerHTML = "Computer Chose Paper Too";
    } else if (userInput == "Paper" & randCompChoice == "Rock") {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("Computer").innerHTML = "Computer Chose Rock";
    } else {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("Computer").innerHTML = "Computer Chose Scissors";
    }
}

function scissors(val) {
    var compChoice = ["Rock", "Paper", "Scissors"];
    var randCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    var userInput = val;
    if (userInput == "Scissors" & randCompChoice == "Scissors") {
        document.getElementById("result").innerHTML = "It's A Tie!";
        document.getElementById("Computer").innerHTML = "Computer Chose Scissors Too";
    } else if (userInput == "Scissors" & randCompChoice == "Paper") {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("Computer").innerHTML = "Computer Chose Paper";
    } else {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("Computer").innerHTML = "Computer Chose Rock";
    }
}

