// tady je místo pro náš program

let paragraph = document.querySelector("p");

function changeStyle() {
paragraph.style.fontWeight="bold";
}

function changeStyleBack() {
    paragraph.style.fontWeight="normal";
    }

 
function changeColour() {
  paragraph.classList.toggle("red")
}


let x=16;
function changeSize(currentSize) {
    paragraph.style.fontSize = currentSize + 1 +"px";
    currentSize= x ++;
}

let audio;
audio = document.querySelector("#zvuk");

function play() {
audio.play()
}

function pause() {
    audio.pause()
}

function changeVolume(hlasitost) {
 audio.volume = hlasitost;
}

function audioBack() {
    audio.load()
    audio.play()
}

