//Initial values, non-active by default
let button_8 = false;
let button_12 = false;
let button_numbers = false;
let button_words = false;
let button_combined = false;



//Length buttons (8 or 12), only one can be true
$("#button_8").click(function() {
	//Before activation, check if the other button is active and true 
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


//Type buttons (numbers, words, combined)
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

	//Create an empty password array to fill later
	let password = [];


	//Check which button_number is active and assign value to "num"	
	if ($("#button_8").hasClass("active") === true) {
		num = 8;

	} else if ($("#button_12").hasClass("active") === true) {
		num = 12;

	} else {
		//Number error message 
		console.log("Select a number");
	}

	//Check which button_type is active and assign value to "type"
	if ($("#button_numbers").hasClass("active") === true) {
		type = 1;

	} else if ($("#button_words").hasClass("active") === true) {
		type = 2;

	} else if ($("#button_combined").hasClass("active") === true) {
		type = 3;

	} else  {
		//Type error  message
		console.log("Select a type");
	}


	//Generate password according to num and type values
	
	for(let i = 0; i < num; i++) { //Iterate that selected "num" of times

		switch (type) { //Select the desired array based on "type"

			case 1:

				//Generate a random number based on the size of the array
				random = Math.floor((Math.random() * numbers.length));

				//Select a character located on that random number
				character = numbers[random];

				//Place that character onto our empty array
				password.push(character);

				//Print every iteration.. just for fun!
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
			//Avoid duplicate error messages!
		}
	}

	//Print final results
	$("#password").html(password);	
}