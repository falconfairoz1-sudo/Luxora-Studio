# Luxora Studio Website

A static website for Luxora Studio showcasing interior design and visualization services.

## Files

- `index.html` - homepage markup
- `styles.css` - responsive styling
- `script.js` - menu toggle and contact form interactions

## Run locally

Open `index.html` in your browser, or use a static server for development.

## Notes

- The site is responsive and includes smooth navigation links.
- Contact buttons use `tel:` and `mailto:` links (email uses luxorastudio07@gmail.com).
- Images are loaded from local `images/` folder.

---

## Deployment checklist & instructions

- Add a favicon at `images/favicon.ico` and confirm the link in `index.html`.
- Optimize images (resize and compress) before deploying to reduce load times.
- Update `sitemap.xml` with your production domain.

### Quick deploy options

- **GitHub Pages**: push to a repository, enable Pages in Settings, serve from `main` branch root.
- **Vercel**: connect the repo, select this project, and deploy as a static site. No build command is required.

#### Vercel deployment steps

1. Create or sign in to a Vercel account at `https://vercel.com`.
2. Import your repository and choose the project root.
3. Set the framework preset to `Other` or leave it autodetected.
4. Leave the build command blank if prompted, and set the output directory to `/`.
5. Deploy and verify `index.html` loads correctly.

If you'd like, I can also add a GitHub Actions workflow to auto-deploy on push.
