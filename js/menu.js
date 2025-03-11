const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Open mobile menu (slide-in from the right)
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");
  });
}

// Close mobile menu (slide-out to the right)
if (closeMenuBtn && mobileMenu) {
  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-0", "opacity-100");
    mobileMenu.classList.add("translate-x-full", "opacity-0");
  });
}

// Close menu when clicking outside
if (mobileMenu && mobileMenuBtn) {
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      mobileMenu.classList.remove("translate-x-0", "opacity-100");
      mobileMenu.classList.add("translate-x-full", "opacity-0");
    }
  });
}