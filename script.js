const startScreen = document.getElementById("start-screen");
const storyScreen = document.getElementById("story-screen");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");

startButton.addEventListener("click", () => {
  startScreen.classList.remove("active");
  storyScreen.classList.add("active");
});

nextButton.addEventListener("click", () => {
  alert("To be continued...");
});
