const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const rwd = document.getElementById('rwd');
const fwd = document.getElementById('fwd');
const volume = document.getElementById('volume');
const fullscreen = document.getElementById('fullscreen');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

let intervalFwd;
let intervalRwd;

// Play/Pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Change Play/Pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress bar and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Update video with progress bar time
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Video volume control
function toggleVideoVolume() {
  if (video.muted === true) {
    // Unmute the video
    video.muted = false;
    volume.innerHTML = '<i class="fa fa-volume-up fa-2x"></i>';
  } else {
    // Mute the video
    video.muted = true;
    volume.innerHTML = '<i class="fa fa-volume-off fa-2x"></i>';
  }
}

// FullScreen mode
function toggleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.mozRequestFullscreen) {
    video.mozRequestFullscreen();
  }
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

volume.addEventListener('click', toggleVideoVolume);

fullscreen.addEventListener('click', toggleFullScreen);

// rwd.addEventListener('click', rewindVideo);
