// Initialize the ticket count to 0
let ticketCount = 0;

// Get the cart element from the DOM
const cart = document.getElementById("cart");

// Get all the buy ticket buttons from the DOM
const buyTicketButtons = document.querySelectorAll(".buy-ticket");

// Add a click event listener to each buy ticket button
buyTicketButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Increase the ticket count
    ticketCount++;

    // Update the cart display
    cart.innerText = `Cart (${ticketCount})`;
  });
});