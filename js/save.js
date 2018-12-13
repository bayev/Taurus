/* ONLOAD */
window.onload = function () {
  updateView();
  
}

/* EVENT Listeners */
document.getElementById("submit").addEventListener("click", clickSave);
document.getElementById("showFavs").addEventListener("click", klick);
document.getElementById("newNote").addEventListener("click", newNote);
document.getElementById("info").addEventListener("click", infoPage);

function infoPage() {
  localStorage.removeItem('user');
  location.reload();
}




/* When you click on the star in the nav. Its changes color and calls functions updateFav and updateView */

var clicks = 0;

function klick() {
  let star = document.getElementsByClassName("fa fa-star fa-md")[0];
  clicks += 1;

  if (clicks % 2) {
    updateFav();
    star.style.color = "gold";
  } else {
    updateView();
    star.style.color = "black";
  };

};






/* These 4 functions is  connected to the save button in toolbar. It calls a custom built Alert box in which the user need to typ in a value. 
That value will become the key in localstorage. And the content will be everthing stored in the editor */

function clickSave() {
  var title = "<p>" + time() + "</p><p>" + alert() + "</p>";
  if (title == "user") {
    title = "_user";
  }

}

function receiveSave(title) {
  localStorage.setItem("<p>" + time() + "</p><p>" + title + "</p>", noteStored());
  updateView();

}


function noteStored() {
  return (editor.root.innerHTML);

}

function time() {
  var ts = new Date();
  return (ts.toLocaleString());
}

/* Updateview. Sorts through all of the keys in LS and appends a div for them in the section "notes". It also adds buttons, a tags and images. */

function updateView() {
  let notes = noteLoad();
  
  if (clicks % 2) {
    document.getElementsByClassName("fas fa-book-open")[0];
    clicks += 1;
  }
  
  

  document.getElementById('notes').innerHTML = '<h3>My Notes</h3>';
  notes.forEach((note) => {
    if (note.title == ['favs']) {
      return;
    } else {
      clicks = 0;
      var myDiv = document.getElementById("notes");
      var newDiv = document.createElement("div");
      var aTag = document.createElement('a');

      aTag.setAttribute('onclick', "showNote('" + note.title + "')");
      aTag.innerHTML = note.title;

      myDiv.appendChild(newDiv);
      newDiv.appendChild(aTag);

      var favImg = document.createElement("IMG");
      favImg.setAttribute("src", note.fav ? "../img/star-gold.svg" : "../img/star-solid.svg");
      //console.log(note.fav);
      
      favImg.setAttribute("width", "17");
      favImg.setAttribute('onclick', "toggleFav('" + note.title + "')");
      newDiv.appendChild(favImg);


      var delImg = document.createElement("IMG");
      delImg.setAttribute("src", "../img/trash.svg");
      delImg.setAttribute("width", "14");

      delImg.style.marginLeft = "8%";
      delImg.setAttribute('onclick', "delDiv('" + note.title + "')");
      newDiv.appendChild(delImg);
    }
  });
}

/* delDiv and Togglefav does what it sounds like. Its connected to the star and trash van images on each div in section "notes". Togglefav makes it a favourite note but pushing the key into an empty array called favs and delDiv deletes it specific key from LS.*/

function delDiv(title) {
  localStorage.removeItem(title);
  updateView();
}

function toggleFav(title) {
  let favs = favLoad();
  if (favs.includes(title)) {
    let x = (favs.indexOf(title));
    favs.splice(x, 1);
  } else {
    favs.push(title);
  }
  favSave(favs);
  updateView();
}

/*Loads favourite from LS if there is one*/
function favLoad() {
  let favs = localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : [];
  return (favs);
}

function favSave(favs) {
  localStorage.setItem('favs', JSON.stringify(favs));
}

function newNote() {
  editor.root.innerHTML = "";
  editor.root.focus();
}

/* Here is where the magic happens. Note Load pushes the key and content in to a empty array and also adds if the nots has a true or false status*/

function noteLoad() {
  var notes = [];
  let favs = favLoad();
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    let title = localStorage.key(i);
    let contents = localStorage.getItem(title);
    if (favs.includes(title)) {
      fav = true
    } else {
      fav = false
    }
    if (title !== 'user') {
      notes.push({
        title: title,
        contents: contents,
        fav: fav
      });
    }
  }
  return (notes);
  
}

/* Show note function just shows the content from the specific key */

function showNote(contents) {
  editor.root.innerHTML = localStorage.getItem(contents);
}

/* Update Fav is just like UpdateView exakt it targets if the note has been Fav marked and discards all that has a Fav= false status*/
function updateFav() {
  let notes = noteLoad();
  while (notes.firstChild) {
    notes.removeChild(notes.firstChild);
  }
  document.getElementById('notes').innerHTML = '<h3>My Notes</h3>';



  notes.forEach((note) => {
    if (note.fav == false) {
      return;
    } else {
      var myDiv = document.getElementById("notes");
      var newDiv = document.createElement("div");
      var aTag = document.createElement('a');

      aTag.setAttribute('onclick', "showNote('" + note.title + "')");
      aTag.innerHTML = note.title;

      myDiv.appendChild(newDiv);
      newDiv.appendChild(aTag);
      

    }
  });
}