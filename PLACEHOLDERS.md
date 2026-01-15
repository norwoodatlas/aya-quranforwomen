# 🔧 Placeholder Replacement Guide

Before deploying your site, you MUST replace these placeholders in `index.html`.

## Required Replacements

### 1. App Store URL: `{{APP_STORE_URL}}`

Replace this with your actual Apple App Store URL.

**Example:**
```
https://apps.apple.com/app/id1234567890
```

**Locations in index.html:**
Search for `{{APP_STORE_URL}}` and you'll find it in:
- **Line ~75:** Structured Data (JSON-LD) - `downloadUrl` field
- **Line ~100:** Arabic Hero Section - Primary CTA button
- **Line ~204:** Arabic CTA Section - Download button
- **Line ~259:** English Hero Section - Primary CTA button
- **Line ~363:** English CTA Section - Download button

**Total: 5 occurrences**

### 2. App ID: `{{APP_ID}}`

Replace this with your Apple App Store ID (numbers only).

**Example:**
```
1234567890
```

**Locations in index.html:**
- **Line ~39:** Apple Smart App Banner meta tag

**Total: 1 occurrence**

---

## Quick Find & Replace

### Option 1: Manual Replacement
1. Open `index.html` in your code editor
2. Use Find & Replace (Cmd/Ctrl + H)
3. Find: `{{APP_STORE_URL}}`
4. Replace with: Your actual App Store URL
5. Replace All (5 occurrences)
6. Find: `{{APP_ID}}`
7. Replace with: Your App Store ID (numbers only)
8. Replace All (1 occurrence)

### Option 2: Command Line (macOS/Linux)
```bash
# Replace APP_STORE_URL (example)
sed -i '' 's|{{APP_STORE_URL}}|https://apps.apple.com/app/id1234567890|g' index.html

# Replace APP_ID (example)
sed -i '' 's|{{APP_ID}}|1234567890|g' index.html
```

### Option 3: Command Line (Linux/Git Bash)
```bash
# Replace APP_STORE_URL (example)
sed -i 's|{{APP_STORE_URL}}|https://apps.apple.com/app/id1234567890|g' index.html

# Replace APP_ID (example)
sed -i 's|{{APP_ID}}|1234567890|g' index.html
```

---

## How to Get Your App Store Details

### Finding Your App Store URL
1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Select your app
3. Go to "App Information"
4. Copy the Apple ID (it's a number like `1234567890`)
5. Your App Store URL format:
   ```
   https://apps.apple.com/app/id[YOUR_APP_ID]
   ```
   Or use the direct link from the App Store app

### Finding Your App ID
- It's the numeric ID from your App Store URL
- Example: If URL is `https://apps.apple.com/app/id1234567890`
- Your App ID is: `1234567890`

---

## Verification Checklist

After replacing, verify:
- [ ] All 5 CTA buttons link to the correct App Store URL
- [ ] The Smart App Banner has the correct App ID
- [ ] The structured data (JSON-LD) has the correct download URL
- [ ] Open the page in a browser and click the download buttons (Arabic & English)
- [ ] Test on iOS device to see if Smart App Banner appears
- [ ] Run Lighthouse audit to verify everything works
- [ ] Test both Arabic and English versions

---

## Language-Specific Testing

### Test Arabic Version (Default)
1. Open the site
2. Should default to Arabic with RTL layout
3. Click "تحميل من App Store" button
4. Should redirect to App Store

### Test English Version
1. Click "EN" button in language toggle
2. Layout should flip to LTR
3. Click "Download on App Store" button
4. Should redirect to App Store

---

## Need Help?

If you don't have your App Store URL yet:
1. This means your app isn't published yet
2. You can still deploy the site with placeholders
3. Update the placeholders once your app is live on the App Store
4. The site will still work and rank, the buttons just won't link anywhere yet

**Important:** Do NOT commit your changes until AFTER replacing the placeholders!
