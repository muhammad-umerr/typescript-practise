const inputDisplay = document.getElementById("calcDisplay")! as HTMLInputElement
const btnAdd = document.getElementById("btnAdd")! as HTMLButtonElement
const btnMinus = document.getElementById("btnMinus")! as HTMLButtonElement
const btnMultiply = document.getElementById("btnMultiply")! as HTMLButtonElement
const btnDivide = document.getElementById("btnDivide")! as HTMLButtonElement
const btnResult = document.getElementById("btnResult")! as HTMLButtonElement


var Total: number = 0
var lastOperation: number = -1

addEventListener("click", function(element) {
    if(inputDisplay == null) return 1
    if(element.target == btnAdd) {
        calculateTotal()
        lastOperation = 0
    }
    else if(element.target == btnMinus) {
        calculateTotal()
        lastOperation = 1
    }
    else if(element.target == btnMultiply) {
        calculateTotal()
        lastOperation = 2
    }
    else if(element.target == btnDivide) {
        calculateTotal()
        lastOperation = 3
    }
    else if(element.target == btnResult) {
        calculateTotal()
        inputDisplay.value = Total.toString()
        lastOperation = -1
    }
})

function calculateTotal() {
    if(lastOperation == -1) Total = +inputDisplay.value
    else if(lastOperation == 0) Total += +inputDisplay.value
    else if(lastOperation == 1) Total -= +inputDisplay.value
    else if(lastOperation == 2) Total *= +inputDisplay.value
    else if(lastOperation == 3) Total /= +inputDisplay.value

    inputDisplay.value = ''
}