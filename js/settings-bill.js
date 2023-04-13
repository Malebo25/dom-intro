// get a reference to the sms or call radio buttons
const billItemSettings = document.querySelector(".billItemTypeWithSetting");

// get refences to all the settings fields
const callSettings = document.querySelector(".callCostSetting");
const smsSettings = document.querySelector(".smsCostSetting");
const warningSettings = document.querySelector(".warningLevelSetting");
const criticalSettings = document.querySelector("criticalLevelSetting");






//get a reference to the add button
const billSettingsAddBtn = document.querySelector(".settingsAddbtn");
//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var overallTotal = 0;
//add an event listener for when the 'Update settings' button is pressed
function settingsConfig() {
    // var checkedCall = document.querySelector("input[name='callSet']:checked");
    callCost = callSettings.value;
    // callCost.innerHTML = callSetting;

    // var checkedSMS = document.querySelector("input[name='smsSet']:checked");
    smsCost = checkedSms.value;
    // smsCost.innerHTML = smsSetting;

    // var checkedwarning = document.querySelector("input[name='warningSet']:checked");
    let warningSetting = checkedwarning.value;
    // warningLevel.innerHTML = warningSetting;

    // var checkedCritical = document.querySelector("input[name='criticalSet']:checked");
    let criticalSetting = checkedCritical.value;
    // criticalLevel.innerHTML = criticalSetting;
}
updateSettingsBtn.addEventListener('click', settingsConfig);

//add an event listener for when the add button is pressed
billSettingsAddBtn.addEventListener('click', function ());

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
