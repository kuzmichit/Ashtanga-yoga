const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");

    burger.classList.toggle("is-active", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Chiudi menu" : "Apri menu");
  });

  // Chiude il menu dopo aver cliccato un link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Apri menu");
    });
  });

  // Chiude il menu premendo ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.classList.remove("is-open");
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Apri menu");
    }
  });
}
