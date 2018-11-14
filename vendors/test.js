
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

// document.getElementById("submit").onclick = function() {
//     var objTo = document.getElementById("myDiv");
//     var divNew = document.createElement("div");
//     var createlink = document.createElement("a");
//     var skapa = document.createAttribute("href");    
//     console.log("gelp");
//     objTo.appendChild(divNew);
//     objTo.append(createlink);
//     createlink.innerHTML = document.getElementById("editor").textContent;

// }

document.getElementById("submit").onclick = function() {
    var objTo = document.getElementById("myDiv");
    var divNew = document.createElement("div");
   
    var createlink = document.createElement("a");
    var skapa = document.createAttribute("href");    

    objTo.appendChild(divNew, createlink);


    objTo.innerHTML = document.getElementById("editor").textContent;

}


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

