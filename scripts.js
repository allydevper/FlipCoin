
let frontCount = 0;
let backCount = 0;

function flipCoin() {
    const button = document.getElementById('flipButton');
    button.disabled = true;

    const coin = document.getElementById('coin');
    let currentRotation = parseInt(coin.style.transform.replace(/\D+/g, '').length == 0 ? "0" : coin.style.transform.replace(/\D+/g, ''));
    currentRotation += 360;

    const frontCountElement = document.getElementById('frontCount');
    const backCountElement = document.getElementById('backCount');

    const result = Math.random() < 0.5 ? 'cara' : 'sello';

    if (isEven(currentRotation / 180)) {
        if (result === 'sello') {
            currentRotation += 180;
        }
    } else {
        currentRotation += 180;
        if (result === 'sello') {
            currentRotation += 180;
        }
    }

    coin.style.transform = `rotateY(${currentRotation}deg)`;

    setTimeout(() => {
        if (result === 'cara') {
            frontCount++;
            frontCountElement.textContent = frontCount;
        } else {
            backCount++;
            backCountElement.textContent = backCount;
        }
        button.disabled = false;
    }, 500);
}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}