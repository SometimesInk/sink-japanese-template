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

function parsePartOfSpeech(input) {
  const mapping = {
    "Godan verb": "五段",
  };

  document.querySelector('.page').innerHTML += input;
  if (!(input in mapping)) return null;
  return mapping[input];
}

/* Relays */

function relayPartOfSpeech() {
  let pos = parsePartOfSpeech(document.querySelector('.part-of-speech').textContent);
  if (pos != null) {
    document.querySelector('.kanji').innerHTML += `【${pos}】`;
  }
}

function relayAudio() {
  var newBtn = document.querySelector('.audio');
  newBtn.addEventListener("click", playCardAudio);
}

window.onload = () => {
  relayAudio();
  relayPartOfSpeech();
}
