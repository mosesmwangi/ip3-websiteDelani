function returnMessage() {
    alert("message received");
}


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
            $(this).show("image show");
        });
    $("#form").submit(function(event) {
        var inKeyed = $(".input").val();
        if(inKeyed != null) {
            returnMessage();
        }
        event.preventDefault();
    })
    });

