// get a reference to the textbox where the bill type is to be entered
const billText = document.querySelector(".billTypeText");

//get a reference to the add button
const addButton = document.querySelector(".addToBillBtn");

const addCall = document.querySelector(".callTotalOne");

const addSms = document.querySelector(".smsTotalOne");
const errorElement = document.querySelector(".error");

//create a variable that will keep track of the total bill
const Total = document.querySelector(".totalOne");

//add an event listener for when the add button is pressed

var callsTotal = 0;
var smsTotal = 0;
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTyped = billText.value.trim();
    var billTypeEnteredtwo = billTyped.toLowerCase();
    // update the correct total
    if (billTypeEnteredtwo === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEnteredtwo === "sms"){
        smsTotal += 0.75;
    }
    else {
        errorElement.innerHTML = "Please enter 'sms' or 'call'";
        
    }
    
    //update the totals that is displayed on the screen.
    addCall.innerHTML = callsTotal.toFixed(2);
    addSms.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    Total.innerHTML = totalCost.toFixed(2);
    
    if (totalCost>=30 && totalCost <50){
        // adding the danger class will make the text red
        Total.classList.add("warning");
    }
    else if (totalCost >= 50){
        Total.classList.add("danger");
    }
}



addButton.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
