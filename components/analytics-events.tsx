"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/* Événements métier envoyés à Vercel Analytics via un écouteur global :
   - cv_telecharge : clic sur un lien vers /cv.pdf (avec l'emplacement)
   - demo_cliquee : clic vers un produit en ligne (tick.africa, demcrm...)
   - contact_email : clic sur un lien mailto */

const demos: Record<string, string> = {
  "tick.africa": "tick-africa",
  "demcrm.com": "demcrm",
  "discover229.com": "discover229",
};

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const emplacement =
        link.closest("section")?.id ||
        (link.closest("header") ? "nav" : link.closest("footer") ? "footer" : "page");

      if (href.includes("/cv.pdf")) {
        track("cv_telecharge", { emplacement });
        return;
      }
      if (href.startsWith("mailto:")) {
        if (href.includes("Demande%20de%20CV")) {
          track("cv_demande_mail", { emplacement });
        } else {
          track("contact_email", { emplacement });
        }
        return;
      }
      for (const [domain, site] of Object.entries(demos)) {
        if (href.includes(domain)) {
          track("demo_cliquee", { site, emplacement });
          return;
        }
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
