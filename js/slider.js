document.addEventListener("DOMContentLoaded", () => {
  const fadeImage = document.getElementById("fadeImage");
  const sections = document.querySelectorAll(".section");

  const images = [
    "img/sozai_08.png",
    "img/sozai_09.png",
    "img/sozai_10.png",
    "img/sozai_14.png",
    "img/sozai_11.png"
  ];

  // IntersectionObserver で画面中央に来たセクションを検出
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = [...sections].indexOf(entry.target);

          // アニメーション（下に移動 + 透明 → 元位置で表示）
          fadeImage.classList.add("opacity-0", "translate-y-4");

          setTimeout(() => {
            fadeImage.src = images[index];
            fadeImage.classList.remove("opacity-0");

            // 遅れて位置だけ戻す
            setTimeout(() => {
              fadeImage.classList.remove("translate-y-4");
            }, 50);

          }, 300);
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  sections.forEach(section => observer.observe(section));
});

