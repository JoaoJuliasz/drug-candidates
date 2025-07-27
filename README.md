#  Drug Candidate Explorer

A simple web application built with **Next.js**, **TypeScript**, and **Tailwind CSS** that allows users to view, search, and filter a list of drug candidates. It simulates interaction with an API using a mock data source and is structured to scale for large datasets.

##  Tech Stack

* **Framework**: [Next.js](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Testing**: [Cypress](https://www.cypress.io/)

##  Project Structure

```
src
├── app
│   ├── (routes)                # App Pages
│   │   ├── page.tsx            # Home page with search and list
│   │   └── [id]/page.tsx       # Detail page for drug candidate
│   ├── api                     # Api with mock drug candidate data     
│   └── components/             # UI components
├── types/                      # TypeScript types
└── utils/                      # Utility functions 
```

##  Features

* Displays a list of drug candidates with **name**, **status**, and **description**
* Allows **searching** by name
* Each item links to a **details page** with more information
* Includes loading states and accessibility-friendly components

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JoaoJuliasz/drug-candidates
cd drug-candidates
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Add a .env file

```bash
NEXT_PUBLIC_URL=http://localhost:3000
```

### 4. Run the Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## End-to-End Tests (Cypress)

This project uses [Cypress](https://www.cypress.io/) for end-to-end testing.

### Run Cypress tests (with dev server already running)

```bash
pnpm e2e
# or
pnpm e2e:headed  # Opens the interactive Cypress UI
```

> Make sure your development server is running (`pnpm dev`) in a separate terminal.

### Run Cypress tests (auto-start dev server)

If you'd prefer a single command that starts the dev server and runs the tests:

```bash
pnpm e2e:local
```

> ⚠️ This version uses a fixed wait time (`sleep 5`) and may fail if the server isn't ready in time. For more robust runs, consider using a custom script or `start-server-and-test`.


##  Mock API

All drug data is stored in a local file and accessed via a utility function.

```ts
// Example API usage
const drugs = await getDrugCandidates(searchQuery);
```

## 📝 Assumptions & Notes

* Designed for scalability — list rendering can be optimized further with pagination or virtualization if needed.
* Minimal dependencies for simplicity; no state management library required.
* Search is case-insensitive and debounced.