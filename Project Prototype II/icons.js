const facebookIcon = document.getElementById("facebook-icon");
const twitterIcon = document.getElementById("twitter-icon");
const instagramIcon = document.getElementById("instagram-icon");

// add click event listeners to each icon
facebookIcon.addEventListener("click", () => {
  // open the Facebook page in a new tab
  window.open("https://www.facebook.com/");
});

twitterIcon.addEventListener("click", () => {
  // open the Twitter page in a new tab
  window.open("https://twitter.com/");
});

instagramIcon.addEventListener("click", () => {
  // open the Instagram page in a new tab
  window.open("https://www.instagram.com/");
});
