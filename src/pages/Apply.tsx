/* ═══════════════════════════════════════════════════════
   MDAC GLOBAL DESIGN SYSTEM
   Import this file once in your root layout/App entry.
   Usage: style={{ color: 'var(--heading)' }}
          className="bg-gradient-cta text-white"
   ═══════════════════════════════════════════════════════ */

/* ——— Google Fonts ——— */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

/* ═══════════════════════════════════════════════════════
   1. CSS CUSTOM PROPERTIES
   ═══════════════════════════════════════════════════════ */
:root {
  /* ——— Typography ——— */
  --font-heading: 'Outfit', system-ui, -apple-system, sans-serif;
  --font-body: 'Outfit', system-ui, -apple-system, sans-serif;

  /* ——— Text Colors ——— */
  --heading: #2D4A6F;
  --heading-strong: #1E3A5F;
  --subheading: #3D5A80;
  --body: #8196AE;
  --body-strong: #4B6A8F;
  --muted: #8DA2B8;
  --faint: #A3B5CB;
  --whisper: #B8C7D8;

  /* ——— Brand / Accent ——— */
  --accent-blue: #4B7BE5;
  --accent-indigo: #6366F1;
  --accent-indigo-deep: #4338CA;
  --accent-indigo-light: #818CF8;
  --accent-purple: #8B5CF6;
  --accent-amber: #E8883C;
  --accent-green: #10B981;
  --accent-yellow: #F59E0B;

  /* ——— CTA Gradient ——— */
  --cta-from: #4338CA;
  --cta-via: #6366F1;
  --cta-to: #818CF8;
  --cta-gradient: linear-gradient(135deg, var(--cta-from), var(--cta-via), var(--cta-to));
  --cta-shadow: 0 8px 30px rgba(99, 102, 241, 0.3), 0 2px 8px rgba(67, 56, 202, 0.2);
  --cta-shadow-hover: 0 12px 40px rgba(99, 102, 241, 0.4), 0 4px 12px rgba(67, 56, 202, 0.25);

  /* ——— Surface / Background ——— */
  --bg-white: #FFFFFF;
  --bg-snow: #F8FAFF;
  --bg-ice: #F0F4FF;
  --bg-frost: #F6F8FF;
  --bg-section: linear-gradient(180deg, #FFFFFF 0%, #F6F9FF 40%, #F0F4FF 70%, #F8FAFF 100%);
  --bg-hero: linear-gradient(170deg, #FFFFFF 0%, #F8FAFF 20%, #F0F4FF 50%, #F6F8FF 80%, #FFFFFF 100%);

  /* ——— Card Colors (per-step / per-feature) ——— */
  --card-blue-bg: linear-gradient(135deg, #EEF4FF, #E8EEFF);
  --card-blue-border: #DBEAFE;
  --card-blue-color: #4B7BE5;

  --card-purple-bg: linear-gradient(135deg, #F3F0FF, #EDE8FF);
  --card-purple-border: #EDE9FE;
  --card-purple-color: #8B5CF6;

  --card-amber-bg: linear-gradient(135deg, #FFF6ED, #FFF0E2);
  --card-amber-border: #FEEFC3;
  --card-amber-color: #E8883C;

  --card-green-bg: linear-gradient(135deg, #ECFDF5, #E2FBF0);
  --card-green-border: #D1FAE5;
  --card-green-color: #10B981;

  /* ——— Borders ——— */
  --border-light: #E8EFF8;
  --border-default: #DCE6F2;
  --border-soft: #E5EDF6;
  --border-badge: #DBEAFE;

  /* ——— Badge / Pill ——— */
  --badge-bg: #EEF4FF;
  --badge-border: #DBEAFE;
  --badge-color: #4B7BE5;

  /* ——— Shadows ——— */
  --shadow-xs: 0 1px 3px rgba(45, 74, 111, 0.03);
  --shadow-sm: 0 2px 8px rgba(75, 123, 229, 0.04);
  --shadow-md: 0 4px 24px rgba(75, 123, 229, 0.06), 0 1px 3px rgba(45, 74, 111, 0.03);
  --shadow-lg: 0 8px 40px rgba(75, 123, 229, 0.08), 0 2px 8px rgba(45, 74, 111, 0.04);
  --shadow-xl: 0 12px 48px rgba(75, 123, 229, 0.1);

  /* ——— Radius ——— */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}


/* ═══════════════════════════════════════════════════════
   2. BASE / RESET
   ═══════════════════════════════════════════════════════ */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  color: var(--body);
  background: var(--bg-white);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--heading);
  line-height: 1.15;
}


/* ═══════════════════════════════════════════════════════
   3. UTILITY CLASSES
   ═══════════════════════════════════════════════════════ */

/* ——— Text gradient (for "Malaysia", "MDAC", feature words) ——— */
.text-gradient {
  background-image: var(--cta-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ——— CTA Button ——— */
.btn-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: var(--radius-full);
  background: var(--cta-gradient);
  color: #FFFFFF;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  box-shadow: var(--cta-shadow);
  transition: all 0.2s ease;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--cta-shadow-hover);
}

.btn-cta:active {
  transform: translateY(0);
}

/* ——— Section badge / pill ——— */
.badge-section {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-full);
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  color: var(--badge-color);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* ——— Section backgrounds ——— */
.bg-section {
  background: var(--bg-section);
}

.bg-hero {
  background: var(--bg-hero);
}

/* ——— Card base ——— */
.card-base {
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  transition: all 0.2s ease;
}

.card-base:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* ——— Colored cards ——— */
.card-blue {
  background: var(--card-blue-bg);
  border: 1px solid var(--card-blue-border);
}

.card-purple {
  background: var(--card-purple-bg);
  border: 1px solid var(--card-purple-border);
}

.card-amber {
  background: var(--card-amber-bg);
  border: 1px solid var(--card-amber-border);
}

.card-green {
  background: var(--card-green-bg);
  border: 1px solid var(--card-green-border);
}

/* ——— Icon container ——— */
.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-white);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.icon-box-sm {
  width: 1.75rem;
  height: 1.75rem;
}

.icon-box-md {
  width: 2.25rem;
  height: 2.25rem;
}

.icon-box-lg {
  width: 2.75rem;
  height: 2.75rem;
}


/* ═══════════════════════════════════════════════════════
   4. TAILWIND THEME EXTENSION (for tailwind.config)
   
   If using Tailwind, paste these into your config's
   `extend` block to make them available as utilities.
   
   theme: {
     extend: {
       colors: {
         'heading':       '#2D4A6F',
         'subheading':    '#3D5A80',
         'body-text':     '#8196AE',
         'body-strong':   '#4B6A8F',
         'muted-text':    '#8DA2B8',
         'faint':         '#A3B5CB',
         'accent-blue':   '#4B7BE5',
         'accent-indigo': '#6366F1',
         'accent-purple': '#8B5CF6',
         'accent-amber':  '#E8883C',
         'accent-green':  '#10B981',
         'border-soft':   '#E8EFF8',
         'border-mid':    '#DCE6F2',
         'badge-bg':      '#EEF4FF',
       },
       fontFamily: {
         heading: ['Outfit', 'system-ui', 'sans-serif'],
         body:    ['Outfit', 'system-ui', 'sans-serif'],
       },
       backgroundImage: {
         'gradient-cta':    'linear-gradient(135deg, #4338CA, #6366F1, #818CF8)',
         'gradient-hero':   'linear-gradient(170deg, #FFFFFF 0%, #F8FAFF 20%, #F0F4FF 50%, #F6F8FF 80%, #FFFFFF 100%)',
         'gradient-section':'linear-gradient(180deg, #FFFFFF 0%, #F6F9FF 40%, #F0F4FF 70%, #F8FAFF 100%)',
       },
       boxShadow: {
         'cta':     '0 8px 30px rgba(99,102,241,0.3), 0 2px 8px rgba(67,56,202,0.2)',
         'cta-hover':'0 12px 40px rgba(99,102,241,0.4), 0 4px 12px rgba(67,56,202,0.25)',
         'soft':    '0 4px 24px rgba(75,123,229,0.06), 0 1px 3px rgba(45,74,111,0.03)',
         'elegant': '0 8px 40px rgba(75,123,229,0.08), 0 2px 8px rgba(45,74,111,0.04)',
       },
     },
   }
   ═══════════════════════════════════════════════════════ */