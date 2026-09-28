// Publications page: filter papers by research domain (chips) and free-text search.
document.addEventListener("DOMContentLoaded", function () {
  const chips = Array.from(document.querySelectorAll(".domain-chip"));
  const sections = Array.from(document.querySelectorAll(".domain-section"));
  const search = document.getElementById("pub-search");
  const empty = document.querySelector(".pub-empty");
  if (!chips.length || !sections.length) return;

  // Paper counts on each chip
  let total = 0;
  sections.forEach((section) => {
    const n = section.querySelectorAll(".bibliography > li").length;
    total += n;
    const chip = chips.find((c) => c.dataset.domain === section.dataset.domain);
    if (chip) chip.querySelector(".chip-count").textContent = n;
  });
  chips.find((c) => c.dataset.domain === "all").querySelector(".chip-count").textContent = total;

  let activeDomain = "all";

  const apply = () => {
    const term = (search.value || "").trim().toLowerCase();
    let visibleTotal = 0;

    sections.forEach((section) => {
      const inDomain = activeDomain === "all" || section.dataset.domain === activeDomain;
      let visible = 0;
      section.querySelectorAll(".bibliography > li").forEach((li) => {
        // Search the visible entry text only (not the hidden abstract/BibTeX)
        const body = li.querySelector(".pub-body");
        const text = (body ? body.dataset.searchText || (body.dataset.searchText = searchableText(body)) : li.innerText).toLowerCase();
        const match = inDomain && (term === "" || text.includes(term));
        li.classList.toggle("unloaded", !match);
        if (match) visible++;
      });
      section.hidden = visible === 0;
      visibleTotal += visible;
    });

    empty.hidden = visibleTotal !== 0;
  };

  const searchableText = (body) => {
    const parts = [".title", ".author", ".periodical", ".pub-meta", ".tldr"].map((sel) => {
      const el = body.querySelector(sel);
      return el ? el.innerText : "";
    });
    // Include every author, not just the ones shown before "and N more authors"
    return parts.join(" ") + " " + (body.dataset.authors || "");
  };

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      activeDomain = chip.dataset.domain;
      chips.forEach((c) => {
        c.classList.toggle("active", c === chip);
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      apply();
    })
  );

  let timeoutId;
  search.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(apply, 150);
  });

  // Deep link: /publications/#culture selects that domain
  const hash = decodeURIComponent(window.location.hash.substring(1));
  const fromHash = chips.find((c) => c.dataset.domain === hash);
  if (fromHash) fromHash.click();
});
