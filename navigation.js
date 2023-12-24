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


