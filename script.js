// CHANGE BOX COLOR

document.getElementById("colorButton").addEventListener("click", function() {

  document.getElementById("box").style.backgroundColor = "lightgreen";

});


// CHANGE TEXT

document.getElementById("textButton").addEventListener("click", function() {

  document.getElementById("title").innerHTML = "You are almost there!";

});


// KEYBOARD EVENT

document.addEventListener("keydown", function(event) {

  if (event.code == "Space") {

    document.getElementById("result").innerHTML = "Time for a short break!";

    document.getElementById("emoji").innerHTML = "☕";

  }

});


// MOUSE EVENT

document.getElementById("box").addEventListener("mouseover", function() {

  document.getElementById("emoji").innerHTML = "😎";

});


// WINDOW EVENT

window.addEventListener("resize", function() {

  document.getElementById("windowSize").innerHTML =
    "Window width: " + window.innerWidth + "px";

});