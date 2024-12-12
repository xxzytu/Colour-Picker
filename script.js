const hueSlider = document.getElementById('hue-slider');
const hueValueInput = document.getElementById('hue-value');

function updateHue(hue) {
    hueSlider.value = hue;
    hueValueInput.value = hue;
    document.documentElement.style.setProperty('--hue', hue);
    hue = Number(hue);
    let ahue = hue + 60;
    let a2hue = hue + 300;
    if (hue > 300) {
        ahue = hue + 60 - 360;
    }
    if (hue > 60) {
        a2hue = hue + 300 - 360;
    }
    code.textContent = `:root {
        --color-primary: hsl(${hue}, 50%, 90%);
        --color-secondary: hsl(${hue}, 50%, 10%);
        --color-tertiary: hsl(${ahue}, 80%, 20%);
        --color-accent: hsl(${a2hue}, 80%, 20%);
    }
.dark {
        --color-primary: hsl(${hue}, 50%, 10%);
        --color-secondary: hsl(${hue}, 50%, 90%);
        --color-tertiary: hsl(${ahue}, 80%, 80%);
        --color-accent: hsl(${a2hue}, 80%, 80%);
    }`;
}
hueSlider.addEventListener('input', function () {
    updateHue(hueSlider.value);
});
hueValueInput.addEventListener('input', function () {
    const hue = hueValueInput.value;
    if (hue >= 0 && hue <= 360) {
        updateHue(hue);
    }
});

function dark() {
    const body = document.body;
    body.classList.toggle("dark");

    const isDarkMode = body.classList.contains("dark");

    // Adjust colors based on dark mode
    const hue = Number(document.documentElement.style.getPropertyValue('--hue') || 0);
    let ahue = hue + 60;
    let a2hue = hue + 300;

    if (hue > 300) ahue = hue + 60 - 360;
    if (hue > 60) a2hue = hue + 300 - 360;

    if (isDarkMode) {
        document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 50%, 10%)`);
        document.documentElement.style.setProperty('--pre-primary-color', `hsl(${hue}, 50%, 15%)`);
        document.documentElement.style.setProperty('--secondary-color', `hsl(${hue}, 50%, 90%)`);
        document.documentElement.style.setProperty('--tertiary-color', `hsl(${ahue}, 80%, 80%)`);
        document.documentElement.style.setProperty('--accent-color', `hsl(${a2hue}, 80%, 80%)`);
    } else {
        document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 50%, 90%)`);
        document.documentElement.style.setProperty('--pre-primary-color', `hsl(${hue}, 50%, 95%)`);
        document.documentElement.style.setProperty('--secondary-color', `hsl(${hue}, 50%, 10%)`);
        document.documentElement.style.setProperty('--tertiary-color', `hsl(${ahue}, 80%, 20%)`);
        document.documentElement.style.setProperty('--accent-color', `hsl(${a2hue}, 80%, 20%)`);
    }
}



const copyCodeBtn = document.getElementById('copy-code-btn');
const codeElement = document.getElementById('code');

copyCodeBtn.addEventListener('click', () => {
    const codeText = codeElement.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});


const howItWorksBtn = document.getElementById('how-it-works-btn');

howItWorksBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/@____._.._', '_blank');
});
