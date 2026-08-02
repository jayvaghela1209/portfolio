# Jay Vaghela — Portfolio

A React + Vite + Tailwind portfolio site with a DevOps/cloud-engineering theme:
a live CI/CD pipeline visual in the hero, project cards for real projects
(HelpingHands, ResumeRoute, AssetFlow, AWS S3/CloudFront monitoring, EKS
infra & CI/CD automation), a skills manifest, certifications, and a contact
section with resume download + GitHub/LinkedIn/email links.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages,
AWS S3 + CloudFront (fitting, given the projects below), or any static host.

## Editing content

- **Projects, skills, certifications** — all content lives in
  `src/data/projects.js`. Edit the arrays there; the UI updates automatically.
- **Resume** — replace `public/resume.pdf` with an updated version any time;
  the download buttons always point to that file.
- **Colors / fonts** — design tokens are in `tailwind.config.js`
  (`colors`, `fontFamily`) and Google Fonts are loaded in `index.html`.
- **Sections** — each section is its own component in `src/components/`.
  Reorder or remove sections in `src/App.jsx`.

## Stack

React 18, Vite, Tailwind CSS, lucide-react icons.
