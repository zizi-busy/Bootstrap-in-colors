const color = document.querySelector('.color')
const form = document.querySelector('.add')
const colorSections = document.querySelector('.color-divs')
const generateBtn = document.querySelector('.generate-btn')
const inputNumber = document.querySelector('.input-number')
const container = document.querySelector('.ul-container')
/* const copyBtn = document.querySelector ('.copy')
const li = document.querySelector ('.color-divs li') */

//Random Color Generator
const generateHexaColor = () => {
    let string = "0123456789abcdef";
    let hexaColor = "#";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length);
        hexaColor += string[index];
    }
    return hexaColor;
};

// Color interval
const interval = setInterval(function timerFunc() {
    let textColor = generateHexaColor();
    color.style.color = textColor;
}, 1000);


generateBtn.addEventListener('click', () => {
    colorSections.innerHTML = ''

    for (let i = 0; i < inputNumber.value; i++) {

        const bgColor = generateHexaColor();
        colorSections.style.backgroundColor = bgColor

        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color:${bgColor};border:1px solid white;" >
                <span>${bgColor}</span>
                <i title="copy code" class=" fas fa-copy copy "></i>
            </li>
        `;

        colorSections.innerHTML += html;

    }

})

colorSections.addEventListener('click', e => {
    console.log(e.target.parentNode.firstChild);

    if (e.target.classList.contains('copy')) { //check if target element when you click it contains 'copy' class 

        let textArea = document.createElement("textarea");
        textArea.value = colorSections.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        console.log("$code is copied to clipboard")
    }
})