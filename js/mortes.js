const confirm = document.querySelector(".confirm");
const imgs = document.querySelectorAll(".img");

confirm.addEventListener("click", (event) => {
  event.preventDefault();
  const personagem = document.querySelector("#personagem");
  const modo = document.querySelector(".modo");
  if (personagem.value === "" || modo === "") {
    alert("Preencha todos os campos!");
    return;
  }

  for (const img of imgs) {
    if (img.id === personagem.value) {
      img.classList.add("death");
      personagem.remove(personagem.selectedIndex);
    }
  }
});
