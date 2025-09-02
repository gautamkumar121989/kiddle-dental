const express = require('express');
const router = express.Router();
const Joi = require('joi');

// Appointment booking schema
const appointmentSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  service: Joi.string().required(),
  preferredDate: Joi.date().greater('now').required(),
  preferredTime: Joi.string().required(),
  message: Joi.string().max(500).optional()
});

// In-memory storage (replace with database in production)
let appointments = [];

// GET all appointments (admin only)
router.get('/', (req, res) => {
  res.json(appointments);
});

// POST new appointment
router.post('/', async (req, res) => {
  try {
    const { error, value } = appointmentSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.details.map(d => d.message) 
      });
    }

    const appointment = {
      id: Date.now().toString(),
      ...value,
      status: 'pending',
      createdAt: new Date()
    };

    appointments.push(appointment);

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      appointmentId: appointment.id
    });

  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

// GET appointment by ID
router.get('/:id', (req, res) => {
  const appointment = appointments.find(apt => apt.id === req.params.id);
  
  if (!appointment) {
    return res.status(404).json({ error: 'Appointment not found' });
  }

  res.json(appointment);
});

module.exports = router;
