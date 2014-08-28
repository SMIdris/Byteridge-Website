$( document ).ready(function() {
       $("html").mouseup(function() {
		$("#dmenuicon").hide();
    });
	
	    $(".ddownicon").click(function() {
 //alert("clicked");
            $("#dmenuicon").show();

    });
});