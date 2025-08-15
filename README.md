# 🚀 Site Update Guide

This guide explains how to update your site at [cosmos-ai.com](https://cosmos-ai.com/) using the automated deployment script.

## Quick Start (TL;DR)
1. Make your changes to the source files
2. Run `./deploy.sh`
3. Wait 2-3 minutes for changes to appear live

## Prerequisites
- Access to the GitHub Codespace or local development environment
- Basic familiarity with terminal/command line

## Step-by-Step Instructions

### 1. Access Your Development Environment
- Open your GitHub Codespace for the `datascienceplus` repository
- Or clone the repo locally: `git clone https://github.com/gcosma/datascienceplus.git`

### 2. Make Your Changes
Edit any files you want to update:
- **Content files**: Update text, images, or data
- **Styling**: Modify CSS files
- **Components**: Edit React components in the `src` folder
- **Configuration**: Update config files as needed

### 3. Test Your Changes (Optional but Recommended)
```bash
npm start
# or
npm run dev
```
This will start a local development server so you can preview your changes before deploying.

### 4. Deploy Your Changes

#### First Time Setup (if needed):
```bash
chmod +x deploy.sh
```

#### Deploy:
```bash
./deploy.sh
```

The script will automatically:
- ✅ Build your site (`npm run build`)
- ✅ Copy build files to the root directory
- ✅ Add all changes to git
- ✅ Commit with timestamp
- ✅ Push to GitHub
- ✅ Display success message

### 5. Verify Deployment
- Wait 2-3 minutes for GitHub Pages to update
- Visit [cosmos-ai.com](https://cosmos-ai.com/) to see your changes live

## Troubleshooting

### ❌ "Permission denied" error
```bash
chmod +x deploy.sh
./deploy.sh
```

### ❌ "Updates were rejected" error
This happens when the remote repository has changes you don't have locally:

```bash
git pull origin main
./deploy.sh
```

### ❌ Merge conflicts
If git pull results in conflicts:
1. Open the conflicted files
2. Resolve conflicts (remove `<<<<<<<`, `=======`, `>>>>>>>` markers)
3. Save files
4. Run `git add .`
5. Run `git commit -m "Resolve merge conflicts"`
6. Run `./deploy.sh`

### ❌ Build errors
If `npm run build` fails:
1. Check the error message
2. Fix any syntax errors in your code
3. Run `npm install` if dependencies are missing
4. Try `./deploy.sh` again

## File Structure
```
datascienceplus/
├── src/                 # Source files (React components, etc.)
├── public/             # Static assets
├── build/              # Generated build files (don't edit directly)
├── deploy.sh           # Deployment script
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## What the Deploy Script Does

The `deploy.sh` script contains:
```bash
#!/bin/bash
echo "🚀 Deploying site updates..."
npm run build          # 1. Build first (creates fresh files)
cp -r build/* .         # 2. Copy build files to root
git add .               # 3. Add all changes to git
git commit -m "Update site: $(date)"  # 4. Commit changes
git push origin main    # 5. Push to GitHub
echo "✅ Site updated! Check https://cosmos-ai.com/ in 2-3 minutes"
```

## Tips for Success

### ✅ Do's
- Always test locally before deploying when possible
- Make small, incremental changes
- Use descriptive commit messages if committing manually
- Keep this README updated if you change the deployment process

### ❌ Don'ts
- Don't edit files in the `build/` folder directly (they get overwritten)
- Don't force push unless absolutely necessary
- Don't deploy without testing if making major changes

## Need Help?
- Check the terminal output for specific error messages
- Ensure all dependencies are installed with `npm install`
- Make sure you're in the correct directory (`/workspaces/datascienceplus`)
- Contact the repository owner if you're stuck

---

**Last Updated**: $(date)  
**Site URL**: [cosmos-ai.com](https://cosmos-ai.com/)  
**Repository**: [github.com/gcosma/datascienceplus](https://github.com/gcosma/datascienceplus)
