let screenValue = '';

function addToScreen(value) {
    screenValue += value;
    document.getElementById('display').innerText = screenValue;
}

function clearScreen() {
    screenValue = '';
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    try {
        screenValue = eval(screenValue);
        document.getElementById('display').innerText = screenValue;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        screenValue = '';
    }
}
