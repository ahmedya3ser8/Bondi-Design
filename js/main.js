// Filter Imgs
let switchersLi = document.querySelectorAll(".portfolio ul li");
let boxs = document.querySelectorAll(".portfolio .row > div");

switchersLi.forEach(li => {
  li.addEventListener("click", function() {
    switchersLi.forEach(li => {
      li.classList.remove("active");
      this.classList.add("active");
    });
    boxs.forEach(box => {
      box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach(ele => {
      ele.style.display = "block";
    });
  });
});

// Active Links With Scroll
let sections = document.querySelectorAll(".home, .services, .portfolio, .stuff, .about");
let links = document.querySelectorAll(".navbar .navbar-nav li a");

window.onscroll = () => {
  sections.forEach(sec => {
    let id = sec.getAttribute("id");
    if (window.scrollY >= sec.offsetTop - 200 && window.scrollY < sec.offsetTop - 200 + sec.offsetHeight) {
      links.forEach(link => {
        link.classList.remove("active");
        document.querySelector(`.navbar .navbar-nav li a[href*= "${id}"]`).classList.add("active");
      });
    }
  });
}