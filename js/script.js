const loginButton = document.getElementById("log-in");
const animatedTitle = document.getElementById("animated-title");
const animatedText = document.getElementById("animated-text");
let id = null;
let pos = 0;

loginButton.addEventListener("click", () => {
  window.location.href = "../login.html";
});

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
      animatedTitle.style.transition = "opacity 2s";
    } else {
      clearInterval(id);
    }
  }, 15);
};

window.onload = () => {
  animateTextElements();
};
