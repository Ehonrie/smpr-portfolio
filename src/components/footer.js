export function renderFooter(navLinks) {
  const links = navLinks
    .map(
      ({ label, href }) =>
        `<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="${href}">${label}</a>`
    )
    .join("");

  return `
    <footer class="w-full bg-charcoal-surface py-space-3xl border-t border-black/5">
      <div class="w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-[1440px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop mb-space-2xl">
          <div class="md:col-span-4 flex flex-col gap-space-sm">
            <div class="flex items-baseline gap-space-xs">
              <span class="font-headline-sm text-headline-sm text-parchment-text">SM PR GROUP</span>
            </div>
            <p class="font-body-sm text-body-sm text-stone-muted max-w-sm">A high-performance media studio specializing in clipping, short-form editing, and content promotion across TV, Animation, Music, Comedy, Influencers, and Brands.</p>
          </div>
          <div class="md:col-span-2 flex flex-col gap-space-xs">
            <span class="font-label-uppercase text-label-uppercase text-stone-muted uppercase tracking-wider mb-space-xs">Navigation</span>
            ${links}
          </div>
          <div class="md:col-span-3 flex flex-col gap-space-xs">
            <span class="font-label-uppercase text-label-uppercase text-stone-muted uppercase tracking-wider mb-space-xs">Locations</span>
            <div class="flex flex-col gap-space-2xs font-body-sm text-body-sm text-on-surface-variant">
              <div><span class="text-parchment-text font-medium">Toronto</span> — Canada</div>
              <div><span class="text-parchment-text font-medium">Aberdeen</span> — Scotland, UK</div>
              <div class="text-stone-muted mt-1">Global remote production &amp; clipping units</div>
            </div>
          </div>
          <div class="md:col-span-3 flex flex-col gap-space-xs">
            <span class="font-label-uppercase text-label-uppercase text-stone-muted uppercase tracking-wider mb-space-xs">Campaign Inquiries</span>
            <a class="font-body-sm text-body-sm text-primary hover:text-amber-highlight transition-colors" href="mailto:smprgroup.ig@gmail.com">smprgroup.ig@gmail.com</a>
            <span class="font-body-sm text-body-sm text-stone-muted">Verified Campaign Reach: 200,000,000+</span>
            <div class="mt-space-sm">
              <a class="inline-block font-label-uppercase text-label-uppercase text-primary hover:text-amber-highlight transition-colors uppercase" href="#contact">Start a Campaign →</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between pt-space-lg gap-space-md font-label-uppercase text-label-uppercase text-stone-muted uppercase border-t border-black/5">
          <p>© 2025 SM PR Group &amp; S&amp;C Media. All Rights Reserved.</p>
          <div class="flex items-center gap-space-lg">
            <a class="hover:text-on-surface transition-colors" href="#">Clipping Rights</a>
            <a class="hover:text-on-surface transition-colors" href="#">Terms of Service</a>
            <a class="hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>`;
}
