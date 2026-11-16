export function renderContact() {
  return `
    <section class="w-full bg-surface-container-lowest py-space-4xl px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative overflow-hidden border-t border-black/5" id="contact">
      <div class="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="max-w-[1440px] mx-auto bg-charcoal-surface p-space-2xl md:p-space-3xl relative border border-black/5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 text-primary font-label-uppercase text-label-uppercase tracking-widest uppercase mb-space-sm">
              <span class="w-2 h-2 bg-primary"></span>
              <span>Start a Clipping &amp; Promotion Campaign</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-parchment-text mb-space-md">
              Ready to Drive Viral Visibility Across Your Content?
            </h2>
            <p class="font-body-lg text-body-lg text-stone-muted max-w-xl mb-space-xl">
              Whether you are launching a network TV series, streaming title, music project, or brand initiative, our clipping units deliver measurable retention and massive reach.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs font-label-uppercase text-[11px] text-stone-muted">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[16px]">location_on</span>
                <span>Toronto · Aberdeen</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[16px]">bolt</span>
                <span>Fast Turnaround Cuts</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[16px]">verified</span>
                <span>200M+ Audited Proof</span>
              </div>
            </div>
            <div class="mt-space-lg flex items-center gap-2 text-stone-muted font-body-sm">
              <span class="material-symbols-outlined text-primary">mail</span>
              <span>Direct Studio Desk: <a class="text-primary hover:underline" href="mailto:smprgroup.ig@gmail.com">smprgroup.ig@gmail.com</a></span>
            </div>
          </div>
          <div class="lg:col-span-5 bg-surface-container-low p-space-xl flex flex-col gap-space-md border border-black/5">
            <div class="font-label-uppercase text-label-uppercase text-stone-muted uppercase tracking-wider">
              Initiate Project Brief
            </div>
            <form class="flex flex-col gap-space-sm" data-form="campaign-brief">
              <div>
                <label class="block font-label-uppercase text-[10px] text-stone-muted uppercase mb-1">Brand / Artist / Creator Name</label>
                <input class="w-full bg-charcoal-surface text-parchment-text px-4 py-3 font-body-sm focus:outline-none focus:bg-surface-container transition-colors border border-black/5" placeholder="e.g. Paramount / Universal / Independent Artist" required type="text" />
              </div>
              <div>
                <label class="block font-label-uppercase text-[10px] text-stone-muted uppercase mb-1">Contact Email</label>
                <input class="w-full bg-charcoal-surface text-parchment-text px-4 py-3 font-body-sm focus:outline-none focus:bg-surface-container transition-colors border border-black/5" placeholder="producer@studio.com" required type="email" />
              </div>
              <div>
                <label class="block font-label-uppercase text-[10px] text-stone-muted uppercase mb-1">Primary Campaign Objective</label>
                <select class="w-full bg-charcoal-surface text-parchment-text px-4 py-3 font-body-sm focus:outline-none focus:bg-surface-container transition-colors border border-black/5">
                  <option>Video Editing &amp; Clipping Unit</option>
                  <option>Instagram Ads &amp; Audience Growth</option>
                  <option>Full Social Media Management</option>
                  <option>Multi-Platform Promotion (Music / TV / Brand)</option>
                </select>
              </div>
              <button class="mt-space-xs w-full bg-primary-container hover:bg-primary text-on-primary-container font-label-uppercase text-label-uppercase uppercase py-4 transition-all tracking-wider font-semibold" type="submit">
                Submit Campaign Request →
              </button>
            </form>
            <div class="text-center font-label-uppercase text-[10px] text-stone-muted">
              Direct Inquiries: <a class="text-primary hover:underline" href="mailto:smprgroup.ig@gmail.com">smprgroup.ig@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}
