// Caesar cipher function
function caesarCipher(text, shift, mode) {
  if (mode === 'decrypt') shift = -shift; // Reverse shift for decryption

  return text
    .split('')
    .map(char => {
      if (char.match(/[a-z]/i)) {
        const base = char === char.toLowerCase() ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
      }
      return char; // Keep non-alphabet characters unchanged
    })
    .join('');
}

// DOM elements
const modeToggle = document.getElementById('modeToggle');
const keyInput = document.getElementById('keyInput');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');

// Handle text processing
inputText.addEventListener('input', processText);
keyInput.addEventListener('input', processText);
modeToggle.addEventListener('change', processText);

function processText() {
  const mode = modeToggle.checked ? 'decrypt' : 'encrypt';
  const shift = parseInt(keyInput.value) || 0;
  const input = inputText.value;

  outputText.value = caesarCipher(input, shift, mode);
}

// Handle "Copy to Clipboard"
copyButton.addEventListener('click', () => {
  outputText.select();
  document.execCommand('copy');
  alert('Copied to clipboard!');
});