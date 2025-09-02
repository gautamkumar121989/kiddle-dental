# 🔐 GitHub Secrets Configuration

## Azure Static Web Apps Deployment Token

**⚠️ IMPORTANT:** Do NOT commit real deployment tokens. The previously committed token has been redacted.

### Deployment Token (REDACTED)
```
REPLACE_WITH_NEW_AZURE_STATIC_WEB_APPS_DEPLOYMENT_TOKEN
```
> Rotate the token immediately (see Token Rotation below) and update the GitHub secret.

## 🎯 How to Add GitHub Secret

### Step 1: Go to Repository Settings
1. Visit: https://github.com/gautamkumar121989/kiddle-dental
2. Click **Settings** tab
3. Go to **Secrets and variables** → **Actions**

### Step 2: Add New Secret
1. Click **"New repository secret"**
2. **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
3. **Secret**: (paste the NEW rotated token from Azure)
4. Click **"Add secret"**

## ✅ Verification

Once added, GitHub Actions will automatically:
- ✅ Trigger on every push to `main` branch  
- ✅ Let Azure Static Web Apps handle the React build process
- ✅ Deploy to Azure Static Web Apps automatically
- ✅ Update live website: https://victorious-grass-0e6d90500.1.azurestaticapps.net

**🔧 Recent Fix Applied**: Simplified workflow configuration for better Azure Static Web Apps integration.

## ♻️ Token Rotation

1. Generate a new token:
```bash
az staticwebapp secrets reset --name kiddledental --resource-group kiddle-dental-rg
az staticwebapp secrets list --name kiddledental --resource-group kiddle-dental-rg
```
2. Copy the new `apiKey` value and update the GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.
3. Force a redeploy:
```bash
echo "rotate token" >> security-log.txt
git add security-log.txt
git commit -m "chore: rotate Azure SWA token"
git push origin main
```
4. Confirm the new workflow run succeeds.
5. (Optional) Purge token from git history if repository was public prior to rotation.

## 🚀 Test Your Setup

```bash
# Navigate to your project
cd "d:\azure labs\kiddle"

# Make a small change
echo "verification" >> deploy-check.txt
git add deploy-check.txt
git commit -m "chore: verify deployment after token rotation"
git push origin main
```

## 🎉 Success Indicators

- ✅ **GitHub Actions Badge**: Passing
- ✅ **Workflow Run**: Succeeds without errors  
- ✅ **Live Site Updates**: Changes visible
- ✅ **Old token**: No longer works

---

**🔒 Security Note:** Never commit secrets. If exposed: rotate, update secret, optionally purge history.
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
- ✅ Let Azure Static Web Apps handle the React build process
- ✅ Deploy to Azure Static Web Apps automatically
- ✅ Update live website: https://victorious-grass-0e6d90500.1.azurestaticapps.net

**🔧 Recent Fix Applied**: Simplified workflow configuration for better Azure Static Web Apps integration.

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
