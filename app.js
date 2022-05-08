function roll_the_dices() { 

    for (let i = 0; i < all_circles.length; i++) {
        all_circles[i].style.backgroundColor = "hsl(0, 56%, 49%)";
    }

    player1 = Math.floor(Math.random() * 6) + 1;
    player2 = Math.floor(Math.random() * 6) + 1;

    function colorDot(arr, circle) { 
        return arr.map(x => circle[x].style.backgroundColor = "white");
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

function winner() {
    if (player1 > player2) {
        document.querySelector("h1").innerHTML = "<img src='red-flag.png' alt='red_flag'> Player 1 Wins!";
        document.querySelector(".clb-img").style.visibility = "visible";
        document.querySelector("#p1").style.transform = "scale(1.2)";
        document.querySelector("#p1").style.backgroundColor = "hsl(182, 68%, 50%)";
        document.querySelector("#p2").style.transform = "scale(0.8)";
        Array.from(circle1).map(x => 
            x.style.backgroundColor === "white" ?
            x.style.backgroundColor = "white" :
            x.style.backgroundColor = "hsl(182, 68%, 50%)");

    /*  for(let i = 0; i < circle1.length; i++) {
            circle1[i].style.backgroundColor == "white" ? circle1[i].style.backgroundColor = "white" : circle1[i].style.backgroundColor = "hsl(182, 68%, 50%)";
        } */
    } else if (player2 > player1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! <img src='red-flag.png' alt='red_flag'>";
        document.querySelector(".clb-img").style.visibility = "visible";
        document.querySelector("#p2").style.transform = "scale(1.2)";
        document.querySelector("#p1").style.transform = "scale(0.8)";
        document.querySelector("#p2").style.backgroundColor = "hsl(182, 68%, 50%)";
        Array.from(circle2).map(x => 
            x.style.backgroundColor === "white" ?
            x.style.backgroundColor = "white" :
            x.style.backgroundColor = "hsl(182, 68%, 50%)");

    /*  for(let i = 0; i < circle2.length; i++) {
            circle2[i].style.backgroundColor == "white" ? circle2[i].style.backgroundColor = "white" : circle2[i].style.backgroundColor = "hsl(182, 68%, 50%)";
        } */
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function revertWinner() {
    document.querySelector("h1").innerHTML = "";
    document.querySelector(".clb-img").style.visibility = "hidden";
    document.querySelector("#p1").style.transform = "scale(1)";
    document.querySelector("#p2").style.transform = "scale(1)";
    document.querySelector("#p1").style.backgroundColor = "hsl(0, 56%, 49%)";
    document.querySelector("#p2").style.backgroundColor = "hsl(0, 56%, 49%)";
    Array.from(all_circles).map(x => x.style.backgroundColor = "hsl(0, 56%, 49%)");
}

function throw_the_dices() {
    revertWinner();
    document.querySelector("h1").innerHTML = "Rolling!!!";  
    for (let i = 0; i < 15; i++) {
        setTimeout(roll_the_dices, 100 * i);
        };
    setTimeout(winner, 100 * 20+50);
    };


let player1 = 0;
let player2 = 0;

let all_circles = document.querySelectorAll(".circle");
let circle1 = document.querySelectorAll("#p1 .circle");
let circle2 = document.querySelectorAll("#p2 .circle");


document.querySelector(".button-73").addEventListener("click", throw_the_dices);