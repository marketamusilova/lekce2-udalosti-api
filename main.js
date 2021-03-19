// tady je místo pro náš program

let paragraph = document.querySelector("p");

function changeStyle() {
paragraph.style.fontWeight="bold";
}

function changeStyleBack() {
    paragraph.style.fontWeight="normal";
    }


let click = 0;
function changeColour() {
  if (click==0) {
  paragraph.classList.add("red")
  click = 1;
  }
  else {
  paragraph.classList.remove("red")
  click = 0;
  }

}

// Bohužel se mi nepodařilo vymyslet, jak udělat to, aby se text zvětšil s každým kliknutím. 
//Zvětší se mi tak bohužel jen jednou o 1px. Koumala jsem nad tím fakt dlouho, ale nic, co by fungovalo jsem nevymyslela. 
function changeSize() {
    paragraph.style.fontSize= "17px"
}

let audio;
audio = document.querySelector("#zvuk");

function play() {
audio.play()
}

function pause() {
    audio.pause()
}

function quiet() {
    audio.volume= "0"
}

function normal() {
    audio.volume= "0.5"
}

function loud() {
    audio.volume= "1"
}

function audioBack() {
    audio.load()
    audio.play()
}

