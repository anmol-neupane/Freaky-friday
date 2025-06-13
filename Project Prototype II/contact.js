// Contact Form Submission
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  fetch(contactForm.getAttribute("action"), {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(formData),
  })
    .then(() => {
      alert("Your message has been sent successfully!");
      contactForm.reset();
    })
    .catch(() => {
      alert("There was a problem sending your message. Please try again later.");
    });
});
