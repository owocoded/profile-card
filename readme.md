# 🪪 Profile Card Component (HTML / CSS / Vanilla JS)

A simple, accessible, and responsive **Profile Card** built using **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.

This component demonstrates best practices in front-end development — including accessibility, responsive design, semantic markup, and testability through `data-testid` attributes.

---

## 🚀 Features

- ✅ Semantic HTML structure (`article`, `header`, `nav`, `section`, `figure`, `footer`)
- ✅ Accessibility-friendly (keyboard focusable, alt text, labels)
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Real-time display of current time in milliseconds (`Date.now()`)
- ✅ Test-ready with consistent `data-testid` attributes
- ✅ Uses modern CSS (Flexbox)
- ✅ Clean, simple, and lightweight — no frameworks required

---

## 🧩 Project Structure

project-folder/
│
├── index.html # Main HTML file
|___style.css
|__ script.js
├── README.md # This guide
└── image/ # (optional) Folder for images if you add local assets

### 🌐 Site Navigation

All pages include a shared, accessible navigation bar:

| Link | File | Data Test ID |
|------|------|---------------|
| Home | `index.html` | `test-nav-home` |
| About Me | `about.html` | `test-nav-about` |
| Contact Us | `contact.html` | `test-nav-contact` |

- Uses semantic `<nav>` and keyboard-focusable `<a>` tags.
- Current page is highlighted automatically via JS (`.active` class).
- Fully responsive and accessible.


---

## 💻 Running Locally

You don’t need any special setup — just a web browser.

### Option 1: Open directly
1. Download or clone this repository:
   ```bash
   git clone https://github.com/owocoded/profile-card.git


Navigate to the folder:

cd profile-card


Open profile-card.html in any browser (Chrome, Edge, Firefox, etc.).

Option 2: Run with a local server (recommended)

If you want to test dynamic JS updates (like Date.now()):

Use VS Code or any code editor with Live Server.

Right-click profile-card.html → "Open with Live Server"

The page will open in your default browser and auto-refresh on save


Then visit:

http://localhost:5000/profile-card.html
