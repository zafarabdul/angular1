const Joi = require('joi');

const userSchema = Joi.object({
  empId: Joi.number().required(),
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  organizationName: Joi.string()
    .valid('ASBL', 'Spring Helpers')
    .required(),
  typeOfService: Joi.string()
    .valid('maid', 'cook', 'nurse', 'driver')
    .required(),
  image: Joi.string().allow(null, ''),
  languages: Joi.array().items(Joi.string()).required(),
  gender:Joi.string().valid('male','female','other').required(),
  mobile: Joi.string().pattern(/^[0-9]+$/).length(10).required(),
  DocType: Joi.string().valid('Aadhaar', 'PAN', 'Voter ID', 'Passport').allow(null, ''),
  vehicleType: Joi.string().valid('bike', 'auto').allow(null, ''),
  vehicleNum: Joi.string().allow(null, ''),
  file: Joi.string().optional().allow(null, ''),
  joiningDate: Joi.date().required(),
  additionalFiles: Joi.string().optional().allow(null, ''),
});

function validateUserBody(req, res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}

module.exports = validateUserBody;
