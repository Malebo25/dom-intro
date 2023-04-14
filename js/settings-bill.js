// get a reference to the sms or call radio buttons
const billItemSettings = document.querySelector(".billItemTypeWithSetting");
const callSettingstotal = document.querySelector(".callTotalSettings");
const smsSettingstotal = document.querySelector(".smsTotalSettings");
const Totalsettings = document.querySelector(".totalSettings");

// get refences to all the settings fields
const callSettings = document.querySelector(".callCostSetting");
const smsSettings = document.querySelector(".smsCostSetting");
const warningSettings = document.querySelector(".warningLevelSetting");
const criticalSettings = document.querySelector(".criticalLevelSetting");






//get a reference to the add button
const billSettingsAddBtn = document.querySelector(".settingsAddbtn");
//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

function settingsUpdate() {
    
    callCost = Number(callSettings.value);
    
    smsCost = Number(smsSettings.value);
   
    warningLevel = Number(warningSettings.value);

    
    criticalLevel = Number(criticalSettings.value);
    
    
}
updateSettingsBtn.addEventListener('click', settingsUpdate);
// create a variables that will keep track of all three totals.


var CallTotal = 0;
var SmsTotal = 0;
//add an event listener for when the add button is pressed
function settingsBillTotal() {
    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    let settingsBillItemType = checkedSettingsBtn.value;
    
    var settingsBillTypeEntered = settingsBillItemType;
    
    
   
    
    if (settingsBillTypeEntered === "call") {
        
        CallTotal += callCost;
        
        
    }
    else if (settingsBillTypeEntered === "sms"){
        SmsTotal += smsCost;
        
        
    }
    else {
        errorElement.innerHTML = "Please enter 'sms' or 'call'";
        
    }
   
    
    callSettingstotal.innerHTML = CallTotal.toFixed(2);
    smsSettingstotal.innerHTML = SmsTotal.toFixed(2);;
    var overallTotal = CallTotal + SmsTotal;
    Totalsettings.innerHTML = overallTotal.toFixed(2);;
    
    if (overallTotal>=warningLevel && overallTotal <criticalLevel){
        
        Totalsettings.classList.add("warning");
    }
    else if (overallTotal >=criticalLevel){
        Totalsettings.classList.add("danger");
    }
}

billSettingsAddBtn.addEventListener('click', settingsBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
