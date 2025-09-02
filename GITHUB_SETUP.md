# 🚀 GitHub Actions Setup Guide

This guide will help you set up automated deployment for your Kiddle Dental Clinic website using GitHub Actions and Azure Static Web Apps.

## ✅ Prerequisites Completed
- [x] GitHub Actions workflow file created (`.github/workflows/azure-static-web-apps.yml`)
- [x] Azure Static Web App deployed (`kiddledental`)
- [x] Website live at: https://victorious-grass-0e6d90500.1.azurestaticapps.net
- [x] GitHub repository created: https://github.com/gautamkumar121989/kiddle-dental
- [x] Code pushed to GitHub successfully

## 🔧 Setup Steps

### Step 1: Create GitHub Repository

1. **Create new repository on GitHub:**
   ```bash
   # Repository created at: https://github.com/gautamkumar121989/kiddle-dental
   Repository name: kiddle-dental
   Owner: gautamkumar121989
   Description: Kiddle Dental Clinic & Implant Centre Website
   Visibility: Public
   ```

2. **Initialize Git in your project:**
   ```bash
   cd "d:\azure labs\kiddle"
   git init
   git add .
   git commit -m "Initial commit: Dental clinic website with Azure deployment"
   ```

3. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/gautamkumar121989/kiddle-dental.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure Azure Deployment Token

1. **Get your Azure Static Web App deployment token:**
   ```bash
   # Get deployment token
   az staticwebapp secrets list --name kiddledental --resource-group kiddle-dental-rg
   ```

2. **Add GitHub Secret:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: [Paste the deployment token from step 1]

### Step 3: Verify Workflow Configuration

Your workflow file is already created at `.github/workflows/azure-static-web-apps.yml` with these settings:

- **Trigger**: Push to `main` branch
- **Node.js**: Version 18.x
- **Build Path**: `client/`
- **Output Path**: `build/`
- **Skip API**: `true` (static site only)

### Step 4: Test Deployment

1. **Make a test change:**
   ```bash
   # Edit any file (e.g., update README.md)
   git add .
   git commit -m "Test: Trigger GitHub Actions deployment"
   git push origin main
   ```

2. **Monitor deployment:**
   - Go to GitHub → Actions tab
   - Watch "Deploy Kiddle Dental Clinic to Azure Static Web Apps" workflow
   - Check deployment status

## 🎯 What Happens Next

### Automatic Process:
1. **Push to main** → GitHub Actions triggers
2. **Build React app** → npm install + npm run build
3. **Deploy to Azure** → Static Web Apps deployment
4. **Update live site** → https://victorious-grass-0e6d90500.1.azurestaticapps.net

### Manual Commands (if needed):
```bash
# Check Azure Static Web App status
az staticwebapp show --name kiddledental --resource-group kiddle-dental-rg

# Manual deployment (backup option)
cd client
npm run build
az staticwebapp deploy --name kiddledental --resource-group kiddle-dental-rg --source-location build/
```

## 🔍 Troubleshooting

### Common Issues:

1. **Deployment Token Error:**
   - Regenerate token: `az staticwebapp secrets reset --name kiddledental --resource-group kiddle-dental-rg`
   - Update GitHub secret with new token

2. **Build Fails:**
   - Check Node.js version in workflow (currently 18.x)
   - Verify `client/package.json` dependencies

3. **Routing Issues:**
   - Check `client/public/staticwebapp.config.json`
   - Ensure React Router routes are configured

### Debug Commands:
```bash
# Check repository status
git status
git log --oneline

# Verify Azure resources
az staticwebapp list --resource-group kiddle-dental-rg
az group show --name kiddle-dental-rg
```

## 📊 Success Indicators

✅ **GitHub Actions Badge**: Shows "passing" status
✅ **Deployment History**: Visible in GitHub Actions tab
✅ **Live Updates**: Changes reflect on live website
✅ **Build Logs**: No errors in workflow execution

## 🔗 Quick Links

- **Live Website**: https://victorious-grass-0e6d90500.1.azurestaticapps.net
- **GitHub Repository**: https://github.com/gautamkumar121989/kiddle-dental
- **GitHub Actions**: https://github.com/gautamkumar121989/kiddle-dental/actions
- **Azure Portal**: https://portal.azure.com (search for "kiddledental")

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs for error details
2. Verify Azure Static Web App is running
3. Ensure deployment token is valid
4. Contact Azure support if needed

---

**🎉 Once setup is complete, every push to `main` branch will automatically deploy your website!**
