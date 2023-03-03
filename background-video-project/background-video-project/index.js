const btn = document.querySelector(".btn");
const video = document.querySelector(".background_video");
const fa = document.querySelector(".fa");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    console.log(video.classList.contains("pause"));
    btn.classList.remove("pause");
    video.play();
    fa.classList.add(".fa-pause");
    fa.classList.remove(".fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove(".fa-pause");
    fa.classList.add(".fa-play");
  }
});
