  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileNav.classList.remove("show");
    }
  });