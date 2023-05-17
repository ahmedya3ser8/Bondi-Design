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