# Countryside Farmhouse Chrome Extension

A calm and minimal Chrome New Tab extension featuring countryside farmhouse scenes that change with the time of day and a gentle **One Small Habit** prompt to encourage better daily life.

This extension is designed to reduce digital noise and create a more peaceful space each time you open a new tab.

---

## What It Is

Countryside Farmhouse is a Chrome New Tab extension that replaces your default new tab page with a peaceful countryside scene.

The background changes automatically based on the time of day (morning, afternoon, sunset, and night).  
It also displays a simple life reminder called **One Small Habit** to promote gratitude, mindfulness, respect for others, and healthy daily routines.

No accounts.  
No tracking.  
No stored data.

---

## Why You Should Use This

Most new tab pages are distracting or overloaded.

This one is intentionally different.

You should use Countryside Farmhouse if you want to:

- Start your browsing with a calm and peaceful view
- Build small positive habits like gratitude and self-acknowledgment
- Reduce screen stress and mental clutter
- Keep your new tab minimal and distraction-free
- Create a better digital environment with slow, meaningful design

It does not try to control your day.  
It simply helps you start it better.

---

## Features

- Time-based countryside farmhouse scenes
- Morning, afternoon, sunset, and night themes
- Soft, low-contrast visuals that are easy on the eyes
- Minimal and distraction-free layout
- One Small Habit system for daily life improvement
- Lightweight and fast
- No ads
- No tracking
- No data collection

---

## Extension Structure

```plaintext
countryside-farmhouse-extension/
│
├── images/
│   ├── sunrise.png
│   ├── afternoon.png
│   ├── sunset.png
│   └── night.png
│
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
├── newtab.html
├── newtab.css
├── newtab.js
├── manifest.json
└── README.md
```

---

## Manifest Example

```json
{
  "name": "Countryside Farmhouse New Tab",
  "description": "A peaceful countryside new tab with time-based backgrounds and small habit reminders for calm and focus.",
  "version": "1.0.0",
  "manifest_version": 3,

  "chrome_url_overrides": {
    "newtab": "newtab.html"
  },

  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

---

## Installation (Developer Mode)

1. Open Chrome and go to:

   ```
   chrome://extensions
   ```

2. Enable Developer Mode (top right).

3. Click Load unpacked.

4. Select your project folder:

   ```plaintext
   countryside-farmhouse-extension/
   ```

5. Open a new tab to see the extension in action.

---

## Feedback & Contributions

If you have suggestions for habits, design improvements, or bug reports, feel free to open an issue on GitHub. This is a personal project shared openly—feedback helps it improve.

## License

MIT License  
Free to use, modify, and distribute.

---

## Credits

Farmhouse scenes created using AI-assisted digital painting and custom creative direction.
