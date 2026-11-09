document.getElementById("registration").addEventListener("submit", function(event) {

	event.preventDefault();

let fullName = document.getElementById("full").value;

let email = document.getElementById("email").value;

let gitHub = document.getElementById("username").value;

let avatar = document.getElementById("avatar").files[0];

if (avatar && avatar.size > 500 * 1024) {
	alert("Your avatar must be smaller than 500KB.");
	return;
}

let ticketNumber = Math.floor(100000 + Math.random() * 900000);

let ticketData = {
	
	fullName: fullName,
	email: email,
	gitHub: gitHub,
	ticketNumber: ticketNumber
};



sessionStorage.setItem("ticketData", JSON.stringify(ticketData));


if (avatar) {

	let reader = new FileReader();

	reader .onload = function() {

	  sessionStorage.setItem("avatar", reader.result);

	  window.location.href = "ticket.html";


	};

	reader.readAsDataURL(avatar);

} else {

    window.location.href = "ticket.html";
}

});
