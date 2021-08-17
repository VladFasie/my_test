let data = [
    {
        player: "Me",
        score: 0
    }, 
    {
        player: "Enemy",
        score: 0
    }
];

// Make a button, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// this is the associated html code for this challenge

//<html>
    //<head>
        //<link rel="stylesheet" href="index.css">
   // </head>
    //<body>
       // <button>LOG JANE'S SCORE!</button>
       // <script src="index.js"></script>
   // </body>
//</html>

document.getElementById("rock").addEventListener("click", function() {
    play('rock');
});

document.getElementById("paper").addEventListener("click", function() {
    play('paper');
});

document.getElementById("scissor").addEventListener("click", function() {
    play('scissor');
});

["rock", "paper", "scissor"];

function play(hand) {
    document.getElementById("my_hand").src = hand + '.png';
    document.getElementById("my_hand").style.display = "block";

    let enemyPlay = getRandomElement();
    document.getElementById("enemy_hand").src = enemyPlay + '.png';
    document.getElementById("enemy_hand").style.display = "block";

    if (hand == 'rock') {
        if (enemyPlay == 'paper') {
            // rock vs paper
            data[1].score++;
        }
        if (enemyPlay == 'scissor') {
            // rock vs scissor
            data[0].score++;
        }
    } else if (hand == 'paper') {
        if (enemyPlay == 'rock') {
            // paper vs rock
            data[0].score++;
        }
        if (enemyPlay == 'scissor') {
            // paper vs scissor
            data[1].score++;
        }
    } else {
        if (enemyPlay == 'rock') {
            // scissor vs rock
            data[1].score++;
        }
        if (enemyPlay == 'paper') {
            // scissor vs paper
            data[0].score++;
        }
    }

    document.getElementById("score").innerHTML = data[0].score + ' - ' + data[1].score;
};
