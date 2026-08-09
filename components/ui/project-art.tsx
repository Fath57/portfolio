import type { ReactNode } from "react";

/* Illustrations schématiques par projet : une fenêtre d'app stylisée dont le
   contenu évoque le métier du projet. Dessinées avec les tokens du thème,
   elles suivent le mode clair/sombre sans variante. Décoratives (aria-hidden). */

const ink = "var(--color-ink-faint)";
const border = "var(--color-border)";
const borderStrong = "var(--color-border-strong)";
const surface = "var(--color-surface)";
const surface2 = "var(--color-surface-2)";
const accent = "var(--color-accent)";
const accentSoft = "var(--color-accent-soft)";
const accentLine = "var(--color-accent-line)";
const success = "var(--color-success)";

// Fenêtre commune : cadre arrondi + barre de titre, coupée en bas du cadre.
function Frame({ children }: { children: ReactNode }) {
  return (
    <>
      <rect x="24" y="18" width="352" height="188" rx="10" fill={surface} stroke={borderStrong} />
      <line x1="24" y1="44" x2="376" y2="44" stroke={border} />
      <circle cx="42" cy="31" r="3.5" fill={borderStrong} />
      <circle cx="56" cy="31" r="3.5" fill={borderStrong} />
      <circle cx="70" cy="31" r="3.5" fill={borderStrong} />
      {children}
    </>
  );
}

function Satis() {
  return (
    <Frame>
      {/* File de réclamations */}
      {[58, 88, 118, 148].map((y, i) => (
        <g key={y}>
          <circle cx="52" cy={y + 10} r="4.5" fill={i === 1 ? accent : surface2} stroke={i === 1 ? accent : borderStrong} />
          <rect x="66" y={y + 6} width={i === 1 ? 110 : 90} height="8" rx="4" fill={i === 1 ? accentSoft : surface2} stroke={i === 1 ? accentLine : "none"} />
        </g>
      ))}
      {/* Workflow de traitement */}
      <rect x="212" y="58" width="148" height="118" rx="8" fill={surface2} />
      <line x1="234" y1="78" x2="234" y2="156" stroke={borderStrong} />
      <circle cx="234" cy="78" r="5" fill={accent} />
      <circle cx="234" cy="117" r="5" fill={accent} />
      <circle cx="234" cy="156" r="5" fill={success} />
      <rect x="248" y="74" width="92" height="8" rx="4" fill={surface} />
      <rect x="248" y="113" width="72" height="8" rx="4" fill={surface} />
      <rect x="248" y="152" width="82" height="8" rx="4" fill={surface} />
    </Frame>
  );
}

function DigitImmo() {
  const card = (x: number, y: number, highlight = false) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="100" height="56" rx="6" fill={highlight ? accentSoft : surface2} stroke={highlight ? accentLine : "none"} />
      {/* code-barres d'inventaire */}
      {[14, 20, 25, 31].map((dx) => (
        <line key={dx} x1={x + dx} y1={y + 12} x2={x + dx} y2={y + 30} stroke={highlight ? accent : ink} strokeWidth={dx === 20 ? 3 : 1.5} />
      ))}
      <rect x={x + 14} y={y + 38} width="56" height="6" rx="3" fill={highlight ? accentLine : borderStrong} opacity="0.6" />
    </g>
  );
  return (
    <Frame>
      {card(40, 58)}
      {card(150, 58, true)}
      {card(260, 58)}
      {card(40, 124)}
      {card(150, 124)}
      {card(260, 124)}
    </Frame>
  );
}

function Demenagement() {
  const col = (x: number, cards: { h: number; highlight?: boolean }[]) => {
    let y = 72;
    return (
      <g key={x}>
        <rect x={x} y="58" width="52" height="7" rx="3.5" fill={borderStrong} opacity="0.7" />
        {cards.map((c, i) => {
          const rect = (
            <g key={i}>
              <rect x={x} y={y} width="100" height={c.h} rx="6" fill={c.highlight ? accentSoft : surface2} stroke={c.highlight ? accentLine : "none"} />
              <rect x={x + 10} y={y + 9} width="58" height="6" rx="3" fill={c.highlight ? accentLine : borderStrong} opacity="0.6" />
            </g>
          );
          y += c.h + 8;
          return rect;
        })}
      </g>
    );
  };
  return (
    <Frame>
      {col(40, [{ h: 30 }, { h: 30 }, { h: 30 }])}
      {col(150, [{ h: 40, highlight: true }, { h: 30 }])}
      {col(260, [{ h: 30 }, { h: 40 }])}
    </Frame>
  );
}

