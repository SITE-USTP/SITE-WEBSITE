# SITE Website

The official website for **SITE (Society of Information Technology Enthusiasts)**.
Built with **Astro**, **React**, **Tailwind CSS**, and **TinaCMS**.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SITE-USTP/SITE-WEBSITE.git
   cd SITE-WEBSITE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   > **Note:** If you encounter errors with native modules, try: `npm install --force`

### 💻 Development

To start the development server with **TinaCMS** enabled:

```bash
npm run tina
```

- **Website**: [http://localhost:4321](http://localhost:4321)
- **CMS Admin**: [http://localhost:4321/admin](http://localhost:4321/admin)

### 🏗️ Building for Production

To build the static site:

```bash
npm run build
```

The output will be in the `dist/` directory.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [TinaCMS](https://tina.io/)

## 📂 Project Structure

```text
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components (React & Astro)
│   ├── content/        # Content collections (config)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Application routes
│   └── styles/         # Global styles
├── tina/               # TinaCMS configuration & schema
└── package.json
```
