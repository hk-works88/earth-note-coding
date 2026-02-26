/* ===== 17Goals横スクロール ===== */
const scrollArea = document.getElementById("goalsScroll");
const prevBtn = document.querySelector(".goals__arrow--prev");
const nextBtn = document.querySelector(".goals__arrow--next");

if (scrollArea && prevBtn && nextBtn) {
  const getStep = () => {
    // 「1画像分」の幅（1つ隣のアイコンまでの距離）を実測して出す
    const first = scrollArea.querySelector("a, img");
    if (!first) return 140; // 保険（適当なデフォルト）

    // 同じ行の「次の要素」が取れれば、left差分＝1コマ分
    const all = Array.from(scrollArea.querySelectorAll("a, img"));
    const i = all.indexOf(first);
    const next = all[i + 1];

    const r1 = first.getBoundingClientRect();
    if (next) {
      const r2 = next.getBoundingClientRect();
      const delta = Math.round(r2.left - r1.left);
      if (delta > 0) return delta;
    }

    // nextが取れない/差分が取れない時は要素幅＋余白のざっくり
    return Math.round(r1.width + 24);
  };

  const max = () => scrollArea.scrollWidth - scrollArea.clientWidth;

  const move = (dir) => {
    const step = getStep();
    const x = scrollArea.scrollLeft;
    const m = max();

    if (m <= 0) return; // そもそもスクロール不要（幅が足りてる）なら何もしない

    // 端ならループ（好みで削除してもOK）
    if (dir < 0 && x <= 5) {
      scrollArea.scrollTo({ left: m, behavior: "smooth" });
      return;
    }
    if (dir > 0 && x >= m - 5) {
      scrollArea.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    scrollArea.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  prevBtn.addEventListener("click", () => move(-1));
  nextBtn.addEventListener("click", () => move(1));
}
window.addEventListener("load", () => {
  document
    .querySelectorAll(".fade-in")
    .forEach((el) => el.classList.add("is-show"));
});
