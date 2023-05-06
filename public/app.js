let chiButton;
let nyButton;
let sfButton;
let chiAudio;
let nyAudio;
let audio = [];
let chi2;
let chi3;
let chi4;
let chi5;
let chi6;
let chi7;
let chi8;

window.addEventListener('load', function () {
});

//add the ability to override the time. manipulate the time stuff and figure out 

//time zones, hard set and offset. 

//maybe before you run your code it checks the time zone. maybe every hour it checks the time and preloads an hour before and after. "lazy-loading" 

//can we cheat the logistical difficulty by making it a blend, then it doesn't have to be so specific. This is the blend of the hour

//date objects

//set a variable that does the jump offset. total duration, how far in do i want to go, call the jump function. Maybe load it into single hours.

// Preload audio file before we start the sketch.
function preload() {
  let h = hour();
  chiAudio = loadSound("assets/Chi" + h +".m4a");
  nyAudio = loadSound("assets/NY4min.m4a");
  chi1 = loadSound("assets/Chi1.m4a");
  audio[0] = [];
  for (i=1; i<3; i++){
    audio[0][i]= loadSound("assets/Chi" + i +".m4a");
    console.log("loaded chicago" + i);

  }
}

// chicagoButton.addEventListener("click", toggleChi);
//create a series of buttons that toggle audio files that correspond to the place
function setup() {
  createCanvas(600, 600);
  background(0);
  chiButton = createButton("Listen to Now in Chicago");
  chiButton.position((3 * width) / 5, height / 3);
  chiButton.mousePressed(toggleChi);

  nyButton = createButton("Listen to Now in New York");
  nyButton.position(width / 5, height / 3);
  nyButton.mousePressed(toggleNY);

  ttButton = createButton("Time Travel");
  ttButton.position((4*width) / 9, (3 * height) / 4);
  ttButton.mousePressed(timeTravel);
}

function draw() {
  background(220);
}



//when clicked, play the audio file for chicago or pause it
function toggleChi() {
  console.log("clicked chicago");
  if (chiAudio.isPlaying()) {
    chiAudio.pause();
  } else {
    let h = hour();
    let m = minute();
    let s = second();
    chiAudio.play();

    console.log("Current time: " + h + ":" + m + ":" + s);
    console.log("play Chicago");
  }
}


function toggleNY() {
  if (nyAudio.isPlaying()) {
    nyAudio.pause();
  } else {
    nyAudio.play();
    let m = minute();
    let s = second();
    let h = hour();
    console.log("Current time: " + h + ":" + m + ":" + s);
    console.log("play New York");
  }
}

function timeTravel() {
  console.log("time travel");
  let timeDest = prompt("What time should we visit?", "Enter an hour from 0 - 24");
  console.log(timeDest);
  if (timeDest >= 24 || timeDest == "") {
    text = "Ok, nevermind.";
  } else {
    timeDest = timeDest%2+1;
    let travelAudio = audio[0][timeDest];
    var txt;
    if (confirm("Cool, is visitng that time in Chicago ok with you?")) {
      if (confirm("Shall we, then?")) {
      travelAudio.play();
      console.log("play Chicago at " + timeDest + "hr");
      } else {
        txt = "Cold feet, I get it. Time machines can be intimidating.";
      }
    } else {
      txt = "Ah... well unfortuntately the time machine can only head to the Windy City right now. Sorry!";
  }
  }
  
}
