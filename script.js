const audio = document.getElementById('song');
const playButton = document.getElementById('play');
const seek = document.getElementById('seek');
const current = document.getElementById('current');
const duration = document.getElementById('duration');
const status = document.getElementById('status');
const intro = document.getElementById('intro');
const enterButton = document.getElementById('enter');
const lyricLines = [...document.querySelectorAll('.lyric-line')];

// Unang linya ay magsisimula sa 19.0s hanggang 24.0s
const lyricTimes = [
  19.0, // Unang linya (tatagal mula 19s hanggang 24s)
  24.0, // Pangalawang linya
  30.0, 
  36.0, 
  42.0, 
  48.0, 
  54.0, 
  61.0, 
  68.0, 
  75.0,
  82.0, 89.0, 96.0, 103.0, 110.0, 117.0, 124.0, 131.0, 138.0, 145.0,
  152.0, 159.0, 166.0, 173.0, 180.0, 187.0, 194.0, 201.0, 208.0, 215.0,
  222.0, 229.0, 236.0, 243.0, 250.0, 257.0, 264.0, 275.0 // Huling linya (Ceejay sa 4:35)
];

function timeLabel(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}

function syncButton() {
  const playing = !audio.paused;
  playButton.textContent = playing ? 'Ⅱ' : '▶';
  playButton.setAttribute('aria-label', playing ? 'Pause song' : 'Play song');
  playButton.classList.toggle('is-playing', playing);
}

async function togglePlayback() {
  if (audio.paused) {
    try {
      await audio.play();
      status.textContent = '';
    } catch (error) {
      status.textContent = 'Hindi ma-play ang audio. Siguraduhing kasama ang ayos-ba-audio.mp3 sa folder.';
    }
  } else {
    audio.pause();
  }
}

enterButton.addEventListener('click', async () => {
  intro.classList.add('intro-leave');
  window.setTimeout(() => { intro.hidden = true; }, 550);
  await togglePlayback();
});

playButton.addEventListener('click', togglePlayback);

audio.addEventListener('loadedmetadata', () => {
  duration.textContent = timeLabel(audio.duration);
  seek.max = String(Math.floor(audio.duration || 0));
});

audio.addEventListener('timeupdate', () => {
  current.textContent = timeLabel(audio.currentTime);
  if (!seek.matches(':active')) {
    seek.value = String(Math.floor(audio.currentTime));
  }

  const currentTime = audio.currentTime;
  let activeIndex = -1;

  for (let i = 0; i < lyricTimes.length; i++) {
    if (currentTime >= lyricTimes[i]) {
      activeIndex = i;
    } else {
      break;
    }
  }

  lyricLines.forEach((line, index) => {
    line.classList.toggle('active', index === activeIndex);
  });
});

seek.addEventListener('input', () => {
  if (Number.isFinite(audio.duration)) {
    audio.currentTime = Number(seek.value);
  }
});

audio.addEventListener('play', syncButton);
audio.addEventListener('pause', syncButton);
audio.addEventListener('ended', syncButton);
audio.addEventListener('error', () => {
  status.textContent = 'Hindi ma-load ang audio. I-check kung nasa parehong folder ang MP3.';
});