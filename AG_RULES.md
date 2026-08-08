# ANTIGRAVITY AGENT RULES - Sapanca Vista Project

1. IMMUTABLE DESIGN & MOTION:
   - All motion/animation logic MUST use `framer-motion`.
   - Primary physics config: `type: "spring", stiffness: 300, damping: 25`.
   - Do NOT invent custom inline styles. Rely strictly on Tailwind CSS tokens.

2. COMPONENT ARCHITECTURE:
   - Keep UI components presentational and type-safe.
   - Separate data logic into `constants/` or hooks.

3. VISUAL STYLE:
   - Theme: Premium Nature & Luxury.
   - Backgrounds: Dark slate/emerald accents, glassmorphism (`backdrop-blur-md bg-white/10` or `bg-slate-900/80`).
   - Fonts: Sans-serif (Inter/Geist) with elegant serif headers if applicable.
