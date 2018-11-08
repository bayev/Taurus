

function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}


function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("editor");
        console.log(area.textContent);
        if(area.textContent != '') {
            localStorage.setItem("note", area.textContent);
        }
        else {
            alert("Nothing to save");
        }
    }
}


document.getElementById('editor').innerHTML = localStorage['text'] || 'This text is automatically saved every second :) ';

 setInterval(function() {
      localStorage['text'] = document.getElementById('editor').innerHTML;

 }, 100);
 /*
var index = {
    nextFreeIndex: 4,
    lastOpened: 'text0',
    notes: [
        {key: 'text0', 
        title: 'Smarta tips o tricks'
        modified: ?? Date-objekt?? sträng??,
        tags: ['frontend', 'topsecret']
    },
        {key: 'text2', 
        tags: ['handlingslista']
},
        {key: 'text3', 
        tags: ['hair']
    }
]
var index = { //first time
    nextFreeIndex: 0,
    lastOpened: '',
    notes: []
}

var text0 = {
    content: '<html>blablablbla</html>'

}

 */

