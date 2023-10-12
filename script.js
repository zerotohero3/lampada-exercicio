const switchBtn = document.getElementById("switch");
const onImg = document.querySelector(".on");
const offImg = document.querySelector(".off");
let isOn = true;

switchBtn.addEventListener("click", () => {
  if (isOn) {
    onImg.style.display = "none";
    offImg.style.display = "block";
  } else {
    onImg.style.display = "block";
    offImg.style.display = "none";
  }
  isOn = !isOn;
});
