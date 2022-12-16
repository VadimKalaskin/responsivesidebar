const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const searchBtn = body.querySelector(".search-box");
const toggle = body.querySelector(".toggle");
const themeIcons = body.querySelectorAll(".theme-i");
const themeSpan = body.querySelector(".theme-span");
const themeBtn = body.querySelector(".theme-btn");

themeBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  themeIcons.forEach((element) => element.classList.toggle("disabled"));
  if (themeIcons[0].classList.contains("disabled")) {
    themeSpan.innerHTML = "Light theme";
  } else {
    themeSpan.innerHTML = "Dark theme";
  }
});
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
searchBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("closed")) {
    sidebar.classList.remove("closed");
  }
});
