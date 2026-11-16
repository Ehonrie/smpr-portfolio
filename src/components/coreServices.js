function renderService(service) {
  return `
    <div class="bg-charcoal-surface p-space-xl flex flex-col justify-between hover:bg-surface-container-low transition-colors group border border-black/5">
      <div>
        <div class="flex items-center justify-between mb-space-lg">
          <span class="font-label-uppercase text-label-uppercase text-primary">SERVICE // ${service.number}</span>
          <span class="material-symbols-outlined text-stone-muted group-hover:text-primary transition-colors">${service.icon}</span>
        </div>
        <h3 class="font-headline-md text-[26px] leading-tight text-parchment-text mb-space-sm">${service.title}</h3>
        <p class="font-body-md text-body-md text-stone-muted">${service.description}</p>
      </div>
      <div class="pt-space-md border-t border-black/5 mt-space-md">
        <span class="font-label-uppercase text-[11px] text-secondary">${service.tags}</span>
      </div>
    </div>`;
}

function renderService10(service10) {
  return `
    <div class="bg-charcoal-surface p-space-xl flex flex-col justify-between hover:bg-surface-container-low transition-colors group border border-black/5 md:col-span-2 lg:col-span-3">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
        <div class="md:col-span-8">
          <div class="flex items-center gap-space-sm mb-space-xs">
            <span class="font-label-uppercase text-label-uppercase text-primary">SERVICE // 10</span>
            <span class="material-symbols-outlined text-primary">insights</span>
          </div>
          <h3 class="font-headline-md text-[26px] leading-tight text-parchment-text mb-space-xs">${service10.title}</h3>
          <p class="font-body-md text-body-md text-stone-muted">${service10.description}</p>
        </div>
        <div class="md:col-span-4 flex md:justify-end">
          <a class="bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-parchment-text font-label-uppercase text-label-uppercase uppercase px-space-lg py-3 transition-colors text-center w-full md:w-auto" href="#contact">${service10.cta}</a>
        </div>
      </div>
    </div>`;
}

export function renderCoreServices(services, service10) {
  const cards = services.map(renderService).join("") + renderService10(service10);

  return `
    <section class="w-full bg-obsidian-base py-space-4xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop" id="core-services">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl gap-space-lg">
          <div>
            <div class="font-label-uppercase text-label-uppercase text-primary uppercase mb-space-xs tracking-widest">End-to-End Media Studio // Full Agency Suite</div>
            <h2 class="font-headline-lg text-headline-lg text-parchment-text">Core Services</h2>
          </div>
          <div class="max-w-md">
            <p class="font-body-md text-body-md text-stone-muted">
              Specialized short-form video production, editing, growth architecture, and digital campaign execution tailored for peak engagement.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">${cards}</div>
      </div>
    </section>`;
}
