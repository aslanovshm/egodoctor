const modalOpen = document.querySelectorAll(".button-call-modal")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal__close")
const overlay = document.querySelector(".overlay")

modalOpen.forEach(item => {
  item.addEventListener("click", () => {
    modal.classList.add("show");
    overlay.classList.add("show")
  })
})

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
  overlay.classList.remove("show")
})

