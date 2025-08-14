let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let body = document.querySelector("body");

let colors = ["blue", "orange", "red", "yellow"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress", () => {
    if(started == false) {
        console.log("game has started");
        started = true;

        levelUp();
    }
});

const gameFlash = (btn) => {
   btn.classList.add("flash");

   setTimeout(() => {
        btn.classList.remove("flash");
   }, 250);
}

const userFlash = (btn) => {
    btn.classList.add("userFlash");

    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

const levelUp = () => {
    userSeq = [];
    level ++;
    h3.innerText = `Level ${level}`;
    
    let randomNum = Math.floor(Math.random() * 4);
    let randomBtn = colors[randomNum];

    gameSeq.push(randomBtn);
    console.log(gameSeq);
    // console.log(randomBtn);
    let btn = document.querySelector(`#${randomBtn}`);
    gameFlash(btn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game over! <b>Your score was ${level}</b> <br>Press any key to start the game`;
        body.classList.add("alert");

        setTimeout(() => {
            body.classList.remove("alert");
        }, 90);
        reset();
    }
}

const btnPress = (btn) => {
    // console.log(btn);
    userFlash(btn);

    let attr = btn.getAttribute("id");
    // console.log(attr);
    userSeq.push(attr);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}

let gameBox = document.querySelectorAll(".gameBox");
gameBox.forEach((box) => {
    box.addEventListener("click", () => {
        btnPress(box);
    })
})

const reset = () => {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}