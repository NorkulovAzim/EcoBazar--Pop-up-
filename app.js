document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("show-btn");
  const closeBtn = document.getElementById("close-btn");
  const modal = document.getElementById("modal");

  showBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  setTimeout(() => {
    modal.classList.add("show");
  }, 250);
});

const cart = document.getElementById("cart");
const openCartBtn = document.getElementById("side-bar-btn");
const closeCartBtn = document.querySelector(".cart-close-btn");

openCartBtn.addEventListener("click", () => {
  cart.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  cart.classList.remove("show");
});
