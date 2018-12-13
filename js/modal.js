let modal = document.getElementById('form');
let ok = document.getElementsByClassName('modal')[0];
var test = document.getElementsByClassName('test')[0];
var user = {
  name: 'key'
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

window.onload = function (event) {
  checkData();
  updateView();
}
// var modalContent0 = document.getElementsByClassName("")[0];

function checkdivs(x) {
  // modal.style.display= (x == 1) ? "none" : "block";
  modal.style.display = "block";
  if (x == 1) {
    modal.style.display = " none";
  }
}


function checkData() {

  if (checkUser() === null) {
    modal.style.display = "block";
    console.log("test1 checkingdata so dispaly wll be block");
    storeData(user);
  } else {
    console.log("else dont show modal");
    modal.style.display = "none";
  }

}

function storeData(user) {
  localStorage.setItem('user', JSON.stringify(user));
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
}

function clearData(key) {
  if (localStorage.getItem(key) === null) {
    console.log("Key not found, bro!");
  } else {
    console.log("localstorage has been cleaned");
    localStorage.removeItem(key);
    console.log(key);
  }
}
var checkUser = () => JSON.parse(localStorage.getItem('user'));