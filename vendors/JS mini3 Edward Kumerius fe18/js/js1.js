
window.onload = function ()
{
  function collapseScroller ()
  {
    // Grab all the trigger elements on the page
    const triggers = Array.from(document.querySelectorAll('[scroller_body="collapse"]'));
    // Listen for click events, but only on our triggers
    window.addEventListener('click', (ev) => {
      const elm = ev.target;
      if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        collapse(selector, 'toggle');
      }
    }, false);


  }


  document.getElementById("form").addEventListener("submit",
            function(event) {

                event.preventDefault();
                var personname = document.getElementById('pname').value;
                var songname = document.getElementById('sname').value;
                var songgenre= document.getElementById('sgenre').value;
                var musicfiles = document.getElementById('musicfile').value;
                var scroller = document.getElementById('scroller_body');

                var listData = [ personname, songname, songgenre  ];
                var numberOfListItems = listData.length;
                console.log(musicfiles, "this is it");


                var divMaker = document.createElement("div");
                divMaker.id = 'blocks';
                divMaker.className = 'struct-scrollercontent';

                //var content = document.createTextNode("<YOUR_CONTENT>");
                // create the inner div before appending to the body
                 var listElement = document.createElement('ul');

                scroller.appendChild(divMaker);
                divMaker.appendChild(listElement);

                for (var i = 0; i < numberOfListItems; ++i)
                {
                  // create an item for each one
                  var listItem = document.createElement('li');

                  // Add the item text
                  listItem.innerHTML = listData[i];

                  // Add listItem to the listElement
                  listElement.appendChild(listItem);
                }




              //
              // var createmusic = document.createElement('audio');
              //       createmusic.id ='sound';
              //       createmusic.innerHTML = musicfiles;
              //       divMaker.appendChild(createmusic);
              //
              //       gonow(musicfiles);
              //
              //       function gonow (sound){
              //         // var sound = document.getElementById('sound');
              //         sound.src = URL.createObjectURL(this.files[0]);
              //           // not really needed in this exact case, but since it is really important in other cases,
              //           // don't forget to revoke the blobURI when you don't need it
              //           sound.onend = function(e) {
              //             URL.revokeObjectURL(this.src);
              //           }
              //         }



                  //     console.log("helloooooo");
                  //
                  // var sound = document.getElementById('sound');
                  //   sound.src = URL.createObjectURL(this.files[0]);
                  //   sound.src = this.result;
                  //   sound.controls = true;
                  //   sound.play();
                  //   sound.readAsDataURL(this.files);




                // document.getElementById('blocks').innerHTML = "hello ma";

                // then append the whole thing onto the body
                // document.getElementById('scroller_body')[0].appendChild(divMaker);



                // this.id will show "form"
              });
}
