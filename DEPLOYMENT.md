# Deployment Guide - Luxora Studio

Your project is now deployment-ready! Follow the instructions below for your chosen platform.

## Pre-Deployment Checklist

- [ ] **Update domain** - Replace `luxora.studio` in `index.html`, `sitemap.xml`, `.netlify.toml` with your actual domain
- [ ] **Favicon** - Ensure `images/favicon.ico` exists (32x32 or 64x64 px)
- [ ] **Apple Touch Icon** - Add `images/apple-touch-icon.png` (180x180 px) for iOS bookmark
- [ ] **OG Image** - Add `images/og-image.jpg` (1200x630 px) for social media preview
- [ ] **Image Optimization** - Compress images before deploying to improve load times
- [ ] **Test** - Run through all navigation links and contact forms in production
- [ ] **SEO** - Verify Google Search Console and Bing Webmaster Tools

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Sign up**: Go to [netlify.com](https://netlify.com)
2. **Connect repository**: Link your GitHub/GitLab repo
3. **Configure**: Netlify auto-detects `.netlify.toml` settings
4. **Deploy**: Push to main branch — auto-deploys automatically
5. **Custom domain**: Add your domain in Site Settings → Custom Domains

**Advantages**: 
- Free SSL/HTTPS
- Auto-deploys on push
- Serverless functions support
- High uptime SLA

### Option 2: Vercel

1. **Sign up**: Go to [vercel.com](https://vercel.com)
2. **Import project**: Select your repository
3. **Configure**: Vercel reads `vercel.json` automatically
4. **Deploy**: Automatic on each push
5. **Custom domain**: Configure in Project Settings

**Advantages**:
- Next.js optimized
- Edge functions
- Blazing fast global CDN

### Option 3: GitHub Pages

1. **Settings**: Go to repository Settings → Pages
2. **Source**: Select "Deploy from a branch"
3. **Branch**: Choose `main` and root folder
4. **Domain**: Configure custom domain (requires DNS records)

**Advantages**:
- Free tier
- Integrated with GitHub
- Simple setup

### Option 4: Traditional Hosting (cPanel, etc.)

1. **Upload**: Use FTP to upload all files to `public_html/`
2. **Configure**: Add `.htaccess` at root for redirects & security
3. **DNS**: Point domain to hosting provider
4. **SSL**: Install SSL certificate (Let's Encrypt recommended)

**Note**: `.htaccess` file is included for Apache servers.

### Option 5: Cloudflare Pages

1. **Sign up**: Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Create project**: Connect your Git repository
3. **Build command**: Leave empty (static site)
4. **Deploy**: Automatic on every push
5. **Custom domain**: Configure via Cloudflare

## After Deployment

### SEO & Indexing

1. **Google Search Console**: Add property and submit sitemap
2. **Bing Webmaster Tools**: Submit for indexing
3. **Monitoring**: Set up Google Analytics (optional but recommended)

### Performance Monitoring

- Use [PageSpeed Insights](https://pagespeed.web.dev/) to check performance
- Check [GTmetrix](https://gtmetrix.com/) for detailed metrics
- Monitor with [Uptime Robot](https://uptimerobot.com/) (free)

### Security

- Run HTTPS check via [SSL Labs](https://www.ssllabs.com/ssltest/)
- Monitor for malware with [Google Safe Browsing](https://safebrowsing.google.com/)

## Domain Setup

### At Domain Registrar

1. **Netlify/Vercel**: Update NS records to registrar's nameservers, OR use CNAME/A records
2. **GitHub Pages**: Add CNAME file or point A/AAAA records
3. **Traditional hosting**: Point A records to server IP

### SSL Certificate

- **Netlify/Vercel**: Automatic (Let's Encrypt)
- **Traditional hosting**: Use [Let's Encrypt](https://letsencrypt.org/) or Certbot
- **Cloudflare**: Automatic (Flexible/Full SSL)

## Environment Variables

If you add backend services later:
- **Netlify**: Site Settings → Build & Deploy → Environment
- **Vercel**: Project Settings → Environment Variables
- **.htaccess**: Add via Apache environment directives

## Production URLs to Update

After deployment, replace these placeholders:

1. **index.html** (Line 8):
   ```
   <link rel="canonical" href="https://YOUR-DOMAIN.COM/" />
   ```

2. **index.html** (Lines 9-10):
   ```
   <meta property="og:image" content="https://YOUR-DOMAIN.COM/images/og-image.jpg" />
   <meta name="twitter:image" content="https://YOUR-DOMAIN.COM/images/og-image.jpg" />
   ```

3. **sitemap.xml**: Replace all `luxora.studio` with your domain

4. **robots.txt**: Replace with your domain

## Performance Tips

1. **Image Optimization**:
   ```bash
   # Use ImageOptim (Mac) or FileOptimizer (Windows)
   # Target: JPEG <100KB, PNG <50KB
   ```

2. **Lazy Loading**: Images use standard `<img>` tags; consider lazy loading for future improvements

3. **Caching Headers**: 
   - `.netlify.toml` and `.htaccess` handle automatic cache control
   - Static assets cached for 1 year
   - HTML re-validated every 12 hours

4. **Minimize Bundle Size**:
   - Current: ~3KB (scripts) + ~20KB (styles)
   - Status: ✅ Optimized

## Troubleshooting

### Deployment fails
- Check build logs for errors
- Verify all file paths are relative (not absolute)
- Ensure favicon.ico exists

### Page shows 404 for routes
- Verify SPA routing in `.netlify.toml` or `.htaccess`
- Both files include rewrite rules for hash-based routing

### Images not loading
- Check file paths are lowercase and match exactly
- Verify images are in `/images/` folder
- Ensure proper permissions (755 for folders, 644 for files)

### Slow performance
- Run images through online compressor (tinypng.com)
- Check for large unoptimized image files
- Use browser DevTools → Network tab to identify slow resources

## Support

For platform-specific questions:
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **GitHub**: [docs.github.com](https://docs.github.com)

---

**Status**: ✅ Project is deployment-ready!
**Last Updated**: 2026-06-07
