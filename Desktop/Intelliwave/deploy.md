# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at: `https://starksido.github.io/intelliwave-solutions`

## Manual Deployment

If you want to deploy manually:

1. **Build your project:**

   ```bash
   npm run build
   ```

2. **This creates a `dist/` folder** with your website files

3. **Configure GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" (created by the workflow)
   - Folder: "/ (root)"

## Your Live Site

Once deployed, your site will be available at:
**https://starksido.github.io/intelliwave-solutions**

## Troubleshooting

- Make sure your repository is public (GitHub Pages free tier)
- Check the Actions tab for build logs
- Verify the `dist/` folder contains `index.html`
