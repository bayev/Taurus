let modal = document.getElementById('form');
let ok = document.getElementsByClassName('modal')[0];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    form.style.display =" none";

   }
}

window.onload = function(event) {
  ok.style.display="block";
}
    // var modalContent0 = document.getElementsByClassName("")[0];

function checkdivs (x){
  modal.style.display="block";

  if(x==1) {
    form.style.display =" none";
  }
}
