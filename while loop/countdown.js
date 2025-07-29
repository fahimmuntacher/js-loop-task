let num = 21;

let countdown = setInterval(() => {
    console.log("Now the num:", num);
    num--;

    if (num < 15) {
        clearInterval(countdown);
    }
}, 1000);