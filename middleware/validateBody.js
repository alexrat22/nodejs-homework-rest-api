const HttpError = require("../helpers/HttpError");

const validateBody = (validationSchema) => {
  const validate = async (req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name && !email && !phone) {
      next(HttpError(400, "missing fields"));
      next();
    }

    const { error } = validationSchema.validate(req.body);
    if (error) next(HttpError(400, error.message));
    next();
  };

  return validate;
};

module.exports = validateBody;

module.exports = validateBody;
