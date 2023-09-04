const inputDisplay = document.getElementById("calcDisplay")! as HTMLInputElement
const btnAdd = document.getElementById("btnAdd")! as HTMLButtonElement
const btnMinus = document.getElementById("btnMinus")! as HTMLButtonElement
const btnMultiply = document.getElementById("btnMultiply")! as HTMLButtonElement
const btnDivide = document.getElementById("btnDivide")! as HTMLButtonElement

var Total: number = 0

addEventListener("click", function(element) {
    if(element.target == btnAdd) {
        calcAdd(+inputDisplay.value)
    }
})

function calcAdd(num: number) {
    Total += num;
    inputDisplay.value = Total.toString()
}