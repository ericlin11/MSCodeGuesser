var num1 = document.getElementById("num1").textContent;
var num2 = document.getElementById("num2").textContent;
var num3 = document.getElementById("num3").textContent;
var code = "123";
var attempt = 0;
var retryBtn = document.getElementById("retry");
var guess1 = "";
var guess2 = "";
var guess3 = "";

//Retry Button
retryBtn.onclick = function () {
    window.location.reload();
}

//Create NumPad Buttons
for (i = 1; i <= 9; i++) {
    const numpad = document.querySelector(".numpad");
    if (i % 3 == 1) {
        const skipLine = document.createElement('br');
        numpad.appendChild(skipLine);
    }
    const numBtn = document.createElement('button');
    numBtn.value = i;
    numBtn.onclick = function () {
        if (attempt == 0) {
            guess1 = numBtn.value;
            document.getElementById("num1").innerHTML = numBtn.value;
            attempt++;
        } else if (attempt == 1 && numBtn.value != guess1) {
            guess2 = numBtn.value;
            document.getElementById("num2").innerHTML = numBtn.value;
            attempt++;
        } else if (attempt == 2 && numBtn.value != guess1 && numBtn.value != guess2) {
            guess3 = numBtn.value;
            document.getElementById("num3").innerHTML = numBtn.value;
            attempt++;
        }
        console.log(numBtn.value);
        console.log("Guess 1: " + guess1);
        console.log("Guess 2: " + guess2);
        console.log("Guess 3: " + guess3);
        /*
        if (myGuess.length == 3) {
            const attempt = (myGuess == code) ? "Success!" : "Fail!";
        }*/
    }
    const numBtnContent = document.createTextNode(i);
    numBtn.appendChild(numBtnContent);
    numpad.appendChild(numBtn);
}


