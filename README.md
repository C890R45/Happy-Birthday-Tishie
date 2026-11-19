# A Birthday Just for You ♡

A romantic, responsive birthday microsite with a heartfelt letter, memory timeline, keepsake gallery, candle interaction and optional age counter.

## Live demo

Deploy this repository with GitHub Pages, Netlify or Vercel to share your birthday surprise.

## Personalise it

1. Open `script.js` and edit the `birthdayConfig` object:
   - `name`: the name shown in the greeting and letter.
   - `birthDate`: optional date in `YYYY-MM-DD` format. Leave it blank to hide the age counter.
2. Edit the letter and memory captions in `index.html`.
3. Replace the gradient memory and gallery tiles with your own photos if you wish. Keep images in the `img/` folder and add descriptive alt text when adding image elements.
4. Change colours and typography in `style.css`.

## Features

- Responsive romantic pastel design
- Personalised birthday greeting and letter
- Memory timeline and keepsake gallery
- Interactive photo viewer
- Birthday cake candle interaction and confetti
- Optional live age counter
- Falling decorative petals
- Keyboard focus styles and reduced-motion support
- No build step or JavaScript framework required

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server.

## Deploy with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main` and the `/ (root)` folder.
4. Save and wait for GitHub Pages to publish the site.

## Notes

The site uses Google Fonts from a CDN. If the fonts cannot load, system fallbacks are used. No visitor data is collected and no backend is required.
