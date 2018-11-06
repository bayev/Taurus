let modal = document.getElementById('form');
let ok = document.getElementsByClassName('modal')[0];
let user = ['key'];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    form.style.display =" none";
    storeData(user);
   }
}

window.onload = function(event) {
  if (user.length == true){
    modal.style.display="none";
  }
  else {
  ok.style.display="block";
  }
}
    // var modalContent0 = document.getElementsByClassName("")[0];

function checkdivs (x)
{
  localStorage.setItem("lastname", "Smith");
  modal.style.display="block";

  if(x==1) {
    form.style.display =" none";
  }
}

function storeData(user) {
  localStorage.setItem('user',JSON.stringify(user));
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
}
