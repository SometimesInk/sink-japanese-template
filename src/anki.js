/*
const regex = /cy="(\d+)"/g;

// Logs an array of booleans, where true is high and false is low.
function pitch(svg) {
  let matches = [];
  let max = Number.MIN_SAFE_INTEGER;
  for (const match of svg.replaceAll(" ", "").matchAll(regex)) {
    let value = parseInt(match[1]);
    if (value > max) max = value;
    matches.push(value);
  }

  let accent = [];
  for (const match of matches) {
    if (match == max) accent.push(false);
    else accent.push(true);
  }

// console.log(accent);
  return accent;
}
*/

function playCardAudio() {
  // Find native anki button and click it
  var nativeBtn = document.querySelector('#hidden-audio .replay-button, #hidden-audio .replaybutton');
  alert("a");
  if (nativeBtn) {
    nativeBtn.click();
  }
}

function hideCardAudio() {
  var nativeBtn = document.querySelector('.replay-button, .replaybutton');
  if (nativeBtn) {
    nativeBtn.id = 'hidden-audio';
  }
}

function giveAudioRelay() {
  var newBtn = document.querySelector('.audio');
  newBtn.addEventListener("click", playCardAudio);
}

window.onload = () => {
  hideCardAudio();
  giveAudioRelay();
}
