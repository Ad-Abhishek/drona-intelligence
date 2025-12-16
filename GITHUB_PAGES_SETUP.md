# GitHub Pages Custom Domain Setup

## Steps to Configure Custom Domain in GitHub:

### 1. Repository Settings
1. Go to your GitHub repository: `https://github.com/ad-abhishek/drona-intelligence`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar

### 2. Custom Domain Configuration
1. In the **Custom domain** field, enter: `dronaintelligence.com`
2. Click **Save**
3. GitHub will automatically create a CNAME file (we already have one)

### 3. HTTPS Configuration
1. After DNS propagates (24-48 hours), check **Enforce HTTPS**
2. This ensures your site uses SSL/TLS encryption

### 4. Verification
GitHub will verify domain ownership by checking:
- DNS records point to GitHub Pages
- CNAME file exists in repository
- Domain is accessible

## Important Notes:

### CNAME File
- ✅ Already created in `/public/CNAME`
- Contains: `dronaintelligence.com`
- Will be deployed with your site

### Astro Configuration
- ✅ Updated `site` to use custom domain
- ✅ Changed `base` from `/drona-intelligence` to `/`
- This removes the subdirectory from URLs

### URL Changes
After custom domain setup:
- **Before**: `https://ad-abhishek.github.io/drona-intelligence/`
- **After**: `https://dronaintelligence.com/`

All your pages will be:
- Home: `https://dronaintelligence.com/`
- Services: `https://dronaintelligence.com/services/`
- Career: `https://dronaintelligence.com/career/`
- About: `https://dronaintelligence.com/about/`
- Bootcamp: `https://dronaintelligence.com/bootcamp/`