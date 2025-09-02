# Kiddle Dental Clinic & Implant Centre Website

A modern, responsive website for Kiddle Dental Clinic built with React.js, Node.js, Express, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first approach, works on all devices
- **Full-Stack**: React frontend with Node.js/Express backend
- **Services Management**: Display dental services with filtering
- **Appointment Booking**: Online appointment scheduling system
- **Contact Forms**: Contact form with validation
- **API Integration**: RESTful API for data management

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Axios for API calls
- React Icons

### Backend
- Node.js
- Express.js
- CORS middleware
- Helmet for security
- Joi for validation
- Nodemailer for email services

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kiddle
```

2. Install dependencies for all packages:
```bash
npm run install-all
```

3. Start the development servers:
```bash
npm run dev
```

This will start:
- Frontend development server on http://localhost:3000
- Backend API server on http://localhost:5000

### Individual Commands

**Frontend (React):**
```bash
cd client
npm start       # Start development server
npm run build   # Build for production
npm test        # Run tests
```

**Backend (Node.js):**
```bash
cd server
npm run dev     # Start with nodemon (development)
npm start       # Start production server
```

## Project Structure

```
kiddle/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── routes/           # Express routes
│   │   ├── appointments.js
│   │   ├── contact.js
│   │   └── services.js
│   ├── index.js          # Server entry point
│   ├── package.json
│   └── .env              # Environment variables
└── package.json          # Root package.json
```

## API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `GET /api/services?category=<category>` - Get services by category

### Appointments
- `POST /api/appointments` - Book new appointment
- `GET /api/appointments/:id` - Get appointment by ID

### Contact
- `POST /api/contact` - Submit contact form

## Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
NODE_ENV=development
# Add database connection string when using a database
# MONGODB_URI=mongodb://localhost:27017/kiddle-dental
```

## Customization

### Branding
- Update colors in `client/tailwind.config.js`
- Replace logo and clinic information in components
- Update contact information throughout the application

### Services
- Modify services data in `server/routes/services.js`
- Add new service categories as needed

### Styling
- Customize Tailwind configuration
- Add custom CSS classes in `client/src/index.css`

## Production Deployment

1. Build the frontend:
```bash
cd client && npm run build
```

2. Set up environment variables for production
3. Deploy backend to your preferred hosting service
4. Deploy frontend build files to a static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions about this project, please contact:
- Email: info@kiddledental.com
- Phone: +1 (555) 123-4567
