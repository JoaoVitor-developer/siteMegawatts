window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".card, .servico").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

const topBtn = document.getElementById("topBtn");

  window.onscroll = () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  };

  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

   window.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("visited")) {
      alert("Bem-vindo à Mega Watts - Segurança e Automação!");
      sessionStorage.setItem("visited", "true");
    }
  });
