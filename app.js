//Create NumPad Buttons
for (i = 1; i <= 9; i++) {
    const numpad = document.querySelector(".numpad");
    if (i % 3 == 1) {
        const skipLine = document.createElement('br');
        numpad.appendChild(skipLine);
    }
    const numBtn = document.createElement('button');
    const numBtnContent = document.createTextNode(i);
    numBtn.appendChild(numBtnContent);
    numpad.appendChild(numBtn);
}
