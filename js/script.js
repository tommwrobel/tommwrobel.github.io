$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $(".container form");
    var elementToAppend = $(".links-wrapper div:first-child");

	var x = 1; //initlal text box count
	$(wrapper).on("click",".add-link-button", function(e){ //on add input button click
		e.preventDefault();
		x++;
        $(".links-wrapper").append($(elementToAppend).wrap("<p>").parent().html()); 
        $(elementToAppend).unwrap();
        
	});

	$(wrapper).on("click",".remove_field_button", function(e){
		e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    });



});