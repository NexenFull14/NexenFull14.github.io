const loginButton = document.getElementById("log-in");
const animatedWhiteHive = document.getElementById("animated-element");
const animatedTitle = document.getElementById("animated-title");
const animatedText = document.getElementById("animated-text");
let id = null;
let pos = 0;

loginButton.addEventListener("click", () => {
  window.location.href = "../login.html";
});

animateHive = () => {
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(() => {
    if (pos <= 100) {
      pos++;
      animatedWhiteHive.style.transform = `translateX(${pos}px)`;
      animatedWhiteHive.style.opacity = "1";
      animatedWhiteHive.style.transition = "opacity 3.5s";
    } else {
      clearInterval(id);
    }
  }, 15);
};

animateTextElements = () => {
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(() => {
    if (pos <= 50) {
      pos++;
      animatedText.style.transform = `translateY(-${pos}%)`;
      animatedText.style.opacity = "1";
      animatedText.style.transition = "transform 1s ease-out 1s";
      animatedText.style.transition = "opacity 2s";
      animatedTitle.style.transform = `translateY(-${pos}%)`;
      animatedTitle.style.opacity = "1";
      animatedTitle.style.transition = "transform 1s ease-out";
      animatedTitle.style.transition = "opacity 3s";
    } else {
      clearInterval(id);
    }
  }, 15);
};

window.onload = () => {
  animateHive();
  animateTextElements();
};
