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

var CallTotal = 0;
var SmsTotal = 0;
var overallTotal = 0;

function settingsUpdate() {
  callCost = Number(callSettings.value);

  smsCost = Number(smsSettings.value);

  warningLevel = Number(warningSettings.value);

  criticalLevel = Number(criticalSettings.value);

  Totalsettings.classList.remove("warning");
  Totalsettings.classList.remove("danger");

  if (overallTotal >= criticalLevel) {
    Totalsettings.classList.remove("warning");
    Totalsettings.classList.add("danger");
  }
  if (overallTotal >= warningLevel && overallTotal < criticalLevel) {
    Totalsettings.classList.remove("danger");
    Totalsettings.classList.add("warning");
  }
}
updateSettingsBtn.addEventListener("click", settingsUpdate);
// create a variables that will keep track of all three totals.

//add an event listener for when the add button is pressed
function settingsBillTotal() {
  var checkedSettingsBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
  let settingsBillItemType = checkedSettingsBtn.value;

  var settingsBillTypeEntered = settingsBillItemType;

  if (overallTotal < criticalLevel) {
    if (settingsBillTypeEntered === "call") {
      CallTotal += callCost;
    } else if (settingsBillTypeEntered === "sms") {
      SmsTotal += smsCost;
    }
  }

  callSettingstotal.innerHTML = CallTotal.toFixed(2);
  smsSettingstotal.innerHTML = SmsTotal.toFixed(2);
  overallTotal = CallTotal + SmsTotal;
  Totalsettings.innerHTML = overallTotal.toFixed(2);

  Totalsettings.classList.remove("warning");
  Totalsettings.classList.remove("danger");
  if (overallTotal >= criticalLevel) {
    Totalsettings.classList.remove("warning");
    Totalsettings.classList.add("danger");
  }

  if (overallTotal >= warningLevel && overallTotal < criticalLevel) {
    Totalsettings.classList.remove("danger");
    Totalsettings.classList.add("warning");
  }
}

billSettingsAddBtn.addEventListener("click", settingsBillTotal);

