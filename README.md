# 🤖 Bot-Evasion-Practice

This Node.js project demonstrates web scraping using Puppeteer with **bot evasion techniques**. It scrapes [bot.sannysoft.com](https://bot.sannysoft.com) to validate how well the scraper can mimic real user behavior and bypass basic anti-bot detection.

---

## ✨ Features

- ✅ Launches Chromium with stealth mode using `puppeteer-extra-plugin-stealth`
- 🕵️‍♂️ Randomizes User-Agent using the `user-agents` library
- 🌐 Custom headers (e.g., Accept-Language) to simulate real browser traffic
- 💤 Adds randomized delays to mimic human behavior
- 🖼️ Saves a screenshot as proof of success (proof.png)
- 🔍 Headless disabled (`headless: false`) for debugging visibility

---

## 📁 Project Structure

Bot-Evasion-Practice/
├── node_modules/ # Installed dependencies
├── scraper.js # Main scraper logic
├── books.json # (Optional) output file for scrapers
├── proof.png # Screenshot of successful scrape
├── package.json # Project metadata & dependencies
└── .gitignore # Ignored files/folders

---

## 📦 Tech Stack

| Tool/Library                   | Purpose                                  |
|-------------------------------|------------------------------------------|
| `puppeteer`                   | Headless Chrome browser control          |
| `puppeteer-extra`             | Plugin support for Puppeteer             |
| `puppeteer-extra-plugin-stealth` | Obfuscates bot-like behavior           |
| `user-agents`                 | Random real-world User-Agent strings     |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mohit-tellis/Bot-Evasion-Practice.git
cd Bot-Evasion-Practice
2️⃣ Install Dependencies

npm install
3️⃣ Run the Scraper

node scraper.js
You will see:

A Chrome browser open

Console showing navigation/user-agent info

A screenshot saved as proof.png

📸 Sample Output (proof.png)
✅ Screenshot saved showing that the scraper passed bot checks on bot.sannysoft.com.
<img width="1244" height="769" alt="image" src="https://github.com/user-attachments/assets/808059bc-fcaf-4fc1-8ceb-efb68050671b" />


⚠️ Disclaimer
This project is for educational purposes only.

Always respect a site's robots.txt and Terms of Service before scraping.

👨‍💻 Author
Mohit Raj
📧 mohit@tellistechnologies.com
🔗 GitHub: @mohit-tellis
