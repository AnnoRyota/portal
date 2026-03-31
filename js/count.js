function countUp(el, target, duration) {
  const startTime = performance.now();

  function animate(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("countSection");
  const count24 = document.getElementById("count-24");
  const count365 = document.getElementById("count-365");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(count24, 24, 800);
        countUp(count365, 365, 1200);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section);
});