
<div align="center">

# Damon-XMD

![Damon-XMD Banner](https://i.ibb.co/7dQWPvXW/c88af51ce9c3.jpg)

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=00FFAA&center=true&vCenter=true&width=600&lines=Damon-XMD+coded+by+Wondering+Jew;Fast+and+Powerful+WhatsApp+Bot;Made+with+love+in+Kenya)](https://github.com/Felix-234)

---

### 🔥 Animated Status & Repo Badges

![Stars](https://img.shields.io/github/stars/Felix-234/Damon-XMD?style=for-the-badge&color=ffcc00)
![Forks](https://img.shields.io/github/forks/Felix-234/Damon-XMD?style=for-the-badge&color=00ccff)
![Size](https://img.shields.io/github/repo-size/Felix-234/Damon-XMD?style=for-the-badge&color=ff66cc)
![License](https://img.shields.io/github/license/Felix-234/Damon-XMD?style=for-the-badge&color=00ff99)

---

### 💬 Contact & Support

[![WhatsApp](https://img.shields.io/badge/Chat_on_WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/254725391914)
[![Support](https://img.shields.io/badge/Support_Damon--XMD-FF0000?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/Felix-234)

</div>

---

## 🚀 Damon-XMD Overview

**Damon-XMD** is a powerful, multi-feature WhatsApp bot built for automation, fun, and productivity.  
It supports media tools, group management, AI integrations, auto-features, and more—optimized for smooth deployment on VPS, Render, Railway, and local environments.

---

## ✨ Key Features

- **AI Integrations:** GPT-style chat, image generation, code helpers, and more (configurable).
- **Media Tools:** Download videos, audio, images, stickers, and status saver.
- **Group Management:** Anti-spam, auto-welcome, auto-kick, moderation tools, and logs.
- **Fun & Games:** Mini-games, random facts, quotes, memes, and interactive commands.
- **Auto Systems:** Auto-typing, auto-recording, auto-status view/react, AFK system.
- **Developer Tools:** Debug logs, hot-reload, and modular plugin system.
- **Animated Boundaries UI:** Typing SVG, animated badges, and visually rich README layout.
- **Multi-Database Ready:** SQLite primary + PostgreSQL/other DBs as backup (optional).

---

## 🧑‍💻 Developer

- **Bot Name:** Damon-XMD  
- **Main Dev / Maintainer:** **Wondering Jew**  
- **GitHub Handle (example):** `Felix-234`  
- **Country:** 🇰🇪 Kenya  

> Contributions, issues, and feature requests are welcome. Feel free to fork and star the repo!

---

## ⭐ Star & 🍴 Fork

- **Star the repo:** Help Damon-XMD grow by clicking the ⭐ button on GitHub.  
- **Fork the repo:** Create your own version and customize it.

```bash
# Clone the repo
git clone https://github.com/Felix-234/Damon-XMD.git

# Enter the folder
cd Damon-XMD
```

---

## 🔑 Get Session (QR / Pair Code)

1. **Fork** this repository to your GitHub account.  
2. Deploy or run locally (see sections below).  
3. Start the bot and follow the logs to:
   - Scan the **QR code**, or  
   - Use **pairing code** (if enabled).  
4. Your session will be saved in the database (SQLite by default).

> Make sure your WhatsApp number is active and not banned before pairing.

---

## 🧩 Configuration

Create a `.env` file or use environment variables:

```env
OWNER_NUMBER=2547XXXXXXXX
OWNER_NAME=Felix-234
SESSION_FILE=./session.json
DATABASE_URL=./database.db
POSTGRES_URL=postgres://user:password@host:port/dbname
```

> Replace `OWNER_NUMBER` with your full international WhatsApp number and keep `OWNER_NAME` as `Felix-234` in examples.

---

## 🖥️ Local / VPS Setup

### 1. Requirements

- **Node.js** v18+  
- **Git**  
- **SQLite** (bundled) or PostgreSQL (optional)  

### 2. Installation

```bash
# Clone
git clone https://github.com/Felix-234/Damon-XMD.git
cd Damon-XMD

# Install dependencies
npm install

# Build (if applicable)
npm run build

# Start
npm start
```

> On a **VPS**, you can use `pm2` or `screen` to keep Damon-XMD running in the background.

---

## ☁️ One-Click Deployments

### 🚀 Deploy ...
