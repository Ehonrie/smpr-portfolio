export function renderPitchModal() {
  return `
    <div class="hidden fixed inset-0 z-50 flex items-center justify-center bg-obsidian-base/80 backdrop-blur-xl p-4" id="brief-modal">
      <div class="bg-charcoal-surface max-w-xl w-full p-space-xl relative shadow-2xl border border-black/10">
        <button class="absolute top-4 right-4 text-stone-muted hover:text-parchment-text" data-action="close-pitch-modal">
          <span class="material-symbols-outlined">close</span>
        </button>
        <div class="font-label-uppercase text-label-uppercase text-primary uppercase tracking-widest mb-2">Agency Pitch Deck &amp; Rate Card</div>
        <h3 class="font-headline-md text-headline-md text-parchment-text mb-space-sm">SM PR Group &amp; S&amp;C Media Deck</h3>
        <p class="font-body-sm text-body-sm text-stone-muted mb-space-lg">
          Explore full case breakdowns for The Voice, Doc (Hulu), GoPuff, MrBeast, Teddy Swims, and our full clipping deliverables package.
        </p>
        <form class="flex flex-col gap-space-md" data-form="pitch-deck">
          <div>
            <label class="block font-label-uppercase text-[10px] text-stone-muted uppercase mb-1">Company or Production Email</label>
            <input class="w-full bg-surface-container-low text-parchment-text px-4 py-3 font-body-sm focus:outline-none border border-black/5" placeholder="executive@entertainment.com" required type="email" />
          </div>
          <div>
            <label class="block font-label-uppercase text-[10px] text-stone-muted uppercase mb-1">Industry / Entity</label>
            <input class="w-full bg-surface-container-low text-parchment-text px-4 py-3 font-body-sm focus:outline-none border border-black/5" placeholder="TV Network / Record Label / Brand" required type="text" />
          </div>
          <button class="w-full bg-primary-container text-on-primary-container font-label-uppercase text-label-uppercase uppercase py-3 font-semibold tracking-wider hover:bg-primary transition-colors" type="submit">
            Download PDF Pitch Deck
          </button>
        </form>
      </div>
    </div>`;
}
