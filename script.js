//events
//on-click event
let bgblu = document.querySelector(".bgblu");
let bgblack = document.querySelector(".bgblack");
let bgred = document.querySelector(".bgred");
let bgdflt = document.querySelector(".bgdflt");
let bg = document.querySelector("body");
let heading = document.querySelector(".heading");

bgblu.onclick = () => {
  bg.style.backgroundColor = "#3979F2";
};
bgblack.onclick = () => {
  bg.style.backgroundColor = "black";
  heading.style.color = "white";
};
bgred.onclick = () => {
  bg.style.backgroundColor = "red";
};
bgdflt.onclick = () => {
  bg.style.backgroundColor = "white";
  heading.style.color = "black";
};

let hover = document.querySelector(".hover");
hover.onmouseover = () => {
  let imprsn = document.createElement("p");
  imprsn.innerText = "you got an impression";
  imprsn.after(".hover");
};

//event objects

let h1 = document.querySelector("h1");
h1.onmouseover = (evt) => {
  console.log(evt); //tells you complete info of the event
  console.log(evt.type); //tells you event type
  console.log(evt.target); //tells you where event targeted
  console.log(evt.clientX, evt.clientY); //tells event location on screen
};
