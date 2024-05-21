var form = document.querySelector('form');
var resetBtn = document.getElementById("reset-btn");
var labelTipAmount = document.getElementById("label-tip-amount");
var labelTotAmaount = document.getElementById("label-total-amount");


const availableResetBtn = () => {
    resetBtn.removeAttribute("disabled");
}


const changeTip = () => {
    let tipRadio = document.querySelector('input[name="tip"]:checked');

    if (tipRadio != null) {
        tipRadio.checked = false;
    }
    availableResetBtn();
    countSplitBill();
}

const clearCustomTip = () => {  
    let customTip = document.getElementById("custom-tip");
    customTip.value = "";
    availableResetBtn();
    setTimeout(() => {
        countSplitBill();
    }, 100)
}

const countSplitBill = () => {
    let billInput = document.getElementById("bill");
    let tipRadio = document.querySelector('input[name="tip"]:checked') != null? document.querySelector('input[name="tip"]:checked').value : 0;
    let customTip = document.getElementById("custom-tip").value;
    let numPeople = document.getElementById("num-people");
    let infoError = document.getElementById("error");

    if (numPeople.value == 0){
        infoError.innerText = "Can't be zero";
        infoError.style.color = "red";
        numPeople.style.border = "1px solid red";
    }else{
        infoError.innerText = "";
        numPeople.style.border = "none";

        let bill = billInput;
        let tipValue = 0;
            tipValue = (customTip != '') ? customTip : tipRadio;

        let billValue = parseFloat(bill.value);
        let people = parseFloat(numPeople.value);

        let billAmount = billValue / people;
        let tipAmount = (billValue * tipValue) / 100;
        let tipAmountPerPerson = tipAmount/people;
        let totalAmount = billAmount + tipAmountPerPerson;

        labelTipAmount.innerHTML = `$${tipAmountPerPerson.toFixed(2)}`;
        labelTotAmaount.innerHTML = `$${totalAmount.toFixed(2)}`;
    }
}

const reset = () => {
    form.reset();
    labelTipAmount.innerHTML = "$0.00";
    labelTotAmaount.innerHTML = "$0.00";
    resetBtn.disabled = true;
}