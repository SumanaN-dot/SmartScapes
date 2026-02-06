const textBox = document.getElementById("textbox");

const typeSpeed = 10; // milliseconds per character

// Global variable to track if dialogue is complete
let isDialogueComplete = false;

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
    textProps.dialogueIndex += 1;
    textProps.textIndex = 0;
    textBox.style.cursor = "wait";
    revealText(dialogue[textProps.dialogueIndex], proxy);
}

function closeTextbox() {
    textBox.classList.add("close-text");
    textBox.classList.remove("show-text");
    textBox.style.display = "none";
}

function openTextbox() {
    textBox.classList.remove("close-text");
    textBox.classList.add("show-text");
    textBox.style.display = "block";
    isDialogueComplete = true;
    enableDoor();
}

function enableDoor() {
    const doorArea = document.querySelector(".door-link");
    if (doorArea) {
        doorArea.style.opacity = "1";
        doorArea.style.pointerEvents = "auto";
        doorArea.style.cursor = "pointer";
    }
}

function addDialogue(arrayOfSentencesToAdd) {
    for (let sentence of arrayOfSentencesToAdd) {
        dialogue.push(sentence);
    }
    // If this isn't the original dialogue, move the dialogue index back
    // to counteract the effect of the handleTextbox method increasing
    // dialogueIndex and detecting the end of the original dialogue array
    if (textProps.dialogueIndex > -1) {
        textProps.dialogueIndex--;
    }
    openTextbox();
    handleTextbox();
}