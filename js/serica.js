const video = document.querySelector(".serica-about-video");
const videoToggle = document.querySelector(".serica-video-toggle");


if (video && videoToggle) {

  function playVideo() {
    video.play();

    videoToggle.classList.add("is-hidden");

    videoToggle.setAttribute(
      "aria-label",
      "Pause video"
    );
  }


  function pauseVideo() {
    video.pause();

    videoToggle.classList.remove("is-hidden");

    videoToggle.setAttribute(
      "aria-label",
      "Play video"
    );
  }


  function toggleVideo() {

    if (video.paused) {
      playVideo();
    }

    else {
      pauseVideo();
    }

  }


  videoToggle.addEventListener(
    "click",
    toggleVideo
  );


  video.addEventListener(
    "click",
    toggleVideo
  );


  video.addEventListener(
    "ended",
    () => {

      video.currentTime = 0;

      videoToggle.classList.remove(
        "is-hidden"
      );

      videoToggle.setAttribute(
        "aria-label",
        "Play video"
      );

    }
  );

}