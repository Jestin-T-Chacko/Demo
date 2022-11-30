const Joi = require('joi-react-native');
const validationSchema={
    loginSchema:{
        userName:  Joi.string().label('Username').email().required(),
        password: Joi.string()
        .label('Password')
        .required()
    },
    registerSchema:{
        userName: Joi.string().label('Name').required().min(3),
        email: Joi.string().label('Email-ID').email().required(),
        password: Joi.string()
        .label('Password')
        .required()
        //.regex(/^[a-zA-Z0-9]{3,30}$/)
        .min(6)
        .max(14),
        confirmPassword: Joi.any()
          .label('Confirm Password')
          .valid(Joi.ref('password'))
          .required()
          .options({language: {any: {allowOnly: 'must match Password'}}}),
      },
      phoneValidation:{
        phone:Joi.number()
        .required()
       // .regex(/^[0]?[789]\d{9}$/)
      }
}
export default validationSchema;