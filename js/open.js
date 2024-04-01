document.querySelector(".open").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.add("openBook");
  setTimeout(() => {
    window.location.href = this.href;
  }, 2000);
});
