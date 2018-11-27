
window.onload = function (){
  
  document.getElementById("save").addEventListener('click', function() {
    let noteObject = {};
    noteObject.title =  'Squaredance';
    noteObject.content = quill.root.innerhtml;
    saveNotes(noteObject);
  });
  document.getElementById("newNote").addEventListener('click', function() {
    //console.log(newNote());
    let myNote = loadNotes();
    quill.root.innerhtml = myNote.content;
    myNote.push(newNote());
    saveNotes(myNote);
  });  
  //var fix = document.getElementById('editor');
  //fix.setAttribute("contenteditable", "true");

}

/* New Note */
function newNote () {
  let noteObject = {};
  noteObject.title =  'Squaredance';
  noteObject.content = 'Trade slide thru';
  return noteObject;
 console.log('new');
  
  /*id: 
  title: 'Min shyssta anteckning',
  content: 'Här står min anteckning' */
}; 

/* Load notes */

function loadNotes (){
  return localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
}

/* save notes */
function saveNotes (note){
  let notes = loadNotes();
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  console.log(notes);
}

/* update notes*/
function updateNotes (){
  let notesSection = document.getElementsByClassName('notes').innerhtml='<h3>My Notes</h3>';
  let notes = loadNotes();
  notes.forEach((n) => { 
    let newDiv = document.createElement("div"); 
        let newP = document.createElement("p");
        let newTitle = document.createTextNode(n.title);
        let newContent = document.createTextNode(n.content);
        let newButton = document.createElement("button");
        let newButtonText = document.createTextNode('Delete me!');
        newButton.setAttribute('onclick','deleteRecipe(' + r.id + ');');
        newDiv.setAttribute('data-id', r.id);
        newButton.appendChild(newButtonText);
        newP.appendChild(newTitle);
        newDiv.appendChild(newP);
        newDiv.appendChild(newContent);
        newDiv.appendChild(newButton);
        currentSection.appendChild(newDiv);
    //console.log(n) 
  });

}

function nukeNotes () {
  localStorage.setItem('notes', JSON.stringify([]));
}
//var modals = document.getElementsByClassName("quillText")[0];
/* 
document.getElementById('editor').innerHTML = localStorage['text'];

    document.getElementById("save").onclick = function () {
        localStorage['text'] = document.getElementById('editor').innerHTML;
}

*/
/*
var Delta = Quill.import('delta');
var quill = new Quill('#editor', {
  modules: {
    toolbar: false
  },
  placeholder: 'Comp',
  theme: 'snow',
}); */

// Store accumulated changes
/*
var change = new Delta();
quill.on('text-change', function(delta) {
  change = change.compose(delta);
});
*/

// Save periodically
/*
setInterval(function() {
  if (change.length() > 0) {
    console.log('Saving changes', change);
*/
    //var test = JSON.stringify(quill.getContents());
    //quill.setContents(JSON.parse(test));
    //console.log(user);

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
   /*change = new Delta();
  }
}, 5*1000); */

// Check for unsaved data
/*
window.onbeforeunload = function() {
  if (change.length() > 0) {
    return 'There are unsaved changes. Are you sure you want to leave?';
  }
}*/
