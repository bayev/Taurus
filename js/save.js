/* TEST */

/* document.getElementById("submit").addEventListener("click", notesBoard);
document.getElementById("load").addEventListener("click", notesLoad);




function notesBoard() {
  localStorage.text = document.getElementById('editor').innerHTML;
  
  console.log('textSave');
}



function notesLoad() {
  let x = localStorage['text'];
  document.getElementById('editor').innerHTML = x;
  
  console.log('NotesLoaded');

} */


/* TEST 2 */
window.onload = function() {
  updateView();
}
document.getElementById("submit").addEventListener("click", save);

function notesBoard() {
  //localStorage.text = document.getElementById('editor').innerHTML;
  return(editor.root.innerHTML);
}

/* [{ title: "ett",
      contents: "Hello world x 100"},
    { title: "två",
      contents: "Hello world x 100"}]
      */

function notesLoad() {
  var notes = [];

  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    //console.log( localStorage.key( i ) + ": " + localStorage.getItem( localStorage.key( i ) ) );
    let title = localStorage.key( i );
    let contents = localStorage.getItem( localStorage.key( i ) );

    if (title !== 'user') {
      notes.push({title: title, contents: contents});
    }
  }
  return(notes);
}

function showNote(contents) {
  editor.root.innerHTML = localStorage.getItem(contents);
  console.log(title);

}

/* Denna funktion startas window onload
drar in funktionen notesLoad. Allt blir organiserad som vi vill med keys som title och value som content.
Längre ner har vi en ShowNote som är en onclick funktion. Den returnera */
function updateView() {
  let notes = notesLoad();
  notes.forEach((note) => {
    console.log(note);
    var mydiv = document.getElementById("notes");
    var newDiv = document.createElement("div");
    var aTag = document.createElement('a');
    aTag.setAttribute('onclick', "showNote('" + note.title + "')");
    aTag.innerHTML = note.title;
    mydiv.appendChild(newDiv);
    mydiv.appendChild(aTag);
  });
}

/* Denna funktion är länkad till Save knappen.
Den skapar en ny child div, a tag till sectionen Notes.
Vi promptar usern om en Titel och sparar titeln som en key och innehållet i editorn som en value.
själva a taggen får samma namn som titeln.
Efter detta så kör vi en refresh av sidan vilket gör att alla divar försvinner men inte Local Storage.
Funktionen Update view skapar alla divar och a taggar igen. */
function save() {
var mydiv = document.getElementById("notes");
var newDiv = document.createElement("div");
var aTag = document.createElement('a');
var title = prompt("Whats the title of your notes?");
if (title == "user") {  
  title = "_user";
}
localStorage.setItem(title, notesBoard());
aTag.innerHTML = title;
mydiv.appendChild(newDiv);
mydiv.appendChild(aTag);
location.reload(true);
}





