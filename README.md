# Digitech Digital Agency Website

A premium, modern, and highly interactive web application designed to showcase the professional services, portfolio, and academy programs of **Digitech Digital Agency**. This project is built using a modern React and Vite tech stack, leveraging pure CSS for smooth, hardware-accelerated animations and responsive layouts.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Project Architecture & Directory Structure](#project-architecture--directory-structure)
- [Tech Stack](#tech-stack)
- [Getting Started Locally](#getting-started-locally)
- [How to Push to GitHub](#how-to-push-to-github)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Create a GitHub Repository](#2-create-a-github-repository)
  - [3. Configure and Push Existing Local Code](#3-configure-and-push-existing-local-code)
  - [4. Subsequent Updates](#4-subsequent-updates)
- [License](#license)

---

## About the Project

This platform is a digital storefront for **Digitech**, featuring its software engineering capabilities, graphic design portfolio, and the **Digitech Lab professional training programmes** (which train the next generation of tech talent). 

The website has been built with extreme attention to visual aesthetics, utilizing clean glassmorphism, tailored dark/light color palettes, smooth hover states, and dynamic micro-animations to deliver a premium user experience.

---

## Key Features

- **Responsive Multi-Page Structure**: Separate interactive sections for Home, About, Services, Portfolio, Academy, and Contact.
- **Custom Cursor & Micro-Animations**: Smooth visual feedback with a custom cursor effect and page scroll indicator.
- **Stat Strip Dashboard**: Real-time agency performance statistics (completed projects, active academy students, years of operation, etc.).
- **Interactive Portfolio Grid**: Dynamic showcasing of design work and software projects.
- **Contact Channel**: A clean, styled communication gateway for prospective clients and prospective academy students.

---

## Project Architecture & Directory Structure

```text
DIGITECH DIGITAL AGENCY WEBSITE/
├── .git/                  # Git repository metadata
├── .gitignore             # Git exclusion rules (node_modules, builds, .env, etc.)
├── eslint.config.js       # ESLint configurations
├── index.html             # Main entry HTML document
├── package.json           # Project manifest & dependency configuration
├── package-lock.json      # Dependency lock file
├── vite.config.js         # Vite configuration file
├── public/                # Static public assets (icons, logos, graphics)
└── src/
    ├── App.css            # Root component styling
    ├── App.jsx            # Main app component orchestrating layout & routing
    ├── index.css          # Core design system (colors, typography, utility classes)
    ├── main.jsx           # React bootstrapping entrypoint
    ├── components/        # Reusable visual components
    │   ├── CursorEffects/ # Visual effects linked to cursor movement
    │   ├── Footer/        # Dynamic website footer
    │   ├── Navbar/        # Interactive navigation header
    │   ├── ScrollProgress/# Top-bar page scroll indicator
    │   └── StatStrip/     # Dashboard counter/stats block
    └── pages/             # Layouts for individual website pages
        ├── Home/          # Hero banner and agency introduction
        ├── About/         # Core company values and team statement
        ├── Services/      # Breakdown of agency offerings
        ├── Portfolio/     # Case studies & design gallery
        ├── Academy/       # Digitech Lab program pathways
        └── Contact/       # Communication and contact forms
```

---

## Tech Stack

- **Core**: [React 19](https://react.dev/) & [Vite 8](https://vite.dev/)
- **Logic**: Modern ES6+ JavaScript
- **Styling**: Pure CSS (Custom CSS Variables, Flexbox/Grid, Transition/Animations)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [ESLint](https://eslint.org/)

---

## Getting Started Locally

To run the project on your local machine, follow these simple steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended) installed.

### Setup Steps
1. **Navigate to the Project Directory**:
   ```bash
   cd "c:/Users/Admin/Documents/ELIMU RESOURCE/DIGITECH DIGITAL AGENCY WEBSITE"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   *The server will start, typically exposing the app at `http://localhost:5173/`.*

4. **Build for Production**:
   To generate a minified, production-ready build in the `dist/` directory:
   ```bash
   npm run build
   ```

5. **Preview the Build Locally**:
   ```bash
   npm run preview
   ```

---

## How to Push to GitHub

Here is the step-by-step guide to push this existing local repository to GitHub.

### 1. Prerequisites
- A **GitHub Account**: [Sign up for free](https://github.com/join) if you don't have one.
- **Git Command Line**: Make sure Git is installed and configured with your name and email:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

### 2. Create a GitHub Repository
1. Log in to your GitHub account.
2. Click the **`+`** icon in the top-right corner and select **New repository** (or go directly to [github.com/new](https://github.com/new)).
3. Fill in the repository details:
   - **Repository name**: `digitech-digital-agency` (or any name you prefer).
   - **Description**: Add an optional brief description.
   - **Public/Private**: Select your preferred visibility.
4. **CRITICAL**: Do **NOT** initialize the repository with a README, `.gitignore`, or License. The local project already has these.
5. Click **Create repository**.
6. Copy the **remote URL** provided (it looks like `https://github.com/your-username/digitech-digital-agency.git`).

### 3. Configure and Push Existing Local Code
Open your terminal (PowerShell, Command Prompt, or Git Bash) and execute the following commands inside your project root folder:

```bash
# 1. Initialize Git (in case it is not already initialized, though it is)
git init

# 2. Add all local files to the Git index (ignoring files specified in .gitignore)
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Set up Digitech Digital Agency website"

# 4. Rename the default branch to 'main'
git branch -M main

# 5. Connect your local repository to your GitHub remote
# (Replace the URL below with your actual copied GitHub repository URL)
git remote add origin https://github.com/your-username/digitech-digital-agency.git

# 6. Verify the remote is set up correctly
git remote -v

# 7. Push your code to the 'main' branch on GitHub
git push -u origin main
```

*Note: When you run `git push`, a browser window or login prompt may appear asking you to authorize Git with your GitHub account.*

### 4. Subsequent Updates
Whenever you make changes to the files in the future and want to update GitHub, run:
```bash
git add .
git commit -m "Describe the changes you made"
git push
```

---

## License

This project is proprietary. All rights reserved.

