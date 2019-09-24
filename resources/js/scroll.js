const projectScroll = document.querySelector("#project-scroll");

projectScroll.addEventListener(`click`, function(e) {
  e.preventDefault();
  document
    .querySelector(this.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});
