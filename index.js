/* ===== 17Goals横スクロール ===== */
const scrollArea = document.getElementById("goalsScroll");
const prevBtn = document.querySelector(".goals__arrow--prev");
const nextBtn = document.querySelector(".goals__arrow--next");

if (scrollArea && prevBtn && nextBtn) {
  const step = () => Math.round(scrollArea.clientWidth * 0.8);
  const max = () => scrollArea.scrollWidth - scrollArea.clientWidth;

  prevBtn.addEventListener("click", () => {
    const x = scrollArea.scrollLeft;
    const m = max();
    if (x <= 5) {
      scrollArea.scrollLeft = m; // 最初なら最後へ
    } else {
      scrollArea.scrollLeft = x - step();
    }
  });

  nextBtn.addEventListener("click", () => {
    const x = scrollArea.scrollLeft;
    const m = max();
    if (x >= m - 5) {
      scrollArea.scrollLeft = 0; // 最後なら最初へ
    } else {
      scrollArea.scrollLeft = x + step();
    }
  });
}
