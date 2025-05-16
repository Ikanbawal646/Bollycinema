function togglePlay() {
  const video = document.getElementById("videoPlayer");
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}