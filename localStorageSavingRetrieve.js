// When receiving/sending data from a web server, the data is always a string.
(function() {
	function saveOnLocalStorage() {
		// person object
		var person = {
			name: 'Cristina',
			age: 28, 
			address: 'Los Angeles, CA',
			coordinates: {
				lat: 10,
				long: -10
			}
		};

		// Variable name
		var name = 'Nayeli Rojas Zamora';

		// Saving variable
		localStorage.setItem("Name_localStorage", name);

		// Saving objects, stringify() Convert a JavaScript object into a string
		localStorage.setItem("Person_localStorage", JSON.stringify(person));
	}

	function retrieveLocalStorage() {
		// Validate if the data exist on localStorage
		if(localStorage.getItem("Name_localStorage")) {
			// Retrieve the variable 
			let name = localStorage.getItem("Name_localStorage");
			console.log(name);

			// Retrieve the object, parse() the data becomes a JavaScript object
			let persona = JSON.parse(localStorage.getItem("Person_localStorage"));
			console.log(persona);	
		} else {
			console.log('No data on localStorage');
		}
	}

	//saveOnLocalStorage();
	retrieveLocalStorage();
})();