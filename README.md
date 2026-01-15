# Biblia Para Mujeres - Landing Page

A high-end, SEO-optimized, Spanish-first landing page designed to drive traffic to the "Biblia Para Mujeres" iOS app on the Apple App Store.

## 🎯 Purpose

This is a conversion-focused landing page that:
- Ranks well in Google for Spanish religious search terms
- Strengthens App Store SEO signals
- Funnels users directly to the App Store via strong CTAs

## 📁 Project Structure

```
/
├── index.html          # Main HTML file with Spanish and English content
├── styles.css          # Mobile-first responsive styles
├── script.js           # Minimal JavaScript for language toggle
├── robots.txt          # SEO crawler directives
├── sitemap.xml         # XML sitemap for search engines
├── art/                # Brand assets and app screenshots
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Replace Placeholders

Before deploying, you MUST replace these placeholders in `index.html`:

#### App Store URL
Find all instances of `{{APP_STORE_URL}}` and replace with your actual App Store URL:
```html
<!-- Example -->
<a href="https://apps.apple.com/app/id1234567890">
```

**Locations to update:**
- Line ~74: Primary hero CTA (Spanish)
- Line ~193: CTA section button (Spanish)
- Line ~228: Primary hero CTA (English)
- Line ~355: CTA section button (English)

#### App ID
Find `{{APP_ID}}` and replace with your Apple App Store ID:
```html
<!-- Example -->
<meta name="apple-itunes-app" content="app-id=1234567890">
```

**Location to update:**
- Line ~36: Apple Smart App Banner meta tag

### 2. Deploy to Netlify

1. Push this repository to your GitHub account (norwoodatlas/bibliaparamujeres)
2. Log in to Netlify
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Netlify will auto-detect the static site (no build command needed)
6. Click "Deploy site"

Your site will be live at: `https://bibliaparamujeres.netlify.app`

### 3. Custom Domain (Optional)

If you want to use a custom domain:
1. In Netlify, go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. Update all URLs in the code to reflect your custom domain

## 🎨 Design & Brand

### Color Palette
- **Primary Pink:** `#DA73B4` - Main brand color for CTAs and accents
- **Background Cream:** `#F5F1E8` - Warm, calm background
- **Text Dark:** `#2D2D2D` - Primary text color
- **Accent Orange:** `#E68B2C` - For morning prayer icons
- **White:** `#FFFFFF` - Cards and sections

### Typography
- System fonts for optimal performance
- Mobile-first, responsive sizing
- Clean, elegant, spiritual aesthetic

## 🌍 Language Support

The site supports both Spanish (primary) and English:
- Spanish is the default language (`/`)
- Language toggle in the top-right corner
- User preference saved in localStorage
- Proper `hreflang` tags for SEO

## 🔍 SEO Features

### On-Page SEO
- ✅ Optimized `<title>` and `<meta description>`
- ✅ Canonical URL
- ✅ Open Graph tags (Facebook/WhatsApp)
- ✅ Twitter Card tags
- ✅ Apple Smart App Banner
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML5
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for all images
- ✅ Lazy loading for performance

### Spanish Keywords (Naturally Integrated)
- biblia para mujeres
- devocional cristiano mujeres
- biblia diaria mujeres
- oración diaria mujeres
- lectura bíblica mujeres
- biblia femenina
- biblia cristiana app
- biblia en español mujeres

### Technical SEO
- `robots.txt` - Allows all crawlers
- `sitemap.xml` - Helps search engines index the site
- Mobile-first responsive design
- Fast loading (targets Lighthouse 90+)
- Accessible (ARIA labels, focus states)

## 📱 Performance

### Optimization Features
- No frameworks (zero build step)
- System fonts (no font loading delay)
- Lazy loading images
- Hardware-accelerated CSS animations
- Minimal JavaScript
- Compressed assets
- Proper caching headers (via Netlify)

### Target Metrics
- Lighthouse Performance: 90+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+

## 🛠️ Customization

### Update Content
All content is in `index.html`:
- Spanish content: First `<main>` section (default visible)
- English content: Second `<main>` section (hidden by default)

### Update Styles
All styles are in `styles.css`:
- CSS variables at the top for easy color/spacing changes
- Mobile-first breakpoints: 768px (tablet), 1024px (desktop), 1440px (large)

### Update Images
Replace screenshots in the `/art` folder:
- Use the same filenames for automatic updates
- Or update image paths in `index.html`

## 📊 Analytics (Optional)

To add Google Analytics or other tracking:
1. Add the tracking script before `</head>` in `index.html`
2. Ensure it complies with privacy regulations
3. Consider adding a privacy policy link to the footer

## ✅ Pre-Deployment Checklist

- [ ] Replace `{{APP_STORE_URL}}` with actual App Store link
- [ ] Replace `{{APP_ID}}` with actual Apple App Store ID
- [ ] Test on mobile devices
- [ ] Test language toggle (ES ↔ EN)
- [ ] Verify all images load correctly
- [ ] Check all links work
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools

## 📞 Support

For issues or questions:
- Repository: https://github.com/norwoodatlas/bibliaparamujeres
- Company: Norwood Atlas LLC

## 📄 License

© 2026 Norwood Atlas LLC. All rights reserved.

---

**Built with:** Pure HTML, CSS, and JavaScript (no frameworks)
**Hosted on:** Netlify
**Canonical URL:** https://bibliaparamujeres.netlify.app
