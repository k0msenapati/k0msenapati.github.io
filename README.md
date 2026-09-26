# k0msenapati Portfolio

My personal developer portfolio website. Built with React, TypeScript, and Tailwind CSS.

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) with [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion) & [Lenis](https://lenis.darkroom.engineering/)
- **Routing:** [Wouter](https://github.com/molecula-js/wouter)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [gh-pages](https://www.npmjs.com/package/gh-pages)

---

<details>
<summary><b>customize</b></summary>

Follow these steps to copy this project, customize it with your own details, and deploy it to your personal domain or GitHub Pages.

### 1. Download & Clone

Clone this repository to your local system and install dependencies. This project uses **Bun** as the package manager:

```bash
# Clone the repository
git clone https://github.com/k0msenapati/k0msenapati.github.io.git
cd k0msenapati.github.io

# Install dependencies
bun install
```

### 2. Customize Content (`src/data/`)

All personal details, skills, experiences, projects, and achievements are isolated into pure data modules inside the `src/data/` folder. Simply open and edit these files to customize the portfolio:

- **[profile.tsx](src/data/profile.tsx):** Name, nickname, bio, avatar image, and social media/resume links.
- **[projects.ts](src/data/projects.ts):** Featured/archive projects, GitHub URLs, demo links, YouTube video walkthrough IDs, and tech stack tags.
- **[skills.tsx](src/data/skills.tsx):** Categories of technical skills and their respective SVG icons.
- **[experience.tsx](src/data/experience.tsx):** Job roles, companies, dates, bullet descriptions, and technologies used.
- **[education.tsx](src/data/education.tsx):** Schools/universities, degrees, periods, scores/grades, and icons.
- **[achievements.ts](src/data/achievements.ts):** Awards, hackathon wins, online publications, and verification links.

### 3. Personalize Assets, Configs, & Meta Tags

#### Edit Favicon & Icons

- Replace the favicon file located at `public/favicon.svg` with your own SVG.
- Replace the avatar image/icon details if needed under `public/`.

#### Update Package Metadata & GitHub Pages URL

Open `package.json` and change the following fields:

- `"name"`: your-portfolio-name
- `"homepage"`: Change `"https://k0msenapati.github.io"` to your target URL (e.g., `https://yourusername.github.io` or your custom domain).

#### Update Meta Tags & Title (SEO)

Update titles and meta descriptions in these files for search engine optimization:

- **`index.html`** (Main title and meta tags)
- **`src/pages/Portfolio.tsx`** (Home page `<title>` and metadata description)
- **`src/pages/ProjectsPage.tsx`** (Archive page `<title>` and metadata description)

### 4. Verify Locally

Start the development server to check your changes in real-time:

```bash
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Upload to Your New GitHub Repository

Initialize a clean Git repository or update the existing remote origin to push to your new repo:

```bash
# Verify current remote URL
git remote -v

# Update target repository to your own URL
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# Stage, commit, and push your changes
git add .
git commit -m "personalize portfolio content"
git push -u origin master
```

### 6. Deploy to GitHub Pages

A script has been set up using `gh-pages` to compile and deploy the static website in one command:

```bash
bun run deploy
```

This automatically runs typescript checks, compiles the production bundle into `/dist`, and uploads it to the `gh-pages` deployment branch of your repository.

_Note: In your GitHub Repository Settings under the **Pages** tab, ensure the build source is set to deploy from the `gh-pages` branch._

</details>
