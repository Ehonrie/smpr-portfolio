export function renderStatusBar() {
  return `
    <div class="w-full bg-surface-container-lowest py-space-xs px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-b border-black/5">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between font-label-uppercase text-label-uppercase tracking-widest text-stone-muted">
        <div class="flex items-center gap-space-sm">
          <span class="inline-flex items-center gap-1.5 text-primary">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            ACTIVE CAMPAIGN DISPATCH
          </span>
          <span class="hidden sm:inline text-surface-variant">/</span>
          <span class="hidden sm:inline">TORONTO · ABERDEEN // VIRAL REEL VELOCITY</span>
        </div>
        <div class="flex items-center gap-space-lg">
          <span class="hidden md:inline">TV • ANIMATION • MUSIC • COMEDY • INFLUENCERS • BRANDS</span>
          <span class="text-secondary tracking-normal font-mono text-[11px]">200,000,000+ TOTAL VIEWS</span>
        </div>
      </div>
    </div>`;
}
