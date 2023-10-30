// These are the constants containing the HTML elements for further process...
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let activeCircle = 1;

// These eventlisteners functions are for the buttons to control progress steps numbers...
next.addEventListener("click", () => {
  activeCircle++;
  if (activeCircle > circles.length) {
    activeCircle = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  activeCircle--;
  if (activeCircle < 1) {
    activeCircle = 1;
  }
  update();
});

// This update function is for the dynamic progress bar filling animation... 
function update() {
  circles.forEach((circle, idx) => {
    if (idx < activeCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (activeCircle === 1) {
    prev.disabled = true;
  } else if (activeCircle === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
