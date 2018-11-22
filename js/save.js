/* 
window.onload = function (){
  var fix = document.getElementById('editor');
  fix.setAttribute("contenteditable", "true");

}


var modals = document.getElementsByClassName("quillText")[0];

document.getElementById('editor').innerHTML = localStorage['text'];

    document.getElementById("submit").onclick = function () {
        localStorage['text'] = document.getElementById('editor').innerHTML;
}



var Delta = Quill.import('delta');
var quill = new Quill('#editor', {
  modules: {
    toolbar: false
  },
  placeholder: 'Comp',
  theme: 'snow',
});

// Store accumulated changes
var change = new Delta();
quill.on('text-change', function(delta) {
  change = change.compose(delta);
});


// Save periodically
setInterval(function() {
  if (change.length() > 0) {
    console.log('Saving changes', change);

    //var test = JSON.stringify(quill.getContents());
    //quill.setContents(JSON.parse(test));
    console.log(user);

    // JSON.stringify(quill.getContents())
    /*
    Send partial changes
    $.post('/your-endpoint', {
      partial: JSON.stringify(change)
    });

    Send entire document
    $.post('/your-endpoint', {
      doc: JSON.stringify(quill.getContents())
    });
    */
/*     change = new Delta();
  }
}, 5*1000);

// Check for unsaved data
window.onbeforeunload = function() {
  if (change.length() > 0) {
    return 'There are unsaved changes. Are you sure you want to leave?';
  }
} */


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


/* function notesIndex() {

} */


/* TEST 2 */
window.onload = function() {
  updateView();
}
document.getElementById("submit").addEventListener("click", save);

var text = document.getElementById("editor").innerHTML;

function notesBoard() {
  //localStorage.text = document.getElementById('editor').innerHTML;
  
  console.log('textSave');
  return(editor.root.innerHTML);
}


/* [{ title: "ett",
      contents: "Hello world x 100"},
    { title: "två",
      contents: "Hello world x 100"}]
      */

function notesLoad() {
/*   let x = localStorage['text'];
  document.getElementById('editor').innerHTML = x;
  
  console.log('NotesLoaded'); */
  var notes = [];
  let obj = {};

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

function showNote (title) {
  editor.root.innerHTML = localStorage.getItem(title);
  console.log(title);

}


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

function save() {
var mydiv = document.getElementById("notes");
var newDiv = document.createElement("div");
var aTag = document.createElement('a');
aTag.setAttribute('onclick', "notesLoad()");

var title = prompt("Whats the title of your notes?");
if (title == "user") {
  title = "_user";
}
localStorage.setItem(title, notesBoard());
aTag.innerHTML = title;
mydiv.appendChild(newDiv);
mydiv.appendChild(aTag);
  
}





