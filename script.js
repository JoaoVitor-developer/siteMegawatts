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

   document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contato');
  const sucesso = document.getElementById('mensagem-sucesso');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita sair da página

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        sucesso.style.display = 'block';
        setTimeout(() => {
          sucesso.style.display = 'none';
        }, 5000);
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    }).catch(error => {
      alert('Erro ao enviar. Tente novamente.');
    });
  });
});