/* Implementation of Javascript for a smooth scrolling when links / buttons are clicked, moving to respective section */
"use scrict";

/* lets content of page load before navbar event */
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var scrollFlag = false;

  navbar.addEventListener("click", function () {
    if (scrollFlag) {
      scrollToTop();
      scrollFlag = false;
    } else {
      scrollFlag = true;
      setTimeout(function () {
        scrollFlag = false;
      }, 300);
    }
  });

  var lastClickTime = 0;

  navbar.addEventListener("click", function () {
    var now = new Date().getTime();
    if (now - lastClickTime < 300) {
      scrollToTop();
      lastClickTime = 0;
    } else {
      lastClickTime = now;
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

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
