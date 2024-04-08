const confirm = document.querySelector(".confirm");
const imgs = document.querySelectorAll(".img");
const form = document.querySelector("form");
const h1Form = document.querySelector(".form h1");
const inputs = document.querySelectorAll(".input");
const buttons = document.querySelector(".btn");

confirm.addEventListener("click", (event) => {
  event.preventDefault();
  const personagem = document.querySelector("#personagem");
  const modo = document.querySelector("#modo");
  if (personagem.value === "" || modo.value === "") {
    alert("Preencha todos os campos!");
    return;
  }

  for (const img of imgs) {
    if (img.id === personagem.value) {
      img.classList.add("death");
      personagem.remove(personagem.selectedIndex);
      modo.value = "";
    }
  }
  if (personagem.length === 1) {
    inputs.forEach((input) => {
      input.classList.add("hide");
    });
    buttons.classList.add("hide");
    // const h1 = document.createElement("h1");
    h1Form.textContent =
      "Você matou todos os personagens! Agora o mundo está salvo e tranquilo. Você pode parar de usar o DeathNote agora 🙂";
  }
});
