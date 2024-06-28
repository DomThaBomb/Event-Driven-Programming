// Domnik Tramondo

// HTML to Javascript

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const memeImage = document.getElementById('memeImage');

// Var to store interval ID for the movement of the image

let moveInterval;

// Functions of enable start and disable stop

function enableStartButton() {
    startButton.disabled = false;
    stopButton.disabled = true;
}

function enableStopButton() {
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Move meme Image

function moveMeme() {
    const maxX = window.innerWidth - memeImage.width;
    const maxY = window.innerHeight - memeImage.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    memeImage.style.position = 'absolute';
    memeImage.style.left = '${randomX}px';
    memeImage.style.top = '${randomY}px';
}

// Start moving meme Image

function startMoving() {
    // Enable stop button and disable start button
    enableStopButton();

    // Move every millisecond
    moveInterval = setInterval(moveMeme, 1000);
}

// Stop moving meme Image

function stopMoving() {
    // Enable stop button and disable start button
    enableStartButton();

    // Move every millisecond
    clearInterval(moveInterval);
}

// Buttons state in where it is at
enableStartButton();
