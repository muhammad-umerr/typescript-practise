var inputDisplay = document.getElementById("calcDisplay");
var btnAdd = document.getElementById("btnAdd");
var btnMinus = document.getElementById("btnMinus");
var btnMultiply = document.getElementById("btnMultiply");
var btnDivide = document.getElementById("btnDivide");
var btnResult = document.getElementById("btnResult");
var Total = 0;
var lastOperation = -1;
addEventListener("click", function (element) {
    if (inputDisplay == null)
        return 1;
    calculateTotal();
    if (element.target == btnAdd)
        lastOperation = 0;
    else if (element.target == btnMinus)
        lastOperation = 1;
    else if (element.target == btnMultiply)
        lastOperation = 2;
    else if (element.target == btnDivide)
        lastOperation = 3;
    else if (element.target == btnResult) {
        inputDisplay.value = Total.toString();
        lastOperation = -1;
    }
});
function calculateTotal() {
    if (lastOperation == -1)
        Total = +inputDisplay.value;
    else if (lastOperation == 0)
        Total += +inputDisplay.value;
    else if (lastOperation == 1)
        Total -= +inputDisplay.value;
    else if (lastOperation == 2)
        Total *= +inputDisplay.value;
    else if (lastOperation == 3)
        Total /= +inputDisplay.value;
    inputDisplay.value = '';
}
