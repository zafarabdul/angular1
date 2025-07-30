const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.string()
    .length(24)
    .hex()
    .required()
});

function validateIdWithJoi(req, res, next) {
  const { error } = idSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: '❌ Invalid ID format' });
  }
  next();
}

module.exports = validateIdWithJoi;
