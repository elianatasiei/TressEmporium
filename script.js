/* Just a little bit of Javascript for a smooth scrolling, so when nav items are clicked it smoothly
goes into respective section*/

const bookingLink = document.querySelector('a[href="#booking"]');
const servicesLink = document.querySelector('a[href="#services"]');
const contactLink = document.querySelector('a[href="#contact"]');

bookingLink.addEventListener("click", () => {
  document.querySelector("#booking").scrollIntoView({
    behavior: "smooth",
  });
});

servicesLink.addEventListener("click", () => {
  document.querySelector("#services").scrollIntoView({
    behavior: "smooth",
  });
});

contactLink.addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});

/* after refreshing page loads back to the top*/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
