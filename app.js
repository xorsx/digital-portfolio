/* ============================================================
   OLIVIA SWANN — app.js
   Nav scroll, mobile drawer, scroll reveal, contact form
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── Nav: add .scrolled class on scroll ── */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile nav drawer ── */
  const toggle = document.querySelector(".nav__toggle");
  const drawer = document.querySelector(".nav__drawer");
  const closeBtn = document.querySelector(".nav__drawer .close-btn");

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      drawer.classList.add("open");
      document.body.style.overflow = "hidden";
    });
    const close = () => {
      drawer.classList.remove("open");
      document.body.style.overflow = "";
    };
    if (closeBtn) closeBtn.addEventListener("click", close);
    drawer
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", close));
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll(".reveal, .stagger");
  if (reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ── Portfolio filter ── */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const filterItems = document.querySelectorAll("[data-category]");
  if (filterBtns.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.filter;
        filterItems.forEach((item) => {
          if (cat === "all" || item.dataset.category === cat) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  /* ── Contact form (Netlify Forms) ── */
  const form = document.querySelector(".contact-form form");
  const response = document.querySelector(".form-response");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString(),
        });
        if (res.ok) {
          response.textContent =
            "Thanks — I'll be in touch within 1–2 business days.";
          response.className = "form-response success";
          response.style.display = "block";
          form.reset();
        } else {
          throw new Error();
        }
      } catch {
        response.textContent =
          "Something went wrong. Please email me directly at oliviarswann@gmail.com";
        response.className = "form-response error";
        response.style.display = "block";
      }
    });
  }
});
