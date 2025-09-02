#!/bin/bash
# Kiddle Dental Clinic - Azure Deployment Script

echo "🦷 Deploying Kiddle Dental Clinic to Azure..."

# Wait for provider registration
echo "Checking Microsoft.Web provider status..."
az provider show -n Microsoft.Web --query "registrationState"

# Create Static Web App
echo "Creating Azure Static Web App..."
az staticwebapp create \
  --name kiddle-dental-clinic \
  --resource-group kiddle-dental-rg \
  --location "East Asia"

# Get deployment token
echo "Getting deployment token..."
DEPLOYMENT_TOKEN=$(az staticwebapp secrets list --name kiddle-dental-clinic --query "properties.apiKey" --output tsv)

echo "Static Web App created! Deployment token retrieved."
echo "Next: Use Azure Static Web Apps CLI to deploy"
echo "📍 Region: East Asia (Singapore) - Optimized for Indian users"
echo "🌐 URL will be: https://kiddle-dental-clinic.azurestaticapps.net"
