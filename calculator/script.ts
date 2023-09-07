const inputDisplay = document.getElementById("calcDisplay")! as HTMLInputElement
const btnAdd = document.getElementById("btnAdd")! as HTMLButtonElement
const btnMinus = document.getElementById("btnMinus")! as HTMLButtonElement
const btnMultiply = document.getElementById("btnMultiply")! as HTMLButtonElement
const btnDivide = document.getElementById("btnDivide")! as HTMLButtonElement
const btnResult = document.getElementById("btnResult")! as HTMLButtonElement

var Total: number = 0
var lastOperation: number = -1

addEventListener("click", function(element) {
    if(inputDisplay.value == null) return 1

    calculateTotal()
    if(element.target == btnAdd) lastOperation = 0
    else if(element.target == btnMinus) lastOperation = 1
    else if(element.target == btnMultiply) lastOperation = 2
    else if(element.target == btnDivide) lastOperation = 3
    else if(element.target == btnResult) {
        inputDisplay.value = Total.toString()
        lastOperation = -1
    }
})

function calculateTotal() {
    if(lastOperation == -1) Total = +inputDisplay.value
    else if(lastOperation == 0) Total += +inputDisplay.value
    else if(lastOperation == 1) Total -= +inputDisplay.value
    else if(lastOperation == 2) Total = Total * +inputDisplay.value
    else if(lastOperation == 3) Total = Total * +inputDisplay.value

    inputDisplay.value = ''
}