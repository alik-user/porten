const list = document.querySelector(".bottom-list");
document.querySelector(".bottom-burger").addEventListener("click", () => {
  list.classList.toggle("hidden");
  document.querySelector(".bottom-burger").classList.toggle('active')
});
