$( "#waves" ).hide();


$( "#row-three" ).hover(function() {
  $( "#waves" ).fadeIn();

});

$("#row-three").mouseleave(function() {
     $( "#waves" ).fadeOut();
     
  });

$( ".sub-head-three" ).hide();

$( "#row-three" ).hover(function() {
  $( ".sub-head-three" ).fadeIn();

});

$("#row-three").mouseleave(function() {
     $( ".sub-head-three" ).fadeOut();
  });

//Row Two Script

$( "#limo" ).hide();


$( "#row-two" ).hover(function() {
  $( "#limo" ).fadeIn();

});

$("#row-two").mouseleave(function() {
     $( "#limo" ).fadeOut();
     
  });

$( ".sub-head-two" ).hide();

$( "#row-two" ).hover(function() {
  $( ".sub-head-two" ).fadeIn();

});

$("#row-two").mouseleave(function() {
     $( ".sub-head-two" ).fadeOut();
  });

//Row One Script

$( "#wolf" ).hide();


$( "#row-one" ).hover(function() {
  $( "#wolf" ).fadeIn();

});

$("#row-one").mouseleave(function() {
     $( "#wolf" ).fadeOut();
     
  });

$( ".sub-head-one" ).hide();

$( "#row-one" ).hover(function() {
  $( ".sub-head-one" ).fadeIn();

});

$("#row-one").mouseleave(function() {
     $( ".sub-head-one" ).fadeOut();
  });

//Row Four Script

$( "#flamingo" ).hide();


$( "#row-four" ).hover(function() {
  $( "#flamingo" ).fadeIn();

});

$("#row-four").mouseleave(function() {
     $( "#flamingo" ).fadeOut();
     
  });

$( ".sub-head-four" ).hide();

$( "#row-four" ).hover(function() {
  $( ".sub-head-four" ).fadeIn();

});

$("#row-four").mouseleave(function() {
     $( ".sub-head-four" ).fadeOut();
  });

$(window).resize(function(){     
  console.log($('video').width())
       if ($('video').width() < 768 ){
              $( "#wolf" ).hide();
              $( "#waves" ).hide();
              $( "#flamingo" ).hide();
              $( "#limo" ).hide();
       }

});

jQuery('#myModal, #myModal2, #myModal3, #myModal4').on('hidden.bs.modal', function (e) {
  jQuery('#myModal iframe, #myModal2 iframe, #myModal3 iframe, #myModal4 iframe').attr("src", jQuery("#myModal  iframe, #myModal2 iframe, #myModal3 iframe, #myModal4 iframe").attr("src"));
});


