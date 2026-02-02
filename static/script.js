const textBox = document.getElementById("textbox");

var dialogueIndex = 0;
var textIndex = 0;
const typeSpeed = 25; // milliseconds per character

function revealText(text) {
    if (dialogueIndex == dialogue.length) {
        textBox.classList.add("close-text");
    } else if (textIndex < text.length) {
        textBox.textContent += text.charAt(textIndex);
        textIndex++;
        setTimeout(revealText, typeSpeed, text);
    } else if (textIndex == text.length) {
        textBox.onclick = handleTextbox;
        textBox.style.cursor = "pointer";
        dialogueIndex++;
    }
}

function handleTextbox() {
    textBox.onclick = null;
    textBox.textContent = '';
    textIndex = 0;
    textBox.style.cursor = "wait";
    revealText(dialogue[dialogueIndex]);
}

// Start the reveal when the page loads
window.onload = handleTextbox;