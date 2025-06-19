const phrases = ["linux", "cybersecurity", "networks", "shell"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (charIndex < phrases[index].length) {
    typedText.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = phrases[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
