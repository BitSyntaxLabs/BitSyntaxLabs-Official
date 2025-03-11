const elements = document.querySelectorAll(".slideIn");
const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slideInActive");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
);
elements.forEach((el) => observer.observe(el));