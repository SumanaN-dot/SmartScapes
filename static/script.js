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

const proxyText = new Proxy(textProps, dialogueHandler);
let proxy;


function revealText(text, proxy) {
    if (textProps.dialogueIndex == dialogue.length) {
        closeTextbox();
    } else if (textProps.textIndex < text.length) {
        textBox.textContent += text.charAt(textProps.textIndex);
        textProps.textIndex++;
        setTimeout(revealText, typeSpeed, text);
    } else if (textProps.textIndex == text.length) {
        enableClick();
        textBox.style.pointerEvents = "auto";
        textBox.style.cursor = "pointer";
    }
}

function disableClick() {
    textBox.removeEventListener("click", handleTextbox);
}

function enableClick() {
    textBox.addEventListener("click", handleTextbox);
}

function handleTextbox() {
    disableClick();
    textBox.style.pointerEvents = "none";
    textBox.textContent = '';
    textProps.dialogueIndex++;
    textProps.textIndex = 0;
    textBox.style.cursor = "wait";
    revealText(dialogue[textProps.dialogueIndex], proxy);
}

function closeTextbox() {
    textBox.classList.add("close-text");
}

function openTextbox() {
    textBox.classList.remove("close-text");
}