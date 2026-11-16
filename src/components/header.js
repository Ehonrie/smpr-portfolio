export function renderHeader(navLinks) {
  const desktopLinks = navLinks
    .map(({ label, href }, i) => {
      const stateClasses =
        i === 0
          ? "text-on-surface hover:text-primary"
          : "text-on-surface-variant hover:text-on-surface";
      return `<a class="font-label-uppercase text-label-uppercase uppercase px-space-sm py-space-xs ${stateClasses} transition-colors" href="${href}">${label}</a>`;
    })
    .join("");

  const mobileLinks = navLinks
    .map(
      ({ label, href }, i) => `
        <a class="font-label-uppercase text-label-uppercase uppercase py-space-sm border-b border-black/5 ${
          i === 0 ? "text-on-surface" : "text-on-surface-variant"
        } hover:text-primary transition-colors" href="${href}" data-action="close-mobile-menu">${label}</a>`
    )
    .join("");

  return `
    <header class="fixed top-0 left-0 right-0 z-50 bg-obsidian-base/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(15,59,74,0.08)] border-b border-black/5">
      <div class="h-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-[1440px] mx-auto flex items-center justify-between">
        <a class="flex items-baseline gap-space-xs group" href="#">
          <span class="font-headline-sm text-headline-sm tracking-tight text-parchment-text group-hover:text-primary transition-colors">SM PR GROUP</span>
        </a>
        <nav class="hidden lg:flex items-center gap-space-md">${desktopLinks}</nav>
        <div class="flex items-center gap-space-md">
          <a class="hidden sm:inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary-container font-label-uppercase text-label-uppercase uppercase px-space-lg py-space-sm transition-all tracking-wider font-semibold" href="#contact">Start Campaign</a>
          <div class="hidden lg:flex flex-col text-right font-label-uppercase text-[10px] text-stone-muted">
            <span class="text-parchment-text">TORONTO · ABERDEEN</span>
            <span class="text-secondary">smprgroup.ig@gmail.com</span>
          </div>
          <button
            class="lg:hidden flex items-center justify-center w-10 h-10 text-parchment-text hover:text-primary transition-colors"
            data-action="toggle-mobile-menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span class="material-symbols-outlined" data-mobile-menu-icon>menu</span>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden lg:hidden flex-col bg-obsidian-base border-t border-black/5 px-margin-mobile py-space-sm">
        ${mobileLinks}
        <a class="mt-space-sm inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary-container font-label-uppercase text-label-uppercase uppercase px-space-lg py-space-sm transition-all tracking-wider font-semibold" href="#contact" data-action="close-mobile-menu">Start Campaign</a>
      </div>
    </header>`;
}
