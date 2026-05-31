/**
 * DisplayCardsAuto — AUTO MODE ONLY
 * Editor selects ONE parent asset → fetch children → render cards
 */

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderCard(card, settings) {
  const {
    title = "",
    description = "",
    href = "#",
    actionText = settings.buttonText,
  } = card || {};

  return `
    <div class="display-cards__card-wrapper">
      <div class="card card--full">
        <div class="card-body">
          <h5 class="card-title">${esc(title)}</h5>
          ${
            settings.showDescription && description
              ? `<p class="card-text">${esc(description)}</p>`
              : ""
          }
        </div>

        ${
          settings.showButton
            ? `<div class="card-footer">
                 <span class="btn btn-tertiary">
                   ${esc(actionText)} <i class="fa-light fa-arrow-right"></i>
                 </span>
               </div>`
            : ""
        }
      </div>
    </div>
  `;
}

export default {
  async main(input, info, context) {
    const {
      parentAssetId,
      columns = 3,
      backgroundColor = "white",
      showDescription = true,
      showButton = true,
      buttonText = "Read more",
      sectionTitle = "",
      sectionSubtitle = "",
    } = input || {};

    let children;

    // Auto Mode preview fallback
    if (!context || !context.getChildren) {
      console.warn("Preview mode → using mockDataWrapper");
      const { mockDataWrapper } = await import("./previews/mockDataWrapper.js");
      children = mockDataWrapper.children;
    } else {
      children = await context.getChildren(parentAssetId);
    }

    const cardsToRender = (children || []).map((child) => ({
      title: child.name,
      description: child.metadata?.description || "",
      href: child.urls?.full || "#",
      actionText: buttonText,
    }));

    const safeColumns = [2, 3, 4].includes(columns) ? columns : 3;
    const columnClass = `display-cards--${safeColumns}col`;
    const bgClass =
      backgroundColor === "grey"
        ? "display-cards--bg-grey"
        : "display-cards--bg-white";

    const headerHtml = sectionTitle
      ? `<div class="display-cards__header">
          <h2 class="display-cards__title">${esc(sectionTitle)}</h2>
          ${
            sectionSubtitle
              ? `<p class="display-cards__subtitle">${esc(sectionSubtitle)}</p>`
              : ""
          }
        </div>`
      : "";

    const cardsHtml = cardsToRender
      .map((card) =>
        renderCard(card, {
          showDescription,
          showButton,
          buttonText,
        })
      )
      .join("");

    return `
      <section class="display-cards ${esc(columnClass)} ${esc(bgClass)}">
        ${headerHtml}
        <div class="display-cards__grid">
          ${cardsHtml}
        </div>
      </section>
    `;
  },
};
