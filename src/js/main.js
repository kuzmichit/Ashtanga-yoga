import "../scss/main.scss";
import "./animation.js";
import "./burger.js";

const itemMenu = "#news";
document.addEventListener("DOMContentLoaded", () => {
  const news = document.querySelector(itemMenu);

  if (news) {
    news.scrollIntoView({
      block: "start",
    });
  }
});
