const loginButton = document.getElementById("log-in");

loginButton.addEventListener("click", () => {
    window.location.href = "../login.html";
});

const animatedElement = document.getElementById("animated-element");

animate = () => {
    animatedElement.style.transform = "translateX(20%)";
    animatedElement.style.opacity = "1";
};

window.onload(animate());