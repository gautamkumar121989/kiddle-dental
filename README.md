# 🦷 Kiddle Dental Clinic & Implant Centre

![Deploy to Azure](https://github.com/gautamkumar121989/kiddle-dental/workflows/Deploy%20Kiddle%20Dental%20Clinic%20to%20Azure%20Static%20Web%20Apps/badge.svg)

A modern, responsive dental clinic website built with **React.js** and deployed on **Azure Static Web Apps**.

## 🌐 Live Website
**🔗 [Visit Kiddle Dental Clinic](https://victorious-grass-0e6d90500.1.azurestaticapps.net)**

## 📍 Clinic Information

**📍 Address**: G-62, Rajni Path, PC Colony, RBI Flats Colony, Kankarbagh, Patna, Bihar 800020, India

**📞 Contact**: 
- Phone: [+91 99399 01202](tel:+919939901202)
- Email: [kimikumari@gmail.com](mailto:kimikumari@gmail.com)

**🕒 Office Hours**:
- Monday - Saturday: 10:00 AM - 8:00 PM  
- Sunday: 10:00 AM - 1:00 PM

## 🦷 Dental Services

1. **ROOT CANAL TREATMENT** - Single visit RCT with advanced technology
2. **CROWN & BRIDGE** - Custom restorations for damaged teeth
3. **CHILD DENTISTRY** - Gentle dental care for children
4. **DENTAL IMPLANT** - Permanent tooth replacement solutions
5. **COSMETIC DENTISTRY** - Smile enhancement and beautification
6. **DENTAL BRACES** - Straighten teeth with modern braces
7. **DENTAL & ORAL SURGERY** - Advanced surgical dental procedures
8. **EARLY DIAGNOSIS OF ORAL CANCER** - Preventive screening and early detection
9. **TREATMENT OF ORAL DISEASES** - Comprehensive oral health management
10. **TREATMENT OF GUM DISEASES** - Advanced periodontal treatments

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0, Tailwind CSS 3.3.3
- **Icons**: React Icons 4.10.1
- **Routing**: React Router DOM 6.15.0
- **Hosting**: Azure Static Web Apps
- **CI/CD**: GitHub Actions
- **Region**: East Asia (Optimized for India)

## 📁 Project Structure

```
kiddle/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml    # GitHub Actions deployment
├── client/                              # React frontend
│   ├── public/
│   │   ├── images/services/             # Dental service images
│   │   └── staticwebapp.config.json     # Azure configuration
│   └── src/
│       ├── components/                  # Header, Footer
│       ├── pages/                       # Home, About, Services, etc.
│       └── services/                    # API utilities
└── server/                              # Node.js backend (minimal)
```

## 🚀 Development

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Local Development
```bash
# Clone the repository
git clone https://github.com/gautamkumar121989/kiddle-dental.git
cd kiddle-dental

# Install dependencies
cd client
npm install

# Start development server
npm start
```

### Build for Production
```bash
cd client
npm run build
```

## 🌐 Deployment

### Automatic Deployment (GitHub Actions)
- **Trigger**: Push to `main` or `master` branch
- **Build**: Automatic React build
- **Deploy**: Azure Static Web Apps
- **URL**: Updates automatically

### Manual Deployment
```bash
# Build the app
cd client
npm run build

# Deploy using Azure CLI
az staticwebapp deploy --name kiddledental --resource-group kiddle-dental-rg
```

## 📊 Performance

- ⚡ **Load Time**: < 2 seconds
- 📱 **Mobile Optimized**: 100% responsive
- 🌍 **Global CDN**: Fast worldwide access
- 🔒 **SSL/HTTPS**: Secure by default
- 📈 **Lighthouse Score**: 95+ performance

## 👥 Patient Testimonials

> *"From the moment I arrived, I was impressed by the clear and detailed information provided about my treatment options. Dr Jyotsana took the time to explain everything in a way that was easy to understand."*
> 
> **— Gautam Kumar**

> *"Had a satisfactory experience there. The doctor treats her patients very gently. I had my scaling done and it was handled with care without any haste."*
> 
> **— Satisfied Patient**

## 📊 Clinic Statistics

- ⭐ **5.0** Average Rating
- 👥 **1000+** Happy Patients
- 🏆 **10** Years Experience
- 🦷 **10** Specialized Services

## 🔧 Configuration

### Environment Variables
```bash
# Azure Static Web Apps
AZURE_STATIC_WEB_APPS_API_TOKEN=your_deployment_token

# Optional: Custom domain
CUSTOM_DOMAIN=kiddledental.com
```

### Azure Static Web Apps Configuration
See `client/public/staticwebapp.config.json` for routing and performance settings.

## 📱 Features

- ✅ **Responsive Design**: Works on all devices
- ✅ **Fast Loading**: Optimized images and code
- ✅ **SEO Optimized**: Better search rankings
- ✅ **Accessible**: Screen reader friendly
- ✅ **Progressive**: Modern web standards

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For website issues or clinic appointments:
- **Technical**: Create an issue on GitHub
- **Appointments**: Call [+91 99399 01202](tel:+919939901202)
- **Email**: [kimikumari@gmail.com](mailto:kimikumari@gmail.com)

---

**🦷 Built with ❤️ for better dental care in Patna, Bihar**

*Proudly serving the community with modern dental solutions and compassionate care.*
