
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const setsContainer = document.getElementById('sets-container');
    const setsSelect = document.getElementById('sets-select');

    generateButton.addEventListener('click', () => {
        generateAndDisplaySets();
    });

    function generateAndDisplaySets() {
        setsContainer.innerHTML = '';
        const numberOfSets = parseInt(setsSelect.value, 10);

        for (let i = 0; i < numberOfSets; i++) {
            const numberSet = generateUniqueNumbers(6, 1, 45);
            displaySet(numberSet, i);
        }
    }

    function generateUniqueNumbers(count, min, max) {
        const numbers = new Set();
        while (numbers.size < count) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displaySet(numberSet, index) {
        const setElement = document.createElement('div');
        setElement.className = 'number-set';

        numberSet.forEach((number, i) => {
            const numberElement = document.createElement('div');
            numberElement.className = 'number';
            numberElement.textContent = number;
            numberElement.style.backgroundColor = getNumberColor(number);
            numberElement.style.animationDelay = `${index * 0.1 + i * 0.05}s`;
            setElement.appendChild(numberElement);
        });

        setsContainer.appendChild(setElement);
    }

    function getNumberColor(number) {
        if (number <= 10) return '#f9c54d'; // Yellow
        if (number <= 20) return '#4da6f9'; // Blue
        if (number <= 30) return '#f95d5d'; // Red
        if (number <= 40) return '#8c8c8c'; // Gray
        return '#52d17c'; // Green
    }

    // Initial generation
    generateAndDisplaySets();
});
