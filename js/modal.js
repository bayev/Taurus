let modal = document.getElementById('form');
let ok = document.getElementsByClassName('modal')[0];
var test = document.getElementsByClassName('test')[0];
let user = ['key'];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
   }
}

window.onload = function(event) {
    checkData(user);
    console.log("test onload");

}
    // var modalContent0 = document.getElementsByClassName("")[0];

function checkdivs (x)
{
  modal.style.display="block";
  console.log("test1");


  if(x==1) {
    modal.style.display =" none";
    console.log("test122");

  }
}


function checkData(user){
  if (user = 'key'){
    ok.style.display="none";
    console.log("test1 checkingdata so dispaly wll be none");

  }
  else {
    console.log("else show modal");
    storeData(user);
    ok.style.display="block";
  }
}

function storeData(user) {
  localStorage.setItem('user',JSON.stringify(user));
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
}

function clearData(key){
if (localStorage.getItem(key) === null) {
    console.log("Key not found, bro!");
  }
  else {
    console.log("localstorage has been cleaned");
    localStorage.removeItem(key);
  }
}
