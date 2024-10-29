$( ".draggable, .draggable-mode, .draggable-is-1, .draggable-is-2, .draggable-color-1, .draggable-color-2, .draggable-sans, .draggable-display" ).draggable({ snap: ".fill", containment: "document",
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

  // $( function() {
  //   $( ".droppable-is" ).droppable({
  //     accept: ".draggable-is-1",
  //     tolerance: "intersect",
  //     classes: {
  //     },
  //     drop: function( event, ui ) {
  //       $("video").addClass( "show" )
  //     },
  //     out: function( event, ui ) {
  //       $("video").toggleClass( "show" )

  //     }
  //   });
  // } ); COME BACK TO? MIGHT WORK NOW / NEEDS SMALLER VIDEO

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

  // $( function() {
  //   $( ".droppable-is" ).droppable({
  //     accept: ".draggable-is-2, .draggable-is-1",
  //     tolerance: "intersect",
  //     drop: function( event, ui ) {
  //       if (ui.draggable.hasClass("draggable-is-2")) {
  //       $("body").toggleClass( "rainbow" ),
  //       $(".fill").toggleClass("underline-3")
  //       }
  //       else (ui.draggable.hasClass("draggable-is-1"))
  //       $("body").toggleClass( "light" ),
  //       $(".fill").toggleClass("underline-2")
  //     },
  //     out: function( event, ui ) {
  //       if (ui.draggable.hasClass("draggable-is-2")) {
  //         $("body").toggleClass( "rainbow" ),
  //         $(".fill").toggleClass("underline-3")
  //         }
  //         else (ui.draggable.hasClass("draggable-is-1"))
  //         $("body").toggleClass( "light" ),
  //         $(".fill").toggleClass("underline-2")
  //     }
  //   });
  // } ); CANT GET THIS TO WORK >:C

  //   COLORS


  $(function() {
    $(".droppable-color-2").droppable({
      accept: ".draggable-color-1, .draggable-color-2, .draggable-mode",
      tolerance: "intersect",
      drop: function(event, ui) {
        if (ui.draggable.hasClass("draggable-color-1")) {
          $("body").addClass("blue");
          $(".fill").addClass("underline-4");
        } else if (ui.draggable.hasClass("draggable-color-2")) {
          $("body").addClass("pink");
          $(".fill").addClass("underline-3");
        }
      },
      out: function(event, ui) {
        if (ui.draggable.hasClass("draggable-color-1")) {
          $("body").removeClass("blue");
          $(".fill").removeClass("underline-4");
        } else if (ui.draggable.hasClass("draggable-color-2")) {
          $("body").removeClass("pink");
          $(".fill").removeClass("underline-3");
        }
      }
    });
  });

  //   FONTS

  $(function() {
    $(".droppable-font").droppable({
      accept: ".draggable-sans, .draggable-display",
      tolerance: "intersect",
      drop: function(event, ui) {
        if (ui.draggable.hasClass("draggable-sans")) {
          $("body").addClass("sans");
        } else if (ui.draggable.hasClass("draggable-display")) {
          $("body").addClass("display");
        }
      },
      out: function(event, ui) {
        if (ui.draggable.hasClass("draggable-sans")) {
          $("body").removeClass("sans");
        } else if (ui.draggable.hasClass("draggable-display")) {
          $("body").removeClass("display");
        }
      }
    });
  });