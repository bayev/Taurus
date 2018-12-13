
function closeAlertBox() {
  alertBox = document.getElementById("alertBox");
  alertClose = document.getElementById("alertClose");

  alertBox.parentNode.removeChild(alertBox);
  alertClose.parentNode.removeChild(alertClose);
}

var isCtrl = false;
document.onkeyup=function(e){
    if(e.keyCode == 17) isCtrl=false;
}

document.onkeydown=function(e){
    if(e.keyCode == 17) isCtrl=true;
    if(e.keyCode == 83 && isCtrl == true) {
        clickSave();
        return false;
    }
}

window.alert = function (txt) {
  msg = "What's the title of your note?" + "<br>" + "(and then press Enter)";
  var id = "alertBox",
    alertBox, closeId = "alertClose",
    alertClose;
  alertBox = document.createElement("div");
  var inputF = document.createElement("input");
  inputF.setAttribute("id", "inputAlert");
  inputF.setAttribute("type", "text");
  inputF.setAttribute("value", "");
  document.body.appendChild(alertBox);
  alertBox.id = id;
  alertBox.innerHTML = msg;
  alertClose = document.createElement("div");
  alertClose.id = closeId;
  document.body.appendChild(alertClose);
  alertClose.onclick = closeAlertBox;
  alertBox.appendChild(inputF);

  window.onkeyup = keyup;
  var inputTextValue;
  inputF.focus();

  function keyup(e) {
    //setting your input text to the global Javascript Variable for every key press
    inputTextValue = e.target.value;

    if (e.keyCode == 13) {
      alertBox = document.getElementById("alertBox");
      alertClose = document.getElementById("alertClose");

      alertBox.parentNode.removeChild(alertBox);
      alertClose.parentNode.removeChild(alertClose);
      receiveSave(inputF.value);


    }
  }
};