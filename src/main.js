import "./styles/main.css";

import {
  navLinks,
  tickerItems,
  caseStudies,
  metricsRows,
  highlightCards,
  services,
  service10,
} from "./data/content.js";

import { renderHeader } from "./components/header.js";
import { renderStatusBar } from "./components/statusBar.js";
import { renderHero } from "./components/hero.js";
import { renderTicker } from "./components/ticker.js";
import { renderCaseStudies } from "./components/caseStudies.js";
import { renderReelInsights } from "./components/reelInsights.js";
import { renderCoreServices } from "./components/coreServices.js";
import { renderContact } from "./components/contact.js";
import { renderPitchModal } from "./components/pitchModal.js";
import { renderFooter } from "./components/footer.js";

function render() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderHeader(navLinks)}
    <main class="w-full pt-20 bg-obsidian-base">
      <div class="flex flex-col w-full">
        ${renderStatusBar()}
        ${renderHero()}
        ${renderTicker(tickerItems)}
        ${renderCaseStudies(caseStudies)}
        ${renderReelInsights(metricsRows, highlightCards)}
        ${renderCoreServices(services, service10)}
        ${renderContact()}
        ${renderPitchModal()}
      </div>
    </main>
    ${renderFooter(navLinks)}
  `;
}

function setMobileMenuOpen(isOpen) {
  const menu = document.getElementById("mobile-menu");
  const toggle = document.querySelector('[data-action="toggle-mobile-menu"]');
  const icon = toggle?.querySelector("[data-mobile-menu-icon]");
  if (!menu || !toggle) return;

  menu.classList.toggle("hidden", !isOpen);
  menu.classList.toggle("flex", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  if (icon) icon.textContent = isOpen ? "close" : "menu";
}

function initInteractions() {
  document.body.addEventListener("click", (event) => {
    if (event.target.closest('[data-action="open-pitch-modal"]')) {
      document.getElementById("brief-modal")?.classList.remove("hidden");
    }

    if (event.target.closest('[data-action="close-pitch-modal"]')) {
      document.getElementById("brief-modal")?.classList.add("hidden");
    }

    if (event.target.closest('[data-action="toggle-mobile-menu"]')) {
      const menu = document.getElementById("mobile-menu");
      setMobileMenuOpen(Boolean(menu?.classList.contains("hidden")));
    }

    if (event.target.closest('[data-action="close-mobile-menu"]')) {
      setMobileMenuOpen(false);
    }
  });

  document.body.addEventListener("submit", (event) => {
    const form = event.target;

    if (form.matches('[data-form="campaign-brief"]')) {
      event.preventDefault();
      alert("Campaign brief received. A Senior Producer will review your footage specs within 24 hours.");
    }

    if (form.matches('[data-form="pitch-deck"]')) {
      event.preventDefault();
      alert("Deck link transmitted to your email.");
      document.getElementById("brief-modal")?.classList.add("hidden");
    }
  });
}

render();
initInteractions();
