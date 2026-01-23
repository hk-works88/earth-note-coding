/* ===== TOPボタン制御 ===== */
const toTopBtn = document.getElementById("toTop");
const showAfter = 200;

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > showAfter) {
    toTopBtn.classList.add("is-show");
  } else {
    toTopBtn.classList.remove("is-show");
  }
});

/* ===== SPメニュー開閉 ===== */
const hamburger = document.querySelector(".header__hamburger");
const spMenu = document.querySelector(".sp-menu");

if (hamburger && spMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("is-menu-open");

    // ★追加：×にする
    hamburger.classList.toggle("is-active", isOpen);

    hamburger.setAttribute("aria-expanded", String(isOpen));
    spMenu.setAttribute("aria-hidden", String(!isOpen));
  });

  // メニュー内リンクを押したら閉じる
  spMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      document.body.classList.remove("is-menu-open");
      hamburger.classList.remove("is-active"); // ★追加

      hamburger.setAttribute("aria-expanded", "false");
      spMenu.setAttribute("aria-hidden", "true");
    }
  });
}
