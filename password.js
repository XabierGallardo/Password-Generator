//Initial values
let button_8 = false;
let button_12 = false;
let button_numbers = false;
let button_words = false;
let button_combined = false;


//Selector numbers functionality (8 or 12)
$("#button_8").click(function() {

	//Only one can be true and active in each row
	if(button_12 === true ) {
		button_12 = false;
		$("#button_12").toggleClass("active");
	}
	
	button_8 = !button_8;
	$("#button_8").toggleClass("active");
});

$("#button_12").click(function() {
	
	if(button_8 === true ) {
		button_8 = false;
		$("#button_8").toggleClass("active");
	}
	
	button_12 = !button_12;
	$("#button_12").toggleClass("active");
});


//Selector type functionality (numbers, words, combined)
$("#button_numbers").click(function() {

	if(button_words === true) {
		button_words = false;
		$("#button_words").toggleClass("active");
	}

	if(button_combined === true) {
		button_combined = false;
		$("#button_combined").toggleClass("active");
	}

	button_numbers = !button_numbers;
	$("#button_numbers").toggleClass("active");
});

$("#button_words").click(function() {

	if(button_numbers === true) {
		button_numbers = false;
		$("#button_numbers").toggleClass("active");
	}

	if(button_combined === true) {
		button_combined = false;
		$("#button_combined").toggleClass("active");
	}

	button_words = !button_words;
	$("#button_words").toggleClass("active");
});

$("#button_combined").click(function() {

	if(button_words === true) {
		button_words = false;
		$("#button_words").toggleClass("active");
	}

	if(button_numbers === true) {
		button_numbers = false;
		$("#button_numbers").toggleClass("active");
	}

	button_combined = !button_numbers;
	$("#button_combined").toggleClass("active");
});


$("#generate").click(generatePassword);

function generatePassword() {

let number;
let type;

	//Check which button_number is active	
	if ($("#button_8").hasClass("active") === true) {
		number = 8;
	} else if ($("#button_12").hasClass("active") === true) {
		number = 12;
	} else {
		number = "";
	}

	//Check which button_type is active
	if ($("#button_numbers").hasClass("active") === true) {
		type = "numbers";
	} else if ($("#button_words").hasClass("active") === true) {
		type = "words";
	} else if ($("#button_combined").hasClass("active") === true) {
		type = "combined";
	} else  {
		type = "";
	}

	//$("#password").html("12345678Abcd");
	$("#password").html("length: " + number + ", type: " + type);
}

