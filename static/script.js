const textBox = document.getElementById("textbox");

const typeSpeed = 15; // milliseconds per character

// Global variable to track if dialogue is complete
let isDialogueComplete = false;

let checkedBulletinBoard = false;

// https://medium.com/@praveenpr1998/watching-object-changes-in-javascript-with-proxies-62b1febae0f6

let dialogue = [];

let textProps = {
    dialogueIndex: -1,
    textIndex: 0
}

let dialogueHandler = {
    set: function (target, property, value, receiver) {
        return target[property] = value;
    }
};

const proxyText = new Proxy(textProps, dialogueHandler);
let proxy;


function revealText(text, proxy) {
    if (proxy.dialogueIndex == dialogue.length) {
        closeTextbox();
    } else if (proxy.textIndex < text.length) {
        textBox.textContent += text.charAt(proxy.textIndex);
        proxy.textIndex++;
        setTimeout(revealText, typeSpeed, text, proxy);
    } else if (proxy.textIndex == text.length) {
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
    proxy.dialogueIndex += 1;
    proxy.textIndex = 0;
    textBox.style.cursor = "wait";
    revealText(dialogue[proxy.dialogueIndex], proxy);
}

function closeTextbox() {
    if (textBox.classList.contains("show-text")) {
        textBox.classList.add("close-text");
        textBox.classList.remove("show-text");
    }
    textBox.style.display = "none";
    // // Mark dialogue as complete and enable the door link
    isDialogueComplete = true;
    enableDoor();
}

function openTextbox() {
    if (!textBox.classList.contains("show-text")) {
        textBox.classList.remove("close-text");
        textBox.classList.add("show-text");
    }
    textBox.style.display = "block";
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
    // if you've reached the end of original dialogue array and 
    // just haven't clicked the textbox to close the dialogue box,
    // 
    if (proxy.dialogueIndex > -1 &&
        !(proxy.dialogueIndex == dialogue.length &&
        proxy.textIndex == dialogue[proxy.dialogueIndex -1].length)
    ) {
        proxy.dialogueIndex--;
    }

    for (let sentence of arrayOfSentencesToAdd) {
        dialogue.push(sentence);
    }
    openTextbox();
    handleTextbox();
}