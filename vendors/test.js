
// document.getElementById("editor").addEventListener("submit",
//         function(event) {
//             console.log(Hello);
            
//             event.preventDefault();
//             var content = document.getElementById('editor').innerHTML;
//             console.log( "this is it");
//             var numberOfListItems = listData.length;
//             console.log(musicfiles, "this is it");
//         });
    



// function check_web_storage_support() {
//     if(typeof(Storage) !== "undefined") {
//         return(true);
//     }
//     else {
//         alert("Web storage unsupported!");
//         return(false);
//     }
// }


// function save() {
//     if(check_web_storage_support() == true) {
//         var area = document.getElementById("editor");
//         console.log(area.textContent);
//         if(area.textContent != '') {
//             localStorage.setItem("note", area.textContent);
//         }
//         else {
//             alert("Nothing to save");
//         }
//     }
// }

// SAVE AND LOAD BUTTON CODED
// document.getElementById('editor').innerHTML = localStorage['text'] || 'This text is automatically saved every second :) ';
// document.getElementById("submit").onclick = function () { 
//     localStorage['text'] = document.getElementById('editor').innerHTML;
// }


// document.getElementById("submit").onclick = function() {
//     var li = document.createElement("list");
//     var inputValue = document.getElementById("editor").innerHTML;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
// }

//      document.getElementById("submit").onclick = function() {
//      var objTo = document.getElementById("myDiv"); //DIVEN I HTML
//      var divNew = document.createElement("div");    //ADDERAR EN NY DIV
//      var createlink = document.createAttribute("href");
//      var skapa = document.createAttribute("href"); 
//      divNew.innerHTML = document.getElementById("editor").textContent; //KOPIERAR TEXTEN I EDITORN OCH TILLÄGGER I DIVEN.
//      objTo.appendChild(divNew, createlink);
//  }

// document.getElementById("submit").onclick = function() {
//     var mydiv = document.getElementById("myDiv");
//     var newDiv = document.createElement("div");
//     var aTag = document.createElement('a');

//     aTag.setAttribute('href',"yourlink.htm");
//     aTag.innerHTML = prompt("Whats the Title of you notes?");

//     mydiv.appendChild(newDiv);
//     mydiv.appendChild(aTag);

//     localStorage.setItem("test", editor.textContent);
// }

// window.onload = function(){
//     test.innerHTML = localStorage.getItem("test");
// }
    


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

