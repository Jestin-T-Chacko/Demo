const Joi = require('joi-react-native');
const validate = async (validateValues,validationSchema) => {
    let errorFlag=null;
    // const validateValues = {
    //   userName: userName,
    //   password: password,
    // };
    await Joi.validate(validateValues, validationSchema, error => {
      errorFlag=error ? error.details : null;
    });
    return errorFlag
  };

export default validate