//set warning and critical levels with Dom

const callSettings = document.querySelector(".callCostSetting");
const smsSettings = document.querySelector(".smsCostSetting");
const warningSettings = document.querySelector(".warningLevelSetting");
const criticalSettings = document.querySelector(".criticalLevelSetting");

const updateSettingsBtn = document.querySelector(".updateSettings");
const domSettings = BillWithSettings();

updateSettingsBtn.addEventListener("click", function () {
  domSettings.setCallCost(callSettings.value);

  domSettings.setSmsCost(smsSettings.value);

  domSettings.setWarningLevel(warningSettings.value);

  domSettings.setCriticalLevel(criticalSettings.value);

  if (
    domSettings.getTotalCost() >= domSettings.getWarningLevel() &&
    domSettings.getTotalCost() < domSettings.getCriticalLevel()
  ) {
    Totalsettings.classList.remove("danger");

    Totalsettings.classList.add(domSettings.warningColor());
  } else if (domSettings.hasReachedCriticalLevel()) {
    Totalsettings.classList.remove("warning");
    Totalsettings.classList.add(domSettings.totalClassName());
  } else {
    Totalsettings.classList.remove("warning");
    Totalsettings.classList.remove("danger");
  }


});

const billItemSettings = document.querySelector(".billItemTypeWithSetting");
const callSettingstotal = document.querySelector(".callTotalSettings");
const smsSettingstotal = document.querySelector(".smsTotalSettings");
const Totalsettings = document.querySelector(".totalSettings");

const billSettingsAddBtn = document.querySelector(".settingsAddbtn");

billSettingsAddBtn.addEventListener("click", function () {
  var checkedSettingsBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
  let settingsBillItemType = checkedSettingsBtn.value;

  var settingsBillTypeEntered = settingsBillItemType;


  if (settingsBillTypeEntered === "call") {
    domSettings.makeCall();
  } else if (settingsBillTypeEntered === "sms") {
    domSettings.sendSms();
  }

  callSettingstotal.innerHTML = domSettings.getTotalCallCost().toFixed(2);

  smsSettingstotal.innerHTML = domSettings.getTotalSmsCost().toFixed(2);

  Totalsettings.innerHTML = domSettings.getTotalCost().toFixed(2);

  Totalsettings.classList.add(domSettings.warningColor());

  Totalsettings.classList.add(domSettings.totalClassName());
  
});
