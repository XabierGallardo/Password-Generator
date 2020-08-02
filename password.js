//Initial values, non-active by default
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
	button_combined = !button_combined;
	$("#button_combined").toggleClass("active");
});



//Generate function, take values from active buttons and print result
$("#generate").click(generatePassword);

function generatePassword() {

	//Create variables to reassign depending on the selected values
	let num;
	let type;
	let random;
	let character;

	//Create arrays with different type characters
	let words = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".split('');
	let numbers = "0123456789".split('');
	let combined = words.concat(numbers);

	//Create an empty password array
	let password = [];


	//Check which button_number is active	
	if ($("#button_8").hasClass("active") === true) {
		num = 8;

	} else if ($("#button_12").hasClass("active") === true) {
		num = 12;

	} else {
		//Number error message
		$("#pasword").html("select a number");

	}

	//Check which button_type is active
	if ($("#button_numbers").hasClass("active") === true) {
		type = 1;

	} else if ($("#button_words").hasClass("active") === true) {
		type = 2;

	} else if ($("#button_combined").hasClass("active") === true) {
		type = 3;

	} else  {
		//Type error  message
		$("#password").html("select a type");
	
	}

	//Generate password according to number and type conditionals
	for(let i = 0; i < num; i++) {
		switch (type) {
			case 1:

				random = Math.floor((Math.random() * numbers.length));
				character = numbers[random];
				password.push(character);
				console.log(password);
			
			break;

			case 2:

				random = Math.floor((Math.random() * words.length));
				character = words[random];
				password.push(character);
				console.log(password);

			break;

			case 3:

				random = Math.floor((Math.random() * combined.length));
				character = combined[random];
				password.push(character);
				console.log(password);

			break;

			default:
			//Type error  message
			$("#password").html("select a type");
		}
	}

	$("#password").html(password);	
}

