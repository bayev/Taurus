


document.getElementById("f1").addEventListener('click', function() {
    font1();
});

document.getElementById("f2").addEventListener('click', function()  {
    font2();

});

document.getElementById("f3").addEventListener('click', function()  {
    font3();
});


document.getElementById("fn").addEventListener('click', function(){
 fontNormal();
});



function font1() {
    document.getElementById('editor').setAttribute("class", "font1");
};


function font2() {
    document.getElementById('editor').setAttribute("class", "font2");
};


function font3() {
    document.getElementById('editor').setAttribute("class", "font3");
};

function fontNormal() {
    document.getElementById('editor').setAttribute("class", "fontNormal");
};


