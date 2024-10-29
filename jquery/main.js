$(".dark-btn").click(
    function(){
    $("body").toggleClass("dark");
    $(".box").toggleClass ("dark");
  }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".pegasus").addClass("reveal");
        // $(".reveal-btn").css("display", "none");
        $(".reveal-btn").hide("reveal");
    }
);

$( ".draggable" ).draggable({ snap: true,
axis:"x"
 });