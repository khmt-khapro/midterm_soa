const userRoute = require("./user.route")
const createError = require("../utils/error-handling/createError");
const { logErrorMiddleware } = require("../utils/error-handling/errorHandler");

const initRoute = (app) => {
    // app.use("/api/auth", authRoute);
    app.use("/api/user", userRoute);
    // app.use("/api/post", postRoute);
    // app.use("/api/upload", uploadRoute);

    app.use("*", (req, res, next) => {
        const message = `Cant not find ${req.originalUrl}`;
        next(new createError.NotFound({ message }));
    });

    app.use(logErrorMiddleware);
};

module.exports = initRoute;