function Procar() {
  const bars = [
    { x: 64, h: 42 },
    { x: 122, h: 66 },
    { x: 180, h: 54 },
    { x: 238, h: 92, highlight: true },
    { x: 296, h: 74 },
  ];
  return (
    <Frame>
      <line x1="48" y1="96" x2="352" y2="96" stroke={border} />
      <line x1="48" y1="132" x2="352" y2="132" stroke={border} />
      {bars.map((b) => (
        <rect
          key={b.x}
          x={b.x}
          y={168 - b.h}
          width="30"
          height={b.h}
          rx="4"
          fill={b.highlight ? accent : surface2}
          stroke={b.highlight ? "none" : borderStrong}
        />
      ))}
      <line x1="48" y1="168" x2="352" y2="168" stroke={borderStrong} />
    </Frame>
  );
}

function Fondation() {
  return (
    <Frame>
      {/* Suivi des bénéficiaires */}
      <rect x="40" y="58" width="150" height="118" rx="8" fill={surface2} />
      {[74, 100, 126, 152].map((y, i) => (
        <g key={y}>
          <circle cx="60" cy={y} r="5" fill={i === 0 ? accent : surface} stroke={i === 0 ? "none" : borderStrong} />
          <rect x="74" y={y - 4} width={i === 0 ? 96 : 76} height="8" rx="4" fill={surface} />
        </g>
      ))}
      {/* Indicateur de collecte */}
      <circle cx="285" cy="104" r="30" fill="none" stroke={accentSoft} strokeWidth="10" />
      <circle
        cx="285"
        cy="104"
        r="30"
        fill="none"
        stroke={accent}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="130 190"
        transform="rotate(-90 285 104)"
      />
      <rect x="245" y="150" width="80" height="8" rx="4" fill={surface2} />
    </Frame>
  );
}

function Zibaa() {
  return (
    <Frame>
      {/* Deux produits, deux modules */}
      <rect x="52" y="60" width="180" height="100" rx="8" fill={surface2} />
      <rect x="66" y="74" width="80" height="8" rx="4" fill={borderStrong} opacity="0.6" />
      <rect x="66" y="92" width="120" height="8" rx="4" fill={surface} />
      <rect x="66" y="110" width="100" height="8" rx="4" fill={surface} />
      <rect x="176" y="92" width="174" height="92" rx="8" fill={surface} stroke={accentLine} />
      <rect x="190" y="106" width="70" height="8" rx="4" fill={accent} />
      <rect x="190" y="124" width="120" height="8" rx="4" fill={accentSoft} />
      <rect x="190" y="142" width="96" height="8" rx="4" fill={accentSoft} />
    </Frame>
  );
}

function TickAfrica() {
  const qr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue;
      qr.push(
        <rect key={`${i}${j}`} x={272 + i * 17} y={86 + j * 17} width="11" height="11" rx="2" fill={ink} />
      );
    }
  }
  return (
    <Frame>
      {/* Billet avec talon détachable */}
      <rect x="60" y="62" width="280" height="98" rx="10" fill={surface2} stroke={borderStrong} />
      <line x1="252" y1="72" x2="252" y2="150" stroke={borderStrong} strokeDasharray="5 6" />
      <circle cx="252" cy="62" r="8" fill={surface} stroke={borderStrong} />
      <circle cx="252" cy="160" r="8" fill={surface} stroke={borderStrong} />
      <rect x="80" y="82" width="110" height="9" rx="4.5" fill={borderStrong} opacity="0.7" />
      <rect x="80" y="101" width="80" height="8" rx="4" fill={surface} />
      <rect x="80" y="119" width="60" height="8" rx="4" fill={surface} />
      <rect x="80" y="137" width="44" height="9" rx="4.5" fill={accent} />
      {qr}
      <rect x={272 + 17} y={86 + 17} width="11" height="11" rx="2" fill={accent} />
    </Frame>
  );
}

function Fallback() {
  return (
    <Frame>
      <rect x="40" y="58" width="200" height="10" rx="5" fill={surface2} />
      <rect x="40" y="80" width="320" height="88" rx="8" fill={surface2} />
    </Frame>
  );
}

const artBySlug: Record<string, () => ReactNode> = {
  "satis-gestion-plaintes": Satis,
  "digit-immo": DigitImmo,
  "saas-demenagement": Demenagement,
  "procar-suivi-evaluation": Procar,
  "fondation-claudine-talon": Fondation,
  "zibaa-finplex": Zibaa,
  "tick-africa": TickAfrica,
};

export function ProjectArt({ slug, className }: { slug: string; className?: string }) {
  const Art = artBySlug[slug] ?? Fallback;
  return (
    <svg viewBox="0 0 400 190" aria-hidden="true" className={className}>
      <Art />
    </svg>
  );
}
