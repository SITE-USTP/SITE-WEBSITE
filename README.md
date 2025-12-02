# SITE Website

The official website for **SITE (Society of Information Technology Enthusiasts)**.

---

## 🌟 Quick Start Guide (For Non-Programmers)

If you are an officer or content editor who just wants to update the website, follow these simple steps.

### Step 1: Install the Required Software
You need a program called **Node.js** to run this website on your computer.
1. Go to [nodejs.org](https://nodejs.org/).
2. Download the **LTS (Long Term Support)** version.
3. Install it just like any other program (keep clicking "Next").

### Step 2: Download the Website Code
1. Open your computer's terminal:
   - **Windows**: Search for "PowerShell" or "Command Prompt".
   - **Mac**: Search for "Terminal".
2. Copy and paste this command to download the code:
   ```bash
   git clone https://github.com/SITE-USTP/SITE-WEBSITE.git
   ```
3. Go into the website folder:
   ```bash
   cd SITE-WEBSITE
   ```

### Step 3: Turn on the Website
1. First time only: Install the project tools by running this command:
   ```bash
   npm install
   ```
   *(If you see red errors, try `npm install --force`)*

2. **Every time you want to edit the site**, run this command:
   ```bash
   npm run tina
   ```
   > **IMPORTANT:** Do **NOT** run `npm run dev`. The `npm run tina` command starts both the website and the admin panel for you.

### Step 4: Edit Content
Once the command above is running, open your web browser (Chrome, Edge, etc.):

- **To view the website:** Go to [http://localhost:4321](http://localhost:4321)
- **To edit content (Admin Panel):** Go to [http://localhost:4321/admin](http://localhost:4321/admin)

> **Note:** Keep the terminal window open while you are editing. To stop the website, click on the terminal and press `Ctrl + C`.

---

## 💻 For Developers

### Tech Stack
- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [TinaCMS](https://tina.io/)

### Commands
| Command | Description |
| :--- | :--- |
| `npm install` | Installs dependencies. |
| `npm run tina` | Starts the dev server with TinaCMS (Recommended). |
| `npm run dev` | Starts Astro dev server only (No CMS). |
| `npm run build` | Builds the static site for production (`dist/`). |

### Project Structure
```text
/
├── public/             # Static assets (images, icons)
├── src/
│   ├── components/     # UI components (Navbar, Cards, etc.)
│   ├── content/        # Content definitions
│   ├── layouts/        # Page layouts
│   ├── pages/          # Website pages
│   └── styles/         # CSS files
├── tina/               # CMS configuration
└── package.json
```
