function countSplitBill(){

    // let bill = document.getElementById("bill").value;
    // let tip = document.querySelector('input[name="tip"]:checked').value;
    let numPeople = document.getElementById("num-people");
    let infoError = document.getElementById("error");

    if (numPeople.value == 0){
        infoError.innerText = "Can't be zero";
        infoError.style.color = "red";
        numPeople.style.border = "1px solid red";
    }
}