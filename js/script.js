document.querySelector(".open").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.add("openBook");
  setTimeout(() => {
    window.location.href = this.href;
  }, 2000);
});

window.addEventListener("load", function () {
  document.body.classList.add("fadein");
});

window.addEventListener("beforeunload", function () {
  document.body.classList.remove("fadein");
});
