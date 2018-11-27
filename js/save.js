window.onload = function() {
  updateView();
}

/* EVENT Listeners */
document.getElementById("submit").addEventListener("click", clickSave);

/* Denna funktion är länkad till Save knappen.
Det enda den gör är att spara titlen som är vad användaren skriver som title sedan sparar den även funktionen noteStored() som sin value. Den funktionen returnerar endast vad som står i editorn. 
Reloaden triggar igång funktionen update view som är inställt på onload.
Det är där vi skapar nya divar, a taggar etc. Kolla in den funktionen */
function clickSave() {
  var title = prompt("Whats the title of your notes?");
  if (title == "user") {  
    title = "_user";
  }
  localStorage.setItem(title, noteStored());
  location.reload(true); /*Viktigt för funktionen updateView*/
  }


/* Det enda den här funktionen gör är att returnera vad det finns för innehåll i editorn. Detta är viktigt för clickSave funktionen eftersom där kör vi en setItem av innehållet. */

function noteStored() {
  return(editor.root.innerHTML);
}

/* Efter att clickSave funktionen är klar så laddas sidan om och updateView aktiveras. 
Det första den gör är att kalla på funktionen noteLoad. NoteLoad är där vi tagit alla notes och pushat in det i en tomma arrayer.
Notes blir då noteLoad(). För varje note så gör vi en div, a tag i våran section Notes.
Attributet för a taggen på onclick blir funktionen showNote som hämtar innehållet för den title. */

function updateView() {
  let notes = noteLoad();
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

  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    //console.log( localStorage.key( i ) + ": " + localStorage.getItem( localStorage.key( i ) ) );
    let title = localStorage.key( i );
    let contents = localStorage.getItem(title);

    if (title !== 'user') {
      notes.push({title: title, contents: contents});
    }
  }
  return(notes);
}

/* Show note funktionen hämtar innehållet från det där id:et. Jag förstår inte hur? Vad kallar argumentet på? Hur fattar den att argumentet är key? */

function showNote(contents) {
  editor.root.innerHTML = localStorage.getItem(contents);
}