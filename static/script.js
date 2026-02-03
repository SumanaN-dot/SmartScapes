const textBox = document.getElementById("textbox");

const typeSpeed = 10; // milliseconds per character

// https://medium.com/@praveenpr1998/watching-object-changes-in-javascript-with-proxies-62b1febae0f6

var dialogue = [];

let textProps = {
    dialogueIndex: -1,
    textIndex: 0
}

let dialogueHandler = {
    set: function (target, property, value, receiver) {
        return Reflect.set(target, property, value, receiver);
    }
};

let proxyText = new Proxy(textProps, dialogueHandler);

function revealText(text) {
    if (proxyText.dialogueIndex == dialogue.length) {
        closeTextbox();
    } else if (proxyText.textIndex < text.length) {
        textBox.textContent += text.charAt(proxyText.textIndex);
        proxyText.textIndex++;
        setTimeout(revealText, typeSpeed, text);
    } else if (proxyText.textIndex == text.length) {
        textBox.onclick = handleTextbox;
        textBox.style.cursor = "pointer";
    }
}

function handleTextbox() {
    textBox.onclick = null;
    textBox.textContent = '';
    proxyText.dialogueIndex++;
    proxyText.textIndex = 0;
    textBox.style.cursor = "wait";
    revealText(dialogue[proxyText.dialogueIndex]);
}

function closeTextbox() {
    textBox.classList.add("close-text");
}

function openTextbox() {
    textBox.classList.remove("close-text");
}

function setup() {
    textProps.dialogueIndex = -1;
    textProps.textIndex = 0;
    handleTextbox();
}

window.onload = setup;