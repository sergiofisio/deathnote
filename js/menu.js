const btnsMenu = document.querySelectorAll(".btnMenu");

for (const btn of btnsMenu) {
  btn.addEventListener("mouseenter", (event) => {
    event.preventDefault();
    const h2 = btn.querySelector("h2");
    h2.classList.add("hoverMenu");
  });
  btn.addEventListener("mouseleave", (event) => {
    const h2 = btn.querySelector("h2");
    h2.classList.remove("hoverMenu");
  });
}
