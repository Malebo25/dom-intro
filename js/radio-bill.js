// get a reference to the sms or call radio buttons
const billItemTypeRadioB = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
const addBtn = document.querySelector(".radioBillAddBtn");


const totalSms = document.querySelector(".smsTotalTwo");
const totalCall = document.querySelector(".callTotalTwo");
//create a variable that will keep track of the total bill
const radioTotal = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;

function RadioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    let billItemType = checkedRadioBtn.value;
    // get the value entered in the billType textfield
    var billTypeEntered = billItemType;
    

    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
        
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    else {
        errorElement.innerHTML = "Please enter 'sms' or 'call'";
        
    }
    
    //update the totals that is displayed on the screen.
    totalCall.innerHTML = callsTotal.toFixed(2);
    totalSms.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    radioTotal.innerHTML = totalCost.toFixed(2);
    
    if (totalCost>=30 && totalCost <50){
        // adding the danger class will make the text red
        radioTotal.classList.add("warning");
    }
    else if (totalCost >= 50){
        radioTotal.classList.add("danger");
    }
}



addBtn.addEventListener('click', RadioBillTotal);



//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
