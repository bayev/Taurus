document.getElementById("f1").addEventListener('click', function () {
    font1();
});

document.getElementById("f2").addEventListener('click', function () {
    font2();

});

document.getElementById("f3").addEventListener('click', function () {
    font3();
});


document.getElementById("fn").addEventListener('click', function () {
    fontNormal();
});



function font1() {
    document.getElementsByClassName('ql-editor')[0].classList.remove("font2");
    document.getElementsByClassName('ql-editor')[0].classList.remove("font3");
    document.getElementsByClassName('ql-editor')[0].classList.add("font1");
};


function font2() {
    document.getElementsByClassName('ql-editor')[0].classList.remove("font1");
    document.getElementsByClassName('ql-editor')[0].classList.remove("font3");
    document.getElementsByClassName('ql-editor')[0].classList.add("font2");
};


function font3() {
    document.getElementsByClassName('ql-editor')[0].classList.remove("font1");
    document.getElementsByClassName('ql-editor')[0].classList.remove("font2");
    document.getElementsByClassName('ql-editor')[0].classList.add("font3");
};

function fontNormal() {
    document.getElementsByClassName('ql-editor')[0].classList.remove("font1");
    document.getElementsByClassName('ql-editor')[0].classList.remove("font2");
    document.getElementsByClassName('ql-editor')[0].classList.remove("font3");
};