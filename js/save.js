window.onload = function() {
  updateView();
}

/* EVENT Listeners */
document.getElementById("submit").addEventListener("click", clickSave);

document.getElementById("showFavs").addEventListener("click", klick);



var clicks = 0;

function klick() {
  let star = document.getElementsByTagName("i")[2];
  clicks += 1;

  if (clicks % 2) {
    updateFav();
    star.style.color = "gold";
  }
  else {
    updateView();
    star.style.color = "rgb(175, 175, 175)";
  };

};






/* Denna funktion är länkad till Save knappen.
Det enda den gör är att spara titlen som är vad användaren skriver som title sedan sparar den även funktionen noteStored() som sin value. Den funktionen returnerar endast vad som står i editorn. 
Reloaden triggar igång funktionen update view som är inställt på onload.
Det är där vi skapar nya divar, a taggar etc. Kolla in den funktionen */
function clickSave() {
  var title = "<p>" + time() + "</p><p>" + prompt("Whats the title of your notes?") + "</p>";
  if (title == "user") {  
    title = "_user";
  }
  localStorage.setItem(title, noteStored());
  updateView(); /*Viktigt för funktionen updateView*/
  }


/* Det enda den här funktionen gör är att returnera vad det finns för innehåll i editorn. Detta är viktigt för clickSave funktionen eftersom där kör vi en setItem av innehållet. */

function noteStored() {
  return(editor.root.innerHTML);
}

function time () {
  var ts = new Date();
  return(ts.toLocaleString());
}

/* Efter att clickSave funktionen är klar så laddas sidan om och updateView aktiveras. 
Det första den gör är att kalla på funktionen noteLoad. NoteLoad är där vi tagit alla notes och pushat in det i en tomma arrayer.
Notes blir då noteLoad(). För varje note så gör vi en div, a tag i våran section Notes.
Attributet för a taggen på onclick blir funktionen showNote som hämtar innehållet för den title. */

function updateView() {
  let notes = noteLoad();
  document.getElementById('notes').innerHTML = '<h3>My Notes</h3>';
  notes.forEach((note) => {
    if (note.title == ['favs']) { 
      console.log('stopped extra fav div'); 
    }else {
    console.log(note);
    var myDiv = document.getElementById("notes");
    var newDiv = document.createElement("div");
    var aTag = document.createElement('a');

    aTag.setAttribute('onclick', "showNote('" + note.title + "')");
    aTag.innerHTML = note.title;
    
    myDiv.appendChild(newDiv);
    newDiv.appendChild(aTag);

    var favButton = document.createElement('button');
    var favText = document.createTextNode(note.fav ? 'Remove Favourite': 'Make Favourite')
    favButton.setAttribute('onclick', "toggleFav('" + note.title + "')");
    newDiv.appendChild(favButton);
    favButton.appendChild(favText);

    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete')
    delBtn.setAttribute('onclick', "delDiv('" + note.title + "')");
    newDiv.appendChild(delBtn);
    delBtn.appendChild(delText);

  }});}

function delDiv(title){
  localStorage.removeItem(title);
  updateView();
}

var favs = [];

function toggleFav(title) { //byt namn till toggleFav
  console.log(title);
  if (favs.includes(title)) {
    let x = (favs.indexOf(title));
    favs.splice(x, 1);
    console.log('removed');

  } else {
    favs.push(title);

    console.log('added');
  }
  // if favs.includes(title) Betyder att den redan fanns.
  favSave(favs);
  updateView();
    
}

function favLoad () {
  let favs = localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : [];
  console.log(favs);
  // load form localstorage

  return(favs); 
}
function favSave(favs) {
  localStorage.setItem('favs', JSON.stringify(favs));
  //save to localStorage
}

function showFavs() {
  let notes = noteLoad();
  notes.forEach((note) => {
  if (JSON.parse(note.fav) !== true) {
    
  } else {
    console.log('no FAVS');
  }
});}



  // show only items where fav is true




/* Notes är en tom array.
Vi gör en let = title för varje key som vi redan fått sparat av användaren där vi promptade hen om det. 
Let = contents så tog vi getItem av den keyn. 
Sedan pushar vi det i två tomma arrayer. Som title är keyn och contents är innehållet.
Den kör om detta tills den pushat in alla och sedan returnerar den notes som sedan updateView sorterar ut i divs och a taggar. */

/* [{ title: "ett",
      contents: "Hello world x 100"},
    { title: "två",
      contents: "Hello world x 100"}]
      */

function noteLoad() {
  var notes = [];
  let favs = favLoad();
/*   var favs = loadFavs(); // ['title1'..] */
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    //console.log( localStorage.key( i ) + ": " + localStorage.getItem( localStorage.key( i ) ) );
    let title = localStorage.key( i );
    let contents = localStorage.getItem(title);
    //console.log(favs.includes(title));
     if (favs.includes(title)) { 
      fav = true
    } else {
      fav = false
    } 
    if (title !== 'user') {
      notes.push({title: title, contents: contents, fav: fav }); /* , fav: fav */
    }
  }
  return(notes);
}

/* Show note funktionen hämtar innehållet från det där id:et. Jag förstår inte hur? Vad kallar argumentet på? Hur fattar den att argumentet är key? */

function showNote(contents) {
  editor.root.innerHTML = localStorage.getItem(contents);
}


/* TESSST */


function updateFav() {
  let notes = noteLoad();
  while (notes.firstChild) {
    notes.removeChild(notes.firstChild);
  }
  document.getElementById('notes').innerHTML = '<h3>My Notes</h3>';



  notes.forEach((note) => {
    if (note.fav == false) {
      console.log('stopped false divs');
    } else {
    console.log(note);
    var myDiv = document.getElementById("notes");
    var newDiv = document.createElement("div");
    var aTag = document.createElement('a');

    aTag.setAttribute('onclick', "showNote('" + note.title + "')");
    aTag.innerHTML = note.title;
    
    myDiv.appendChild(newDiv);
    newDiv.appendChild(aTag);

/*     var favButton = document.createElement('button');
    var favText = document.createTextNode(note.fav ? 'Remove Favourite': 'Make Favourite')
    favButton.setAttribute('onclick', "toggleFav('" + note.title + "')");
    newDiv.appendChild(favButton);
    favButton.appendChild(favText); */

/*     var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete')
    delBtn.setAttribute('onclick', "delDiv('" + note.title + "')");
    newDiv.appendChild(delBtn);
    delBtn.appendChild(delText); */

  }});}
