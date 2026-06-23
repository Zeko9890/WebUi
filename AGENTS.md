<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:mobile-generation-system-overhaul -->
# MOBILE GENERATION SYSTEM OVERHAUL

**Current behavior to avoid:**
Desktop layouts being compressed into narrow widths, creating unusable mobile designs. The generator must stop shrinking desktop layouts.

**NEW RULE:**
Generate mobile layouts separately. Do not derive mobile by scaling desktop.

**MOBILE REQUIREMENTS:**
* Single column first
* Stack cards vertically
* Stack CTAs vertically when needed
* Reduce headline size
* Increase tap targets
* Maintain readable spacing
* Prevent text overflow
* Prevent card squeezing

**RESPONSIVE DESIGN RULE:**
* Desktop: Design for desktop.
* Tablet: Design for tablet.
* Mobile: Design specifically for mobile.
Each breakpoint must have its own layout logic.

**QUALITY CHECK:**
Reject generated layouts where:
* text wraps vertically
* words break unnaturally
* cards become too narrow
* buttons overlap
* content is cut off

If detected: Automatically regenerate mobile layout.
<!-- END:mobile-generation-system-overhaul -->
