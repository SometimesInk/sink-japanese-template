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
  var nativeBtn = document.querySelector('.replay-button, .replaybutton');
  if (nativeBtn) {
    nativeBtn.click();
  } else {
    let audio = document.getElementsByTagName('audio')[0].play();
  }
}

function parsePartOfSpeech(input) {
  const mapping = {
    "Godan verb": "五段",
  };

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
  console.log("Audio relayed");
  document.querySelector(".audio").addEventListener("click", playCardAudio);
}

function checkCounter() {
  let counter = document.querySelector(".sink-japanese-template-counter");

  // Check counter
  if (counter.textContent != 1) {
    console.log("Not one: " + counter.textContent);
    return false;
  }
  console.log("One");
  counter.textContent = parseInt(counter.textContent) + 1; // Increase counter
  return true;
}

function relayTimer() {
  // Find back side of card
  const intervalId = setInterval(() => {
    if (document.querySelector(".sink-japanese-template-back") != null) {
      if (checkCounter() == false) {
        clearInterval(intervalId);
        return;
      }
      relayAudio();
      relayPartOfSpeech();
      clearInterval(intervalId);
    }
  }, 250);
}

(function() {
  relayTimer();
})();
