<div align="center">
  <h1>🎨 GenUi</h1>
  <p><strong>A Next-Generation Visual Responsive Website Builder powered by AI</strong></p>
</div>

<br />

## 📖 Project Overview

**GenUi** is a powerful, modern visual website builder designed to streamline the web development process. It combines the ease of a drag-and-drop interface with the intelligence of Google's GenAI, allowing developers and designers to instantly generate, customize, and export stunning responsive user interfaces. Whether you're building a landing page from scratch or scaffolding complex UI components, this tool bridges the gap between imagination and production-ready code.

## ✨ Key Features

*   **🪄 AI-Powered UI Generation:** Describe what you need, and the integrated Gemini AI will generate the foundational UI structure.
*   **🖱️ Advanced Drag-and-Drop:** Intuitive visual builder to seamlessly construct layouts without writing code.
*   **📱 Universal Responsiveness:** Preview and edit across multiple breakpoints (Mobile, Tablet, Desktop) effortlessly.
*   **💻 One-Click Code Export:** Export your designs directly to clean, production-ready React (Next.js) & Tailwind CSS code.
*   **🎨 Rich Component Library:** Built-in integration with modern component libraries for rapid prototyping.
*   **⚡ Real-Time Preview:** See your changes exactly as they will appear in the browser instantly.

---

## 📸 Screenshots

> *Note: Replace these placeholders with actual screenshots of your application.*

| Application Builder | Mobile Preview | Code Export |
| :---: | :---: | :---: |
| <img src="https://placehold.co/600x400/18181b/ffffff?text=Visual+Builder+Interface" alt="Visual Builder" width="100%"/> | <img src="https://placehold.co/300x400/18181b/ffffff?text=Mobile+Responsive+View" alt="Mobile View" width="100%"/> | <img src="https://placehold.co/600x400/18181b/ffffff?text=Exported+Code+Preview" alt="Code Export" width="100%"/> |
| *The intuitive drag-and-drop workspace.* | *Pixel-perfect responsive design controls.* | *Clean, accessible React & Tailwind code.* |

---

## 🛠️ Tech Stack

This project is built using bleeding-edge web technologies:

**Core Frameworks:**
*   **[Next.js 16](https://nextjs.org/)** - React framework (App Router)
*   **[React 19](https://react.dev/)** - UI Library
*   **[TypeScript](https://www.typescriptlang.org/)** - Static typing

**Styling & UI:**
*   **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling
*   **[Framer Motion](https://www.framer.com/motion/)** - Fluid micro-animations
*   **[Shadcn UI](https://ui.shadcn.com/)** & **[Base UI](https://base-ui.com/)** - Accessible UI components
*   **[Lucide React](https://lucide.dev/)** - Beautiful iconography

**AI & Backend Services:**
*   **[Google GenAI SDK](https://ai.google.dev/)** - Core AI engine for UI generation
*   **[Upstash Redis](https://upstash.com/)** - Serverless database for rate-limiting & caching

---

## 🏗️ Architecture Overview

The application follows a modern client-server architecture optimized for real-time rendering:

1.  **Canvas Engine:** A robust React-based rendering engine that maintains the virtual DOM of the user's design. It manages a hierarchical tree of components.
2.  **State Management:** Complex application state (selected elements, current breakpoints, drag states) is handled efficiently to ensure a lag-free builder experience.
3.  **AI Integration Layer:** Secure server actions communicate with the Google GenAI API to translate natural language prompts into structural UI schemas.
4.  **Code Generator:** A specialized module that traverses the canvas state tree and compiles it into semantic React code and Tailwind utility classes.

---

## 📱 Responsiveness Features

Building responsive sites is treated as a first-class citizen:

*   **Viewport Toggles:** Instantly switch between mobile, tablet, and desktop views within the builder.
*   **Breakpoint-Specific Styling:** Apply styles (e.g., margins, font sizes, display properties) that only affect the currently selected viewport size.
*   **Fluid Layouts:** Uses modern CSS features (Flexbox, Grid) natively to ensure components resize gracefully between specific breakpoints.

---

## 📤 Export System

The export system guarantees that the visual designs translate to developer-friendly code:

*   **Clean Output:** Generates standard `tsx` files without proprietary builder lock-in.
*   **Tailwind Integration:** Automatically converts visual styling choices into optimized Tailwind CSS utility classes.
*   **Component Splitting:** Intelligently breaks down massive pages into reusable React components.
*   **Copy to Clipboard / Download:** Instantly grab a single component's code or download the entire project structure as a `.zip` archive.

---

## 🖱️ Drag-and-Drop System

The visual builder features a highly responsive drag-and-drop mechanism:

*   **Visual Indicators:** Clear drop zones and insertion markers guide the user when nesting components.
*   **Reordering:** Easily reorder siblings within a container via drag handles.
*   **Canvas & Sidebar Dragging:** Drag new components from the sidebar directly onto the canvas, or move existing components within the canvas itself.

---

## 🚀 Setup Instructions

Follow these steps to run the builder locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd ai_ui_generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your API keys:
   ```env
   # Google Gemini API Key
   GOOGLE_GENAI_API_KEY=your_gemini_api_key

   # Upstash Redis (For Rate Limiting)
   UPSTASH_REDIS_REST_URL=your_upstash_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_token
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the App:**
   Visit `http://localhost:3000` in your browser.

---

## ☁️ Deployment Instructions

The project is optimized for deployment on Vercel:

1. Push your code to a GitHub repository.
2. Import the project into your [Vercel Dashboard](https://vercel.com/dashboard).
3. Add the required Environment Variables (`GOOGLE_GENAI_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`) in the Vercel project settings.
4. Deploy! Vercel will automatically detect Next.js and build the project.

---

## 🧠 Lessons Learned

*   **Managing Complex State:** Building a visual canvas taught us the importance of memoization and structured state management to prevent unnecessary re-renders when dragging elements.
*   **AI Prompt Engineering:** Fine-tuning the prompts sent to Gemini was crucial to ensure the AI returns structured, predictable UI schemas rather than generic text.
*   **Drag-and-Drop UX:** Creating an intuitive drag-and-drop interface requires careful attention to subtle visual cues (drop targets, hover states) to guide the user effectively.

---

## 🔮 Future Improvements

*   [ ] **Full Site Export:** Export not just components, but fully linked multi-page Next.js projects.
*   [ ] **Custom Theming Engine:** Allow users to define global color palettes and typography scales that apply across the entire builder.
*   [ ] **Undo/Redo History:** Implement a robust history stack for the canvas.
*   [ ] **Figma Import:** Experimental feature to convert basic Figma frames into builder components.
*   [ ] **Collaborative Editing:** Multiplayer mode for multiple designers to work on the same canvas in real-time.

---
<div align="center">
  <i>Built with ❤️ using Next.js and AI</i>
</div>
