/* Implementation of Javascript for a smooth scrolling when links / buttons are clicked, moving to respective section */

const servicesLink = document.querySelector('a[href="#services"]');
const contactLink = document.querySelector('a[href="#contact"]');

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
