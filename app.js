

function roll_the_dices() { document.querySelector(".btn").addEventListener("click", function() {
    
    let all_circles = document.querySelectorAll(".circle");
    console.log(all_circles);

    for (let i = 0; i < all_circles.length; i++) {
        all_circles[i].style.backgroundColor = "hsl(0, 56%, 49%)";
    }

    let player1 = Math.floor(Math.random() * 6) + 1;
    let player2 = Math.floor(Math.random() * 6) + 1;

    if (player1 > player2) {
        document.querySelector("h1").innerHTML = "<img src='red-flag.png' alt='red_flag'> Player 1 Wins!";
    } else if (player2 > player1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! <img src='red-flag.png' alt='red_flag'>";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    let circle1 =document.querySelectorAll("#p1 .circle");
    let circle2 =document.querySelectorAll("#p2 .circle");

    switch (player1) {
        case 1:
            [4].map(x => circle1[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 2:
            [0,8].map(x => circle1[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 3:
            [0,4,8].map(x => circle1[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 4:
            [0,2,6,8].map(x => circle1[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 5:
            [0,2,4,6,8].map(x => circle1[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 6:
            [0,1,2,6,7,8].map(x => circle1[x]).map(x => x.style.backgroundColor = "white");
        break;
    }


    switch (player2) {
        case 1:
            [4].map(x => circle2[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 2:
            [0,8].map(x => circle2[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 3:
            [0,4,8].map(x => circle2[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 4:
            [0,2,6,8].map(x => circle2[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 5:
            [0,2,4,6,8].map(x => circle2[x]).map(x => x.style.backgroundColor = "white");
        break;
        case 6:
            [0,1,2,6,7,8].map(x => circle2[x]).map(x => x.style.backgroundColor = "white");
        break;
    }
});
}

roll_the_dices();