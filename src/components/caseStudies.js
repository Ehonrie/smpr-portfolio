function renderImageBlock(study, orderClass) {
  const badges = study.badges
    .map((badge) => `<span class="bg-obsidian-base/80 backdrop-blur-md px-2 py-1">${badge}</span>`)
    .join("");

  return `
    <div class="lg:col-span-7 relative min-h-[440px] lg:min-h-[580px] overflow-hidden ${orderClass}">
      <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" alt="${study.imageAlt}" src="${study.image}" />
      <div class="absolute inset-0 bg-gradient-to-t from-obsidian-base via-transparent to-transparent opacity-80"></div>
      <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-parchment-text">
        <div class="bg-obsidian-base/80 backdrop-blur-md px-3 py-1 font-label-uppercase text-label-uppercase text-secondary border border-black/10">${study.tagLabel}</div>
        <div class="flex gap-2 font-label-uppercase text-label-uppercase text-stone-muted">${badges}</div>
      </div>
    </div>`;
}

function renderTextBlock(study, orderClass) {
  const highlights = study.highlights
    .map(
      (highlight) =>
        `<span class="bg-surface-container-high text-parchment-text font-quote-pull italic text-sm px-3 py-1">${highlight}</span>`
    )
    .join("");

  const stats = study.stats
    .map(
      (stat, i) => `
        ${i > 0 ? '<div class="h-8 w-px bg-surface-variant"></div>' : ""}
        <div>
          <div class="font-headline-sm text-headline-sm ${stat.color} leading-none">${stat.value}</div>
          <div class="font-label-uppercase text-[10px] text-stone-muted uppercase mt-1">${stat.label}</div>
        </div>`
    )
    .join("");

  return `
    <div class="lg:col-span-5 p-space-xl flex flex-col justify-between bg-surface-container-low ${orderClass}">
      <div>
        <div class="flex items-center gap-space-xs mb-space-sm font-label-uppercase text-label-uppercase text-primary">
          <span>${study.category}</span><span>/</span><span>${study.viewsLabel}</span>
        </div>
        <h3 class="font-headline-md text-headline-md text-parchment-text mb-space-md">${study.title}</h3>
        <div class="bg-surface-container p-space-md mb-space-md">
          <div class="font-label-uppercase text-[10px] text-stone-muted uppercase tracking-wider mb-1">${study.executionLabel}</div>
          <p class="font-body-sm text-body-sm text-on-surface">${study.description}</p>
        </div>
        <div class="mb-space-lg">
          <div class="font-label-uppercase text-[10px] text-stone-muted uppercase tracking-wider mb-2">${study.highlightsLabel}</div>
          <div class="flex flex-wrap gap-2">${highlights}</div>
        </div>
      </div>
      <div class="pt-space-md bg-surface-container-lowest p-space-md flex items-center justify-between border-t border-black/5">${stats}</div>
    </div>`;
}

function renderCard(study, isLast) {
  const imageBlock = renderImageBlock(study, study.reverse ? "order-1 lg:order-2" : "");
  const textBlock = renderTextBlock(study, study.reverse ? "order-2 lg:order-1" : "");
  const blocks = study.reverse ? textBlock + imageBlock : imageBlock + textBlock;

  return `
    <div class="bg-charcoal-surface ${isLast ? "" : "mb-space-3xl"} group overflow-hidden border border-black/5">
      <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">${blocks}</div>
    </div>`;
}

export function renderCaseStudies(caseStudies) {
  const cards = caseStudies
    .map((study, i) => renderCard(study, i === caseStudies.length - 1))
    .join("");

  return `
    <section class="w-full bg-obsidian-base py-space-4xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop" id="case-studies">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl gap-space-lg">
          <div>
            <div class="font-label-uppercase text-label-uppercase text-primary uppercase mb-space-xs tracking-widest">Selected Past Works // High Performance Media</div>
            <h2 class="font-headline-lg text-headline-lg text-parchment-text">Master Case Studies</h2>
          </div>
          <div class="max-w-md">
            <p class="font-body-md text-body-md text-stone-muted">
              Deconstructing multi-million view short-form editing sequences, emotional contestant arcs, and viral retention engineering across Instagram Reels &amp; TikTok.
            </p>
          </div>
        </div>
        ${cards}
      </div>
    </section>`;
}
