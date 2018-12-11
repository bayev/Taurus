document.getElementById('buttonEx').addEventListener('click', toggle);

var clicks1 = 0;

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