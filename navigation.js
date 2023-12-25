const menuBtn = document.getElementById("menu-btn");    /*menu-btn ve nav-links adını verdiğim html değişkenlerini alıp menuBtn, navLinks ve menuBtnIcon adlı javascript değişkenlerine çevirdim*/
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {              /* menuBtn üzerine bir "click" olayı dinleyicisi eklenir. Bu olay tetiklendiğinde, */
  navLinks.classList.toggle("open");                    /* navLinks elementine "open" sınıfı eklenir veya kaldırılır. Bu, CSS ile stil verilmiş */ 
                                                        /* bir "open" sınıfının kullanılmasıyla menünün görünürlüğünü kontrol eder. */
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// headerin efekti burada
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// aracimiz kisminin efekti
ScrollReveal().reveal(".experience__image", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".experience__container", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".experience__image2", {
  ...scrollRevealOptions,
});

// hakkında kısmındaki servis kartının efekti burada
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// ortaklarimiz kismi efekti
ScrollReveal().reveal(".testimonial__container", {
  ...scrollRevealOptions,
});

// contact yani iletisim kismindaki efekt
ScrollReveal().reveal(".contact__container", {
  ...scrollRevealOptions,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


