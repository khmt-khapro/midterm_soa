const jwt = require("jsonwebtoken");

const signAccessToken = (id, role) => {
  const payload = { id, role };
  const secret = process.env.ACCESS_TOKEN_SECRET;
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
};

module.exports = signAccessToken;
