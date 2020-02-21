

$(document).ready(function() {
    $("#design").click(function() {
        $("#hide1").toggle();
    })
    $("#devt").click(function() {
        $("#hide2").toggle();
    })
    $("#prodDevt").click(function() {
        $("#hide3").toggle();
    })
    $(".col-md-3").hover(function() 
    {
        $(this).text("image");
        },
        function() {
            $(this).show();
        });
    });
