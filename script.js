const btnEl = document.querySelector(".btn");
const closeIconEL = document.querySelector(".close-icon");
const trailerContainerEL = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    trailerContainerEL.classList.remove("active");
});

closeIconEL.addEventListener("click", () => {
    trailerContainerEL.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});
