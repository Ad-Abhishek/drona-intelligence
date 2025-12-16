# Deployment Guide for GitHub Pages

## Prerequisites
1. GitHub account
2. Git installed on your local machine
3. Your project ready for deployment

## Step-by-Step Deployment Instructions

### 1. Update Astro Configuration
✅ **Already Done**: The `astro.config.mjs` has been updated with GitHub Pages settings.

**Important**: Replace `YOUR_USERNAME` in the config with your actual GitHub username:
```javascript
site: 'https://YOUR_GITHUB_USERNAME.github.io',
base: '/drona-intelligence',
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `drona-intelligence` (or any name you prefer)
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license (we already have these)

### 3. Initialize Git and Push to GitHub
Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Drona Intelligence website"

# Add GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/drona-intelligence.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically trigger and deploy your site

### 5. Access Your Deployed Site
After deployment completes (usually 2-5 minutes), your site will be available at:
```
https://YOUR_USERNAME.github.io/drona-intelligence
```

## Automatic Deployments
✅ **Already Configured**: Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.

## Troubleshooting

### Common Issues:
1. **404 Error**: Make sure the repository name matches the `base` in `astro.config.mjs`
2. **Build Fails**: Check the Actions tab in your GitHub repository for error details
3. **Assets Not Loading**: Ensure all asset paths are relative (no leading `/`)

### Manual Deployment Trigger:
You can manually trigger deployment by:
1. Going to the **Actions** tab in your repository
2. Clicking on **Deploy to GitHub Pages** workflow
3. Clicking **Run workflow**

## File Structure Created:
```
drona-intelligence/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── astro.config.mjs            # Updated for GitHub Pages
└── DEPLOYMENT.md               # This guide
```

## Next Steps After Deployment:
1. Test all pages and functionality
2. Update any hardcoded URLs if needed
3. Set up custom domain (optional)
4. Monitor the site performance

## Custom Domain (Optional):
If you want to use a custom domain like `dronaintelligence.com`:
1. Add a `CNAME` file to the `public/` directory with your domain
2. Update the `site` in `astro.config.mjs` to your custom domain
3. Configure DNS settings with your domain provider

Your website is now ready for deployment! 🚀