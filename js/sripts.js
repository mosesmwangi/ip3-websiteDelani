function returnMessage() {
    alert("message received");
}


$(document).ready(function() {
    $("#designShow").click(function() {
        $("#hide1").toggle();
        $("#designShow").toggle();
    });
    $("#hide1").click(function() {
        $("#designShow").toggle();
        $("#hide1").toggle();
    });
    $("#devShow").click(function() {
        $("#hide2").toggle();
        $("#devShow").toggle();
    });
    $("#hide2").click(function() {
        $("#devShow").toggle();
        $("#hide2").toggle();
    });
    $("#productShow").click(function() {
        $("#hide3").toggle();
        $("#productShow").toggle();
    });
    $("#hide3").click(function() {
        $("#productShow").toggle();
        $("#hide3").toggle();
    });
    $(".col-md-3").mouseover(function() 
    {
        $(this).css("opacity","0.5");
        });
        $(".col-md-3").mouseout(function() {
            $(this).css("opacity","1");
        })
    $("#form").submit(function(event) {
        var inKeyed = $(".input").val();
        if(inKeyed != null) {
            returnMessage();
        }
        event.preventDefault();
    })
    });

