function renderRow(row) {
  return `
    <tr class="hover:bg-surface-container/50 transition-colors">
      <td class="p-space-md font-medium text-parchment-text flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full ${row.dot}"></span>${row.name}</td>
      <td class="p-space-md text-stone-muted font-label-uppercase text-[11px]">${row.genre}</td>
      <td class="p-space-md text-right font-mono text-primary font-semibold">${row.views}</td>
      <td class="p-space-md text-right font-mono text-secondary">${row.reached}</td>
      <td class="p-space-md text-right font-mono text-parchment-text">${row.watch}</td>
      <td class="p-space-md text-right font-mono text-primary">${row.follows}</td>
      <td class="p-space-md text-right font-mono text-secondary">${row.skip}</td>
    </tr>`;
}

function renderHighlightCard(card) {
  return `
    <div class="bg-charcoal-surface p-space-md border border-black/5">
      <div class="font-label-uppercase text-[10px] text-stone-muted uppercase">${card.label}</div>
      <div class="font-headline-sm text-headline-sm text-parchment-text mt-1">${card.title}</div>
      <div class="font-mono ${card.valueColor} text-lg font-semibold mt-1">${card.value}</div>
      <p class="font-body-sm text-stone-muted text-[12px] mt-1">${card.description}</p>
    </div>`;
}

export function renderReelInsights(metricsRows, highlightCards) {
  const rows = metricsRows.map(renderRow).join("");
  const cards = highlightCards.map(renderHighlightCard).join("");

  return `
    <section class="w-full bg-surface-container-lowest py-space-4xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-y border-black/5" id="reel-insights">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl gap-space-lg">
          <div>
            <div class="font-label-uppercase text-label-uppercase text-primary uppercase mb-space-xs tracking-widest">Audited Analytics &amp; Reel Insights</div>
            <h2 class="font-headline-lg text-headline-lg text-parchment-text">Verified Performance Metrics</h2>
          </div>
          <div class="max-w-md">
            <p class="font-body-md text-body-md text-stone-muted">
              Directly from our campaign dashboards. Verified watch time, retention depth, and account conversion across major entertainment franchises.
            </p>
          </div>
        </div>
        <div class="bg-charcoal-surface overflow-hidden border border-black/5">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-black/10 bg-surface-container-low font-label-uppercase text-label-uppercase text-stone-muted">
                  <th class="p-space-md">Campaign / Title</th>
                  <th class="p-space-md">Genre / Category</th>
                  <th class="p-space-md text-right">Reel Views</th>
                  <th class="p-space-md text-right">Accounts Reached</th>
                  <th class="p-space-md text-right">Avg Watch Time</th>
                  <th class="p-space-md text-right">Follows</th>
                  <th class="p-space-md text-right">Skip Rate</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-black/5 font-body-sm">${rows}</tbody>
            </table>
          </div>
        </div>
        <div class="mt-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">${cards}</div>
      </div>
    </section>`;
}
