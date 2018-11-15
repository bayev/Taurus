
window.onload = function (){
  var store = document.getElementById('editor').innerHTML = localStorage['text'] || 'This text is automatically saved every second :) ';
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
  placeholder: 'Compose an epic...',
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
    change = new Delta();
  }
}, 5*1000);

// Check for unsaved data
window.onbeforeunload = function() {
  if (change.length() > 0) {
    return 'There are unsaved changes. Are you sure you want to leave?';
  }
}
