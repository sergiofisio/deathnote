window.addEventListener("load", function () {
  document.body.classList.add("fadein");
});

window.addEventListener("beforeunload", function () {
  document.body.classList.remove("fadein");
});
