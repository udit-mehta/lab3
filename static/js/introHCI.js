'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$("#testjs").toggleClass("active");
	});

	function projectClick(e) { 
	    // prevent the page from reloading      
	    e.preventDefault();
	    // In an event handler, $(this) refers to      
	    // the object that triggered the event      
	    // $(this).css("background-color", "#7fff00");
	    var containingProject = $(this).closest(".project");
	    var description = $(containingProject).find(".project-description");
	    if (description.length == 0) {
	       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	    } else {
	       description.fadeToggle("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	    }
	};

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}