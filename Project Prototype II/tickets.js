let buttons = document.querySelectorAll(".buy-ticket");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		alert("Ticket purchased!");
	});
}
