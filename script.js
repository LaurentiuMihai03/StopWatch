let seconds = 00;
let tens = 00;
let appendTens=document.getElementById("tens");
let appendSeconds=document.getElementById("seconds");
let Dots=document.getElementById("dots")
let buttonStart=document.getElementById("button-start");
let buttonStop=document.getElementById("button-stop");
let buttonReset=document.getElementById("button-reset");

let interval; //Salveaza timer

function startTimer(){
    tens++;

    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}

buttonStart.addEventListener("click", function(){
    interval = setInterval(startTimer,10);
})

buttonStop.addEventListener("click", function(){
     clearInterval(interval);
})

buttonReset.addEventListener("click", function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML= tens;
})

// buttonStart.onclick = function () {
//     interval = setInterval(startTimer);
// };
// buttonStop.onclick = function () {
//     clearInterval(interval);
// }

// buttonReset.onclick = function () {
//     clearInterval(interval);
//     tens = "00";
//     seconds = "00";
//     appendSeconds.innerHTML = seconds;
//     appendTens.innerHTML = tens;
// }