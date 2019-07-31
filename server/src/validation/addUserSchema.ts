import Joi from '@hapi/joi';

export default Joi.object().keys({
  firstName: Joi.string()
    .required()
    .label('First Name')
    .max(30),

  password: Joi.string()
    .required()
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
