# ANKA premium card-led redesign

## What will change
- Rework the home page into a cinematic, card-led experience inspired by the reference site while retaining ANKA’s green, gold, ink, and cream identity.
- Refine the opening area with immersive security imagery, concise ANKA messaging, and restrained controls.
- Replace the current uniform service grid with larger mixed-size feature cards that combine imagery, service labels, short outcomes, and clear links.
- Consolidate the long home page into fewer, more purposeful sections so visitors reach key information faster.
- Restyle the “More about ANKA,” operations, technology, and industry content into a coherent editorial card system with subtle motion and mobile-friendly stacking.
- Add the five supplied client marks to the right-to-left “Trusted on the ground” carousel, preserving their original artwork and allowing more logos to be added later.

## Visual direction
- Cinematic photography remains authentic, Ugandan, premium, and face-obscured.
- Rounded corners will be controlled and consistent rather than pill-heavy.
- Motion will be limited to image drift, card reveals, carousel movement, and small hover responses, with reduced-motion support.
- No gradient text, decorative blobs, polka dots, or oversized typography.

## Technical details
- Upload the supplied client logos through the project asset flow and reference their CDN pointers.
- Keep the current responsive navigation, accessibility landmarks, SSR setup, semantic headings, route metadata, and internal links.
- Use the existing semantic design tokens and shared components; add only the tokens/utilities needed for the new cards.
- Validate desktop and phone layouts, horizontal overflow, card legibility, image loading, carousel behavior, and browser console errors.
