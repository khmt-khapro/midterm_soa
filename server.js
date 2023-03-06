const express = require("express");
const { logErrorMiddleware, logError, isOperationalError } = require("./utils/error-handling/errorHandler");
const httpLogger = require("./utils/logger/httpLogger");
const logger = require("./utils/logger/logger");
const connectDB = require("./configs/mongodb");
const { verifyToken } = require("./utils/verifyToken");
const signAccessToken = require("./utils/generateToken");
const createError = require("./utils/error-handling/createError");
const initRoute = require("./routes/index.route")
require("dotenv").config();

const app = express();

app.use(httpLogger);
initRoute(app)

// app.get("/", (req, res, next) => {
//   const token = signAccessToken(123, "admin")
//   logger.debug('This is the "/" route.');
//   res.status(200).json({ token });
// });

// app.get("/boom", (req, res, next) => {
//   try {
//     throw new Error("Wowzassss!");
//   } catch (error) {
//     // logger.error("Whooops! This broke with error: ", error);
//     // next(new BaseError("not found", 404, true, "user not found, boom"));
//     next(new createError.NotFound())
//   }
// });

app.use(logErrorMiddleware);
// app.use(returnError);

connectDB();

app.listen(3000, () => logger.info("Express.js listening on port 3000."));

// Catch All Unhandled Promise Rejections
process.on("unhandledRejection", (error) => {
  throw error;
});

// Catch All Uncaught Exceptions
process.on("uncaughtException", (error) => {
  logError(error);

  if (!isOperationalError(error)) {
    process.exit(1);
  }
});
