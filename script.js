var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");
var statement_div = document.getElementById("statement");

function rps() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}
rps();

function getP2Choice() {
    var choice = ['rock', 'paper', 'scissors'];
    var random = Math.floor(Math.random() * 3);
    return choice[random];
}

function w(p1, p2) {
    statement_div.innerHTML = p1Choice + " beats " + p2Choice + " Player 1 Won!";
}

function d(p1, p2) {
    statement_div.innerHTML = p1Choice + " draws " + p2Choice + " It's a Draw";
}

function l(p1, p2) {
    statement_div.innerHTML = p1Choice + " loses to " + p2Choice + " Player 1 Lost";
}

function game(p1Choice) {
    var p2Choice = getP2Choice();
    switch (p1Choice + p2Choice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            w(p1Choice, p2Choice); 
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            d(p1Choice, p2Choice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            l(p1Choice, p2Choice);
            break;
    }
}

