# Haven Aesthetics Website

Premium static website for Haven Aesthetics in Constantia Park, Pretoria.

## What is included

- `index.html` - main website page
- `styles.css` - full responsive styling
- `script.js` - mobile navigation and opening-hours helper
- `assets/` - Haven logo assets, favicon, social preview, website package preview, and local treatment images
- `site.webmanifest`, `robots.txt`, `sitemap.xml` - basic site metadata

## Important folder structure

Your GitHub repository should look like this:

```text
haven-aesthetics-website/
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
├─ site.webmanifest
├─ robots.txt
├─ sitemap.xml
└─ assets/
   ├─ favicon.png
   ├─ haven-logo-card.png
   ├─ haven-logo-wordmark-taupe.png
   ├─ haven-logo-wordmark-cream.png
   ├─ social-preview.png
   ├─ haven-website-package-preview.png
   ├─ hero-microneedling.jpg
   ├─ lashes.jpg
   ├─ microblading.jpg
   ├─ microneedling.jpg
   ├─ dermaplaning.jpg
   ├─ chemical-peel.jpg
   └─ treatment-room.jpg
```

The `assets` folder must be in the same place as `index.html` or the images will not load.

## How to update GitHub from VS Code

Open PowerShell inside the website folder, then run:

```powershell
git status
git add .
git commit -m "Update Haven Aesthetics website assets"
git push
```

If this is a new local folder and Git is not initialized yet, run:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial Haven Aesthetics website"
git remote add origin https://github.com/marcoduplessis03-crypto/haven-aesthetics-website.git
git push -u origin main
```

If GitHub rejects because the remote already has files, use:

```powershell
git fetch origin
git push -u origin main --force-with-lease
```

If it still rejects and this repo is only for the Haven website, use:

```powershell
git push -u origin main --force
```

## How to make it live with GitHub Pages

1. Open the GitHub repository.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Click **Save**.
6. Wait 1-2 minutes.
7. Visit:

```text
https://marcoduplessis03-crypto.github.io/haven-aesthetics-website/
```

After pushing changes, hard refresh the website with **Ctrl + F5**.

## Booking link

All Book Now buttons currently link to the Haven Aesthetics Fresha booking page.


## Image update

The website now uses local treatment-specific assets instead of generic spa-style stock images. These files are inside the `assets` folder and are referenced directly by `index.html`:

- `hero-microneedling.jpg`
- `lashes.jpg`
- `microblading.jpg`
- `microneedling.jpg`
- `dermaplaning.jpg`
- `chemical-peel.jpg`
- `treatment-room.jpg`

When committing updates, make sure the full `assets` folder is pushed to GitHub.
