var modals = document.getElementsByClassName("quillText")[0];

document.getElementById('editor').innerHTML = localStorage['text'];

    document.getElementById("submit").onclick = function () {
        localStorage['text'] = document.getElementById('editor').innerHTML;   
}
