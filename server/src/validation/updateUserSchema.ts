import Joi from '@hapi/joi';

export default Joi.object().keys({
  firstName: Joi.string()
    .label('First Name')
    .max(30),

  lastName: Joi.string()
    .label('Last Name')
    .max(30),

  email: Joi.string()
    .email()
    .label('Email')
    .max(100),

  phone: Joi.string()
    .label('Phone Number')
    .min(11)
    .max(14),

  role: Joi.string()
    .label('Role')
    .valid('farmer', 'buyer', 'admin'),

  streetAddress: Joi.string()
    .label('Street Address')
    .default('')
    .max(254),

  localGovt: Joi.string()
    .label('Local Govt. Area')
    .default('')
    .max(254),

  state: Joi.string()
    .label('State')
    .default('')
    .max(254),

  profilePic: Joi.string()
    .label('Profile Picture')
    .default('')
    .max(254),

  password: Joi.string()
    .label('Password')
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    .options({
      language: {
        string: {
          regex: {
            base:
              'must have at least one lower case letter, one upper case letter and one number'
          }
        }
      }
    })
});
