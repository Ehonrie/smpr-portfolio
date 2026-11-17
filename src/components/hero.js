export function renderHero() {
  return `
    <section class="relative w-full bg-obsidian-base pt-space-xl md:pt-space-2xl pb-space-3xl md:pb-space-4xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop overflow-hidden">
      <div class="absolute -top-40 right-1/4 w-[580px] h-[580px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
        <div class="lg:col-span-8 flex flex-col">
          <div class="inline-flex items-center gap-space-xs mb-space-md self-start bg-charcoal-surface px-3 py-1 border border-black/5">
            <span class="w-2 h-2 bg-primary"></span>
            <span class="font-label-uppercase text-label-uppercase text-primary uppercase">CLIPPING &amp; CONTENT PROMOTION CAMPAIGNS · 200,000,000+ TOTAL VIEWS</span>
          </div>
          <h1 class="font-headline-display text-headline-lg-mobile sm:text-headline-display-mobile md:text-headline-lg lg:text-headline-display text-parchment-text mb-space-lg max-w-4xl tracking-tight break-words">
            Driving Visibility, Engagement &amp; Viral Reach Across Entertainment.
          </h1>
          <p class="font-subheading-lg text-[16px] leading-[26px] md:text-subheading-lg text-stone-muted max-w-2xl mb-space-xl md:mb-space-2xl">
            SM PR Group &amp; S&amp;C Media is a high-performance media studio specializing in clipping, short-form editing, and content promotion. We drive explosive visibility across TV, Animation, Music, Comedy, Influencers, and Brands.
          </p>
          <div class="flex flex-wrap items-center gap-space-md">
            <a class="bg-primary-container text-on-primary-container font-label-uppercase text-label-uppercase uppercase px-space-xl py-4 transition-transform hover:-translate-y-0.5 font-semibold tracking-wider" href="#case-studies">
              Explore Past Campaigns
            </a>
            <button class="bg-transparent text-parchment-text hover:text-primary font-label-uppercase text-label-uppercase uppercase px-space-lg py-4 transition-colors flex items-center gap-2 group border border-black/10 hover:border-primary/40" data-action="open-pitch-modal">
              <span>Download Pitch Deck (PDF)</span>
              <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        <div class="lg:col-span-4 mt-space-xl lg:mt-0">
          <div class="bg-charcoal-surface p-space-lg flex flex-col gap-space-lg relative border border-black/5 shadow-2xl">
            <div class="flex items-baseline justify-between pb-space-sm bg-surface-container-low px-space-sm py-space-xs">
              <span class="font-label-uppercase text-label-uppercase text-secondary uppercase">Verified Performance</span>
              <span class="font-label-uppercase text-label-uppercase text-stone-muted">PORTFOLIO AUDIT</span>
            </div>
            <div class="grid grid-cols-1 gap-space-md">
              <div class="bg-surface-container-low p-space-md">
                <div class="font-headline-display text-[40px] md:text-[52px] leading-none text-primary mb-1">200M+</div>
                <div class="font-label-uppercase text-label-uppercase text-parchment-text">Total Campaign Views Delivered</div>
                <div class="font-body-sm text-body-sm text-stone-muted mt-1">Short-form distribution &amp; clipping syndication</div>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="bg-surface-container-low p-space-md">
                  <div class="font-headline-md text-[24px] md:text-headline-md text-secondary leading-none mb-1">5.8M+</div>
                  <div class="font-label-uppercase text-label-uppercase text-stone-muted text-[10px]">S&amp;C Clipping Views</div>
                </div>
                <div class="bg-surface-container-low p-space-md">
                  <div class="font-headline-md text-[24px] md:text-headline-md text-secondary leading-none mb-1">10M+</div>
                  <div class="font-label-uppercase text-label-uppercase text-stone-muted text-[10px]">Organic TV Reach</div>
                </div>
              </div>
              <div class="bg-surface-container-low p-space-md flex items-center justify-between">
                <div>
                  <span class="font-label-uppercase text-label-uppercase text-primary block">Category Authority</span>
                  <span class="font-body-sm text-body-sm text-parchment-text">TV, Animation, Music &amp; Comedy</span>
                </div>
                <span class="material-symbols-outlined text-primary text-[28px]">verified</span>
              </div>
            </div>
            <div class="pt-space-xs">
              <div class="flex items-center justify-between text-[11px] font-label-uppercase text-stone-muted mb-2">
                <span>VIRAL CLIP VELOCITY RETENTION</span>
                <span class="text-primary">+88.7% HOOK RATE</span>
              </div>
              <svg class="w-full h-8 text-primary overflow-visible" fill="none" viewBox="0 0 280 32">
                <path d="M0 28 L35 22 L70 24 L105 14 L140 16 L175 9 L210 11 L245 4 L280 2" stroke="currentColor" stroke-linecap="square" stroke-width="2"></path>
                <path d="M0 28 L35 22 L70 24 L105 14 L140 16 L175 9 L210 11 L245 4 L280 2 V 32 H 0 Z" fill="currentColor" fill-opacity="0.08"></path>
                <circle class="fill-primary" cx="280" cy="2" r="3"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}
