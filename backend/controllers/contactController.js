const { saveContactMessage } = require('../services/contactService');

exports.submitContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all fields.' });
  }

  const savedMessage = saveContactMessage({ name, email, message });

  res.status(200).json({
    success: true,
    message: 'Message received successfully.',
    data: savedMessage
  });
};
