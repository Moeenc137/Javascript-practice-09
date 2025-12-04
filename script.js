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

//on hover event

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

// event listeners (passing events through event listerners)
// basically event listeners can pass multiple events at the same time fot the same element

hover.addEventListener("click", () => {
  hover.style.backgroundColor = "blue";
});
//you should add event in a variable if you intent you remove it in the future through event listeners, because the callback should be the same in the event listener.
let removeevt = () => {
  hover.style.backgroundColor = "#545D5F";
};
hover.addEventListener("click", removeevt);

let hoverdel = hover.addEventListener("click", () => {
  hover.style.backgroundColor = "aqua";
});

//to remove event listeners
hover.removeEventListener("click", removeevt);

//practice to change color mode of body:
let modebtn = document.querySelector(".mode-button");
let currMode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    // document.body.classList.add("dark-mode");
    body.style.backgroundColor = "black";
    heading.style.Color = "white";
  } else {
    currMode = "light";
    // document.body.classList.add("light-mode");
    body.style.backgroundColor = "white";
    heading.style.Color = "black";
  }

  console.log(currMode);
});
