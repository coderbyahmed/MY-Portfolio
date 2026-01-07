// ===== Hamburger Toggle =====
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// ===== Nav link → Card focus =====
const navLinks = document.querySelectorAll("[data-target]");
const cards = document.querySelectorAll(".card");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-target");

    cards.forEach(card => {
      if (card.getAttribute("data-card") === target) {
        card.scrollIntoView({ behavior: "smooth" });
      }
    });

    // mobile menu auto close
    mobileMenu.classList.remove("active");
  });
});

// ===== Card click =====
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.scrollIntoView({ behavior: "smooth" });
  });
});