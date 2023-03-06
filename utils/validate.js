const Joi = require("joi");

const username = Joi.string().alphanum().required().min(6);
const fullname = Joi.string().required();

const password = Joi.string()
  .required()
  .min(8)
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  .messages({
    "string.pattern.base":
      "Minimum 8 characters, at least one letter, one number and one special character",
  });

const passwordConfirm = Joi.string()
  .required()
  .min(8)
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  .equal(Joi.ref("password"))
  .messages({
    "string.pattern.base":
      "Minimum 8 characters, at least one letter, one number and one special character",
  })
  .error(new Error("Password confirm must equal to password"));

const email = Joi.string()
  .required()
  .email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  });

const signupValidate = (data) => {
  const schema = Joi.object({
    username,
    fullname,
    email,
    password,
    passwordConfirm,
  });

  return schema.validate(data);
};
