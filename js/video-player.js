const videoPlayers = document.querySelectorAll("[data-video-player]");


videoPlayers.forEach((player) => {

  const video = player.querySelector("video");

  const toggle = player.querySelector("[data-video-toggle]");


  if (!video || !toggle) return;



  function showPlayButton() {

    toggle.classList.remove("is-hidden");

    toggle.setAttribute(
      "aria-label",
      "Play video"
    );

  }



  function hidePlayButton() {

    toggle.classList.add("is-hidden");

    toggle.setAttribute(
      "aria-label",
      "Pause video"
    );

  }



  function toggleVideo() {

    if (video.paused) {

      video.play();

      hidePlayButton();

    }

    else {

      video.pause();

      showPlayButton();

    }

  }



  toggle.addEventListener(
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

      showPlayButton();

    }
  );

});