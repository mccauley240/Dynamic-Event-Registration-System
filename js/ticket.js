let ticketData = JSON.parse(sessionStorage.getItem("ticketData"));

if (ticketData) {

	document.getElementById("welcome").textContent =
		"Congratulations, " + ticketData.fullName + "! Your Ticket is Ready.";

	document.getElementById("email").textContent =
		"We've emailed your ticket to " + ticketData.email + " and will send updates in the run up to the event.";

	document.getElementById("fullName").textContent =
		ticketData.fullName;

	document.getElementById("gitHub").textContent =
		"@" + ticketData.gitHub;

	document.getElementById("ticketNumber").textContent =
		"#" + ticketData.ticketNumber;

	let avatar = sessionStorage.getItem("avatar");


	if (avatar) {

	    document.getElementById("avatar").src = avatar;

	}

} else {


   document.getElementById("welcome").textContent =
	"No registration information found. Please register first.";

}
