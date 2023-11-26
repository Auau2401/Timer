const endDate = new Date("2023-11-28 23:59:59").getTime();

import codes from './codes.json' assert { type: 'json' };;

const timer = setInterval(function() {
	const now = new Date().getTime();
	const distance = endDate - now;

	var all_ele = document.body.getElementsByTagName("*");
	for (const element of all_ele) {
		element.classList.remove("active");
	}

	if (distance <= 0) {
		clearInterval(timer);
		document.getElementById("countdown").innerHTML = "Countdown abgelaufen!";
	} else {
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

		if (days != 0){
			if (seconds % 2 === 0){
				var el_39 = document.getElementById("39");

        		el_39.classList.add("active");
			}else{
				var el_39 = document.getElementById("39");

        		el_39.classList.remove("active");
			}
			

		}

		if (hours != 0){
			if (seconds % 2 === 0){
				var el_65 = document.getElementById("65");

        		el_65.classList.add("active");
			}else{
				var el_65 = document.getElementById("65");

        		el_65.classList.remove("active");
			}
			

		}

		if (minutes != 0 && seconds != 0){
			if (seconds % 2 === 0){
				var el_94 = document.getElementById("94");

        		el_94.classList.add("active");
			}else{
				var el_94 = document.getElementById("94");

        		el_94.classList.remove("active");
			}
			

		}

		const seconds_array = codes["seconds"]["" + seconds].split("+");

		for (const element of seconds_array) {
			document.getElementById(element).classList.add("active");
		  }

        

	    }
	},
1000);