const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const timestamp = urlParams.get('timestamp') * 1000
const endDate = new Date(timestamp);
const now = new Date().getTime();
const distance = endDate - now;




import codes from './codes.json' assert { type: 'json' };;

const timer = setInterval(function() {
	const now = new Date().getTime();
	const distance = endDate - now;

	if (typeof timestamp !== 'number' || distance >= 44672917835){
		clearInterval(timer);
		alert("Ungültiger Timestamp! / Die Zeitspanne ist zu groß!");
		return;
	}

	var all_ele = document.body.getElementsByTagName("*");
	for (const element of all_ele) {
		element.classList.remove("active");
	}

	if (distance <= 0) {
		clearInterval(timer);
		alert("Countdown abgelaufen!");
	} else {
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (days != 0){
			if (seconds % 2 != 0){
				var el_39 = document.getElementById("39");

        		el_39.classList.add("active");
			}else{
				var el_39 = document.getElementById("39");

        		el_39.classList.remove("active");
			}
			

		}

		if (hours != 0){
			if (seconds % 2 != 0){
				var el_65 = document.getElementById("65");

        		el_65.classList.add("active");
			}else{
				var el_65 = document.getElementById("65");

        		el_65.classList.remove("active");
			}
			

		}

		if (minutes != 0){
			if (seconds % 2 != 0){
				var el_94 = document.getElementById("94");

        		el_94.classList.add("active");
			}else{
				var el_94 = document.getElementById("94");

        		el_94.classList.remove("active");
			}
			

		}

		if (seconds != 0){
			const seconds_array = codes["seconds"]["" + seconds].split("+");

		for (const element of seconds_array) {
			document.getElementById(element).classList.add("active");
		  }
	    }
		if (minutes != 0){
			const minutes_array = codes["minutes"]["" + minutes].split("+");

		for (const element of minutes_array) {
			document.getElementById(element).classList.add("active");
		  }
	    }

		if (hours != 0){
			const hours_array = codes["hours"]["" + hours].split("+");

		for (const element of hours_array) {
			document.getElementById(element).classList.add("active");
		  }
	    }
		if (days != 0){
			const days_array = codes["days"]["" + days].split("+");

		for (const element of days_array) {
			document.getElementById(element).classList.add("active");
		  }
	    }

		}
	},
1000);
