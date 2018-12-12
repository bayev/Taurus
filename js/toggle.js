document.getElementById('buttonEx').addEventListener('click', toggle);
document.getElementById('hiddenLogo').addEventListener('click', toggle2);


var clicks1 = 0;
var clicks2 = 0;


function toggle() {
  let book = document.getElementsByTagName("i")[2];

  clicks1 += 1;

  if (clicks1 % 2) {
    document.getElementById('notes').classList.add("moved");
    
    book.style.color = "gold";

} else {
    document.getElementById('notes').classList.remove("moved");
    book.style.color = "black";
};
};

function toggle2() {
    let book = document.getElementsByTagName("i")[2];
  
    clicks2 += 1;
  
    if (clicks2 % 2) {
      document.getElementsByTagName('nav')[0].classList.add("navShow");
      document.getElementById('notes').classList.add("moved");
      book.style.color = "gold";
      clicks1 += 1;


  
  } else {
      document.getElementsByTagName('nav')[0].classList.remove("navShow");
      document.getElementById('notes').classList.remove("moved");
      book.style.color = "black";

  };
  };
  
