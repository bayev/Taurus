

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
 }, 10);