# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Tutor Dashboard — Overview & Notice Board

This project is a **React + Vite** based dashboard designed for managing tutor sessions, requests, and notices.  
It provides a responsive, clean interface that adapts across desktop and mobile devices.

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

bash
git clone https://github.com/your-username/tutor-dashboard.git
cd tutor-dashboard

### 2. Install Dependencies

Ensure you have **Node.js (v16 or above)** and **npm** or **yarn** installed.

### Using npm:

### ```bash

### npm install

## 🧩 Scripts

You can use the following commands in the terminal:

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start development server            |
| `npm run build`   | Build for production                |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | Run ESLint to check for code issues |

This project was built using a modern front-end stack for speed, modularity, and scalability.

### 🧰 Core Technologies

- **React 18** – Component-based UI framework
- **Vite** – Lightning-fast development and build tool
- **JavaScript (ES6+)** – Core programming language
- **HTML5 & CSS3 / SCSS** – Styling and layout

### 🎨 UI & Styling

- **React-Bootstrap** – For responsive grid layouts and components
- **React Icons** – Clean and scalable icons

### 📅 Components & Utilities

- **React-Datepicker** – Interactive calendar for scheduling
- **React Infinite Scroll Component (if used)** – Efficient scrolling
- **IndexedDB / LocalStorage** – Persistent local data handling

### 🧱 Build & Quality

- **ESLint** – Linting and code quality checks

---

## 🧩 Assumptions Made

During the development of this project, a few assumptions were made to simplify setup and ensure smooth operation:

1. **API Integration:**  
   The project assumes that all API endpoints (for sessions, notices, etc.) will be connected later.  
   Currently, dummy/static data is used for demonstration.

2. **Responsive Design:**  
   The layout has been tested primarily for **mobile (≤737px)** and **desktop (≥940px)** screen widths.  
   Tablet view behaves responsively between these ranges.

3. **Static Assets:**  
   Avatar images and icons are placeholder URLs that can be replaced with dynamic content once APIs are connected.

4. **Environment:**  
   Assumes a modern development environment with Node.js (v18+) and npm or yarn pre-installed.

---

---

## 🌐 Browser Compatibility Notes

This project is designed and tested for modern browsers with full ES6+ and CSS3 support.  
For best performance and visual consistency, use the latest versions of the following:

| Browser                               | Supported                                     | Notes                                            |
| ------------------------------------- | --------------------------------------------- | ------------------------------------------------ |
| **Google Chrome**                     | ✅ Full Support                               | Primary browser used during development          |
| **Microsoft Edge**                    | ✅ Full Support                               | Verified responsive layout and animations        |
| **Mozilla Firefox**                   | ✅ Full Support                               | Minor visual differences in scrollbar styling    |
| **Safari (macOS / iOS)** Full Support | Minor visual differences in scrollbar styling |
| **Opera**                             | ✅ Supported                                  | Tested for responsiveness and layout consistency |

---
