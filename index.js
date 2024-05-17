function availableResetBtn(){
    let bill = document.getElementById("bill");
    let resetBtn = document.getElementById("reset-btn");

    resetBtn.removeAttribute("disabled");
}


function changeTip(){
    if (document.querySelector('input[name="tip"]:checked')) {     
        let tip = document.querySelector('input[name="tip"]:checked');
        tip.checked = false;
    }
    availableResetBtn();
    countSplitBill();
}

function clearCustomTip(){
    let customTip = document.getElementById("custom-tip");
    customTip.value = "";
    availableResetBtn();
    countSplitBill();
}

function countSplitBill(){
    let numPeople = document.getElementById("num-people");
    let infoError = document.getElementById("error");

    if (numPeople.value == 0){
        infoError.innerText = "Can't be zero";
        infoError.style.color = "red";
        numPeople.style.border = "1px solid red";
    }else{
        infoError.innerText = "";
        numPeople.style.border = "none";

        let bill = document.getElementById("bill");
        let tip = 0;
            tip = document.querySelector('input[name="tip"]:checked') ? document.querySelector('input[name="tip"]:checked') : document.getElementById("custom-tip");
        let billValue = parseFloat(bill.value);
        let tipValue = parseFloat(tip.value);
        let people = parseFloat(numPeople.value);

        console.log(tipValue);


        let billAmount = billValue / people;
        // console.log("billValue ", billValue, " tipValue ", tipValue, " people ", people, " billAmount ", billAmount);

        let tipAmount = (billValue * tipValue) / 100;
        let tipAmountPerPerson = tipAmount/people;

        let totalAmount = billAmount + tipAmountPerPerson;

        // console.log("tipAmount ", tipAmount, " tipAmountPerPerson ", tipAmountPerPerson, " totalAmount ", totalAmount);

        document.getElementById("label-tip-amount").innerHTML = `$${tipAmountPerPerson.toFixed(2)}`;
        document.getElementById("label-total-amount").innerHTML = `$${totalAmount.toFixed(2)}`;



    }
}

function reset(){
    document.querySelector('form').reset();
    document.getElementById("label-tip-amount").innerHTML = "$0.00";
    document.getElementById("label-total-amount").innerHTML = "$0.00";
    document.getElementById("reset-btn").disabled = true;
}