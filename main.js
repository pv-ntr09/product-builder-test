const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const themeSwitch = document.getElementById('checkbox');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

function displayNumbers() {
    const numbers = generateNumbers();
    numberElements.forEach((element, index) => {
        element.textContent = numbers[index];
        colorizeNumber(element, numbers[index]);
    });
}

function colorizeNumber(element, number) {
    let color;
    if (number <= 10) {
        color = '#f44336'; // Red
    } else if (number <= 20) {
        color = '#ff9800'; // Orange
    } else if (number <= 30) {
        color = '#ffc107'; // Amber
    } else if (number <= 40) {
        color = '#4caf50'; // Green
    } else {
        color = '#2196f3'; // Blue
    }
    element.style.backgroundColor = color;
    element.style.color = 'white';
}

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

generateBtn.addEventListener('click', displayNumbers);
themeSwitch.addEventListener('change', switchTheme, false);

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
}
