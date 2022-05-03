function roll_the_dices() { 
    
    let all_circles = document.querySelectorAll(".circle");
    console.log(all_circles);

    for (let i = 0; i < all_circles.length; i++) {
        all_circles[i].style.backgroundColor = "hsl(0, 56%, 49%)";
    }

    player1 = Math.floor(Math.random() * 6) + 1;
    player2 = Math.floor(Math.random() * 6) + 1;

    let circle1 =document.querySelectorAll(`#p1 .circle`);
    let circle2 =document.querySelectorAll("#p2 .circle");

    function colorDot(arr, circle) { 
        return arr.map(x => circle[x]).map(x => x.style.backgroundColor = "white");
     }

    function diceFace(player, circle) {
        switch (player) {
            case 1:
                colorDot([4], circle);
                break;
            case 2:
                colorDot([0,8], circle);
                break;
            case 3:
                colorDot([0,4,8], circle);
                break;
            case 4:
                colorDot([0,2,6,8], circle);
                break;
            case 5:
                colorDot([0,2,4,6,8], circle);
                break;
            case 6:
                colorDot([0,1,2,6,7,8], circle);
                break;
        }
     }

     diceFace(player1, circle1);
     diceFace(player2, circle2);
     
};

let player1 = 0;
let player2 = 0;

function winner() {
    if (player1 > player2) {
        document.querySelector("h1").innerHTML = "<img src='red-flag.png' alt='red_flag'> Player 1 Wins!";
    } else if (player2 > player1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! <img src='red-flag.png' alt='red_flag'>";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function throw_the_dices() {
    
    for (let i = 0; i < 20; i++) {
        setTimeout(roll_the_dices, 100 * i);
    };
    setTimeout(winner, 100 * 20+50);
}

document.querySelector(".button-73").addEventListener("click", throw_the_dices);
