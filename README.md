# Aya – Qur'an for Women - Landing Page

A high-end, SEO-optimized, Arabic-first landing page designed to drive traffic to the "Aya – Qur'an for Women" iOS app on the Apple App Store.

## 🎯 Purpose

This is a conversion-focused landing page that:
- Ranks well in Google for Islamic and Qur'an-related search terms
- Strengthens App Store SEO signals
- Funnels users directly to the App Store via strong CTAs

## 📁 Project Structure

```
/
├── index.html          # Main HTML file with Arabic and English content
├── styles.css          # Mobile-first responsive styles with olive/green theme
├── script.js           # Minimal JavaScript for language toggle with RTL support
├── robots.txt          # SEO crawler directives
├── sitemap.xml         # XML sitemap for search engines
├── art/                # Brand assets and app screenshots
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Replace Placeholders

Before deploying, you MUST replace these placeholders in `index.html`:

#### App Store URL
Find all instances of `{{APP_STORE_URL}}` and replace with your actual App Store URL

#### App ID
Find `{{APP_ID}}` and replace with your Apple App Store ID

See **PLACEHOLDERS.md** for detailed instructions and locations.

### 2. Deploy to Netlify

1. Push this repository to your GitHub account (norwoodatlas/aya-quranforwomen)
2. Log in to Netlify
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Netlify will auto-detect the static site (no build command needed)
6. Click "Deploy site"

Your site will be live at: `https://aya-quranforwomen.netlify.app`

## 🎨 Design & Brand

### Color Palette
- **Primary Olive:** `#8B9556` - Main brand color for CTAs and accents
- **Background Cream:** `#F5F3ED` - Warm, serene background
- **Text Dark:** `#2D2D2D` - Primary text color
- **Accent Gold:** `#C9A961` - For meditation and spiritual elements
- **Accent Green:** `#6B8E4E` - Secondary accents

### Typography
- System fonts for optimal performance
- Mobile-first, responsive sizing
- Clean, elegant, spiritual aesthetic
- Full RTL (Right-to-Left) support for Arabic

## 🌍 Language Support

The site supports both Arabic (primary) and English:
- Arabic is the default language (`/`) with RTL layout
- Language toggle in the top-left corner (switches to right in English)
- User preference saved in localStorage
- Proper `hreflang` tags for SEO
- Full bidirectional text support

## 🔍 SEO Features

### On-Page SEO
- ✅ Optimized `<title>` and `<meta description>` in both languages
- ✅ Canonical URL
- ✅ Open Graph tags (Facebook/WhatsApp)
- ✅ Twitter Card tags
- ✅ Apple Smart App Banner
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML5
- ✅ Proper heading hierarchy
- ✅ Alt text for all images
- ✅ Lazy loading for performance

### Target Keywords
- quran for women
- daily quran reading women
- islamic devotional women
- quran app women
- قرآن للنساء (Quran for women in Arabic)
- تطبيق قرآن نسائي (Women's Quran app)
- قراءة قرآن يومية (Daily Quran reading)
- تأملات إسلامية (Islamic meditations)

### Technical SEO
- `robots.txt` - Allows all crawlers
- `sitemap.xml` - Helps search engines index the site
- Mobile-first responsive design
- Fast loading (targets Lighthouse 90+)
- Accessible (ARIA labels, focus states, RTL support)

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
- Arabic content: First `<main>` section (default visible with RTL)
- English content: Second `<main>` section (hidden by default with LTR)

### Update Styles
All styles are in `styles.css`:
- CSS variables at the top for easy color/spacing changes
- Mobile-first breakpoints: 768px (tablet), 1024px (desktop), 1440px (large)
- RTL-specific styles included

### Update Images
Replace screenshots in the `/art` folder:
- Use the same filenames for automatic updates
- Or update image paths in `index.html`

## ✅ Pre-Deployment Checklist

- [ ] Replace `{{APP_STORE_URL}}` with actual App Store link
- [ ] Replace `{{APP_ID}}` with actual Apple App Store ID
- [ ] Test on mobile devices
- [ ] Test language toggle (AR ↔ EN)
- [ ] Test RTL layout in Arabic
- [ ] Verify all images load correctly
- [ ] Check all links work
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools

## 📞 Support

For issues or questions:
- Repository: https://github.com/norwoodatlas/aya-quranforwomen
- Company: Norwood Atlas LLC

## 📄 License

© 2026 Norwood Atlas LLC. All rights reserved.

---

**Built with:** Pure HTML, CSS, and JavaScript (no frameworks)
**Hosted on:** Netlify
**Canonical URL:** https://aya-quranforwomen.netlify.app
