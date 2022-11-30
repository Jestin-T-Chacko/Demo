const statusCodes = {
  createdSuccess: 201,
  success: 200,
  partialSuccess: 206,
  deleteSuccess: 204,
  error: 400,
  unauthenticated: 401,
  notFound: 404,
  otpFails: 416,
  notCheckedUser: 417,
  validationError: 422,
  tooManyRequests: 429,
  expired: 410,
  registeredNumber: 409,
  successForbidden: 403,
};

export default statusCodes;
