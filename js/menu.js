const btnsMenu = document.querySelectorAll(".btnMenu");

for (const btn of btnsMenu) {
  btn.addEventListener("mouseenter", (event) => {
    console.log(btn);
    event.preventDefault();
    console.log(btn);
    const h2 = btn.querySelector("h2");
    h2.classList.add("hoverMenu");
  });
  btn.addEventListener("mouseleave", (event) => {
    console.log(btn);
    const h2 = btn.querySelector("h2");
    h2.classList.remove("hoverMenu");
  });
}
