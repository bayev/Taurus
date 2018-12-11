
  $('buttonEx').toggle(

    function() {
        $('#notes').animate({flex:0})
    }, function() {
        $('.quillwrap').animate({flex:9.3})
    })
