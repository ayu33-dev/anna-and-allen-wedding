  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
		
		
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      document.getElementById("menu").classList.remove("active");
      document.getElementById("hamburger").classList.remove("active");
    }
  });