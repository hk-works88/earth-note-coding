/* ===== Article TOC (SP対応) ===== */
const toc = document.getElementById("js-toc");

if (toc) {
  const headings = document.querySelectorAll(".article h2, .article h3");

  let currentOl = toc;
  let subOl = null;
  let h2Count = 0;

  headings.forEach((heading) => {
    const text = heading.textContent;
    const id =
      heading.id ||
      text.replace(/\s+/g, "-").replace(/[^\w\-ぁ-んァ-ヶ一-龠]/g, "");

    heading.id = id;

    if (heading.tagName === "H2") {
      h2Count++;
      subOl = null;

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.textContent = text;

      li.appendChild(a);
      currentOl.appendChild(li);
    }

    if (heading.tagName === "H3") {
      if (!subOl) {
        subOl = document.createElement("ol");
        currentOl.lastElementChild.appendChild(subOl);
      }

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.textContent = text;

      li.appendChild(a);
      subOl.appendChild(li);
    }
  });
}
