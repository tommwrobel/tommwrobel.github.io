$(document).ready(function() {
	var wrapper   		= $(".container form");
    var elementToAppend = $("#link-container-template");
    var id = 1;
    var num = 1;
    
    //add
	$(wrapper).on("click",".add-link-button", function(e){
		e.preventDefault();

        $(".links-wrapper").append($(elementToAppend).html());

        $(".links-wrapper .link-container:last-child .link-number").text(num);
        $(".links-wrapper .link-container:last-child .color-radio-input").each(function() {
            $(this).attr("name", "col" + id);
        });

        id++;
        num++;
	});

    //remove
	$(wrapper).on("click",".remove_field_button", function(e){
        e.preventDefault(); 
        $(this).parent('div').parent('div').remove();

        num--;
        var number = 1;
        $(".links-wrapper .link-number").each(function() {
            $(this).text(number);
            number++;
        });
    });



});