const express = require('express');
const router = express.Router();
const Joi = require('joi');

// Contact form schema
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]{10,15}$/).optional(),
  subject: Joi.string().min(5).max(200).required(),
  message: Joi.string().min(10).max(1000).required()
});

// In-memory storage (replace with database in production)
let contacts = [];

// POST contact form submission
router.post('/', async (req, res) => {
  try {
    const { error, value } = contactSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.details.map(d => d.message) 
      });
    }

    const contact = {
      id: Date.now().toString(),
      ...value,
      createdAt: new Date()
    };

    contacts.push(contact);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// GET all contacts (admin only)
router.get('/', (req, res) => {
  res.json(contacts);
});

module.exports = router;
