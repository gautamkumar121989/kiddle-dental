# 🔐 GitHub Secrets Configuration

## Azure Static Web Apps Deployment Token

**⚠️ IMPORTANT:** Copy this token and add it to your GitHub repository secrets.

### Deployment Token:
```
e6ef5368d7ef6943529f53e15630b932776d52ee52e1dbce487ffc8a5d2de71801-54bfd5c8-eca1-4878-8bc2-6404caff0b1600028150e6d90500
```

## 🎯 How to Add GitHub Secret

### Step 1: Go to Repository Settings
1. Visit: https://github.com/gautamkumar121989/kiddle-dental
2. Click **Settings** tab
3. Go to **Secrets and variables** → **Actions**

### Step 2: Add New Secret
1. Click **"New repository secret"**
2. **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
3. **Secret**: `e6ef5368d7ef6943529f53e15630b932776d52ee52e1dbce487ffc8a5d2de71801-54bfd5c8-eca1-4878-8bc2-6404caff0b1600028150e6d90500`
4. Click **"Add secret"**

## ✅ Verification

Once added, GitHub Actions will automatically:
- ✅ Trigger on every push to `main` branch  
- ✅ Build your React app (`cd client && npm run build`)
- ✅ Deploy to Azure Static Web Apps
- ✅ Update live website: https://victorious-grass-0e6d90500.1.azurestaticapps.net

## 🚀 Test Your Setup

### Make a test change:
```bash
# Navigate to your project
cd "d:\azure labs\kiddle"

# Make a small change (e.g., update README.md)
echo "# Test deployment" >> test-deployment.md

# Commit and push
git add .
git commit -m "Test: GitHub Actions deployment"
git push origin main
```

### Monitor deployment:
1. Go to: https://github.com/gautamkumar121989/kiddle-dental/actions
2. Watch the "Deploy Kiddle Dental Clinic to Azure Static Web Apps" workflow
3. Check if deployment completes successfully

## 🎉 Success Indicators

- ✅ **GitHub Actions Badge**: Shows passing status
- ✅ **Workflow Run**: Completes without errors  
- ✅ **Live Site Updates**: Changes reflect immediately
- ✅ **Azure Integration**: Deployment history visible

---

**🔒 Security Note:** This token is sensitive. Never commit it to your repository or share it publicly.
