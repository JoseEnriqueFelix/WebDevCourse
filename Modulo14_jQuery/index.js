$("button").click(function(){
    $("h1").addClass("big-title");
    $("h1").fadeToggle();
});

$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
        $(this).css("color", "purple");
}).mouseout(function(){
    $(this).css("color", "black");
});