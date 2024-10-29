$( ".draggable, .draggable-mode, .draggable-is-1, .draggable-is-2, .draggable-color-1, .draggable-color-2, .draggable-sans" ).draggable({ snap: ".fill", containment: "document",
 });

// DARK/LIGHT FUNCTION

 $( function() {
    $( ".droppable-mode" ).droppable({
      accept: ".draggable-mode",
      tolerance: "intersect",
      classes: {
      },
      drop: function( event, ui ) {
        $("body").toggleClass( "dark" ),
        $(".fill").addClass("underline-2")
      },
      out: function( event, ui ) {
        $("body")
          .toggleClass( "dark" ),
        $(".fill").removeClass("underline-2")
      }
    });
  } );

//   TV RAINBOW FUNCTIONS

  $( function() {
    $( ".droppable-is" ).droppable({
      accept: ".draggable-is-1",
      tolerance: "intersect",
      classes: {
      },
      drop: function( event, ui ) {
        $("video").addClass( "show" )
      },
      out: function( event, ui ) {
        $("video").toggleClass( "show" )

      }
    });
  } );

  $( function() {
    $( ".droppable-is" ).droppable({
      accept: ".draggable-is-2",
      tolerance: "intersect",
      classes: {
      },
      drop: function( event, ui ) {
        $("body").toggleClass( "rainbow" ),
        $(".fill").toggleClass("underline-3")
      },
      out: function( event, ui ) {
        $("body")
          .toggleClass( "rainbow" ),
          $(".fill").toggleClass("underline-3")

      }
    });
  } );

  //   COLORS

//   $( function() {
//     $( ".droppable-color" ).droppable({
//       accept: ".draggable-color-1",
//       tolerance: "intersect",
//       classes: {
//       },
//       drop: function( event, ui ) {
//         $("body").addClass( "blue" ),
//         $(".fill").addClass("underline-4")
//       },
//       out: function( event, ui ) {
//         $("body").removeClass( "blue" ),
//         $(".fill").removeClass("underline-4")

//       }
//     });
//   } );


  //   FONTS

  $( function() {
    $( ".droppable-font" ).droppable({
      accept: ".draggable-sans",
      tolerance: "intersect",
      classes: {
      },
      drop: function( event, ui ) {
        $("body").toggleClass( "sans" )
      },
      out: function( event, ui ) {
        $("body").toggleClass( "sans" )
      }
    });
  } );

//   $( function() {
//     $( ".droppable-font" ).droppable({
//       accept: ".draggable-display",
//       tolerance: "intersect",
//       classes: {
//       },
//       drop: function( event, ui ) {
//         $("body").toggleClass( "display" )
//       },
//       out: function( event, ui ) {
//         $("body").toggleClass( "display" )
//       }
//     });
//   } );

$( function() {
    $( ".droppable-color-2" ).droppable({
      accept: ".draggable-color-2",
      tolerance: "intersect",
      classes: {
      },
      drop: function( event, ui ) {
        $("body").addClass( "pink" ),
        $(".fill").addClass("underline-3")
      },
      out: function( event, ui ) {
        $("body").removeClass( "pink" ),
        $(".fill").removeClass("underline-3")

      }
    });
  } );