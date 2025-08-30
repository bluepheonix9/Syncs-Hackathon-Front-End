# Syncs Hackathon Front-End

This is the **front-end** of the WasteWise Resource Management Dashboard, built with **Next.js**, **React**, and **Tailwind CSS**. It provides interactive visualizations of electricity, water, and pollution data, along with reports and sustainability insights.

---

## Features

* Interactive **Electricity Graphs** with suburb selection.
* **Water** and **Air Pollution** graphs.
* **Reports Page** with downloadable PDF/ZIP resources.
* **Tips and Sustainability Section**.
* Fully responsive layout with **sidebar navigation**.
* Integrated **Tailwind CSS** and **Lucide React icons**.

---

## Prerequisites

* Node.js (v18+ recommended)
* npm or yarn
* Backend FastAPI server running locally (for graph data)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Syncs-Hackathon-Front-End.git
cd Syncs-Hackathon-Front-End
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

**Required Packages:**

* `react`
* `react-dom`
* `next`
* `tailwindcss`
* `postcss`
* `autoprefixer`
* `lucide-react`
* `typescript` (if using TypeScript)
* `@types/react` (if using TypeScript)
* `@types/node` (if using TypeScript)

---

## Tailwind CSS Setup

If Tailwind is not set up, make sure to initialize it:

```bash
npx tailwindcss init -p
```

Ensure your `tailwind.config.js` includes:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Running the Project

1. Make sure your **FastAPI backend** is running at `http://127.0.0.1:8000`.

2. Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

3. Open your browser at [http://localhost:4002](http://localhost:4002) (adjust port if different).


## Notes

* The **electricity graphs** require suburb data from the backend.
* **Water** and **Air Pollution** graphs do not require suburbs.
* Large files (e.g., ZIP datasets) should not be committed to GitHub directly; consider using **Git LFS** for files >100MB.
* Make sure the backend API URLs in your front-end match the actual running backend server.

---

## License

This project is open-source and available under the MIT License.
