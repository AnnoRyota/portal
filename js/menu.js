document.querySelector(".nav-toggle").addEventListener("click", function () {
  this.classList.toggle('active');
  document.querySelector("#nav").classList.toggle('panelactive');
  document.querySelectorAll(".circle-bg").forEach(function(element) {
    element.classList.toggle('circleactive');
  });
});

document.querySelectorAll("#nav a").forEach(function(element) {
  element.addEventListener("click", function () {
    document.querySelector(".nav-toggle").classList.remove('active');
    document.querySelector("#nav").classList.remove('panelactive');
    document.querySelectorAll(".circle-bg").forEach(function(element) {
      element.classList.remove('circleactive');
    });
  });
});