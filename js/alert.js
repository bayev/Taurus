
function closeAlertBox() {
  alertBox = document.getElementById("alertBox");
  alertClose = document.getElementById("alertClose");

  alertBox.parentNode.removeChild(alertBox);
  alertClose.parentNode.removeChild(alertClose);
}

$(window).keypress(function(event) {
  if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;
  alert("Ctrl-S pressed");
  event.preventDefault();
  return false;
});

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