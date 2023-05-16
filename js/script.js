const loginButton = document.getElementById("log-in");
const animatedWhiteHive = document.getElementById("animated-element");

loginButton.addEventListener("click", () => {
    window.location.href = "../login.html";
});

animate = () => {
    animatedWhiteHive.style.transform = "translateX(20%)";
    animatedWhiteHive.style.opacity = "1";
};

window.onload = () => {
    animate();
};