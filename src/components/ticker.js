function renderStrip(items) {
  return items
    .map(
      (label) => `
        <span class="font-headline-sm text-headline-sm text-parchment-text tracking-wider opacity-80 hover:opacity-100 transition-opacity">${label}</span>
        <span class="w-1.5 h-1.5 rounded-full bg-editorial-bronze"></span>`
    )
    .join("");
}

export function renderTicker(tickerItems) {
  const strip = renderStrip(tickerItems);

  return `
    <section class="w-full bg-surface-container-lowest py-space-xl overflow-hidden select-none border-y border-black/5">
      <div class="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-space-sm flex items-center justify-between">
        <span class="font-label-uppercase text-label-uppercase text-stone-muted uppercase tracking-widest">Featured Client Campaigns &amp; High-Profile Cutdowns</span>
        <span class="font-label-uppercase text-label-uppercase text-primary tracking-widest hidden sm:inline">VIRAL RETENTION PORTFOLIO</span>
      </div>
      <div class="relative w-full flex overflow-x-hidden py-space-sm bg-charcoal-surface">
        <div class="flex items-center gap-space-3xl animate-marquee whitespace-nowrap px-space-md">${strip}</div>
        <div aria-hidden="true" class="flex items-center gap-space-3xl animate-marquee whitespace-nowrap px-space-md">${strip}</div>
      </div>
    </section>`;
}
