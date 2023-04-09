const express = require("express");
const cors = require("cors");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const httpStatus = require("http-status");
const admin = require("firebase-admin");

const config = require("./config/config");
const morgan = require("./config/morgan");
const { errorConverter, errorHandler } = require("./api/middlewares/error");
const ApiError = require("./api/helpers/ApiError");

const app = express();

if (config.env !== "test") {
	app.use(morgan.successHandler);
	app.use(morgan.errorHandler);
}

// parsing json data
app.use(express.json());

// parsing urlencoded data
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// enable cors
app.use(cors());

// Welcome route
app.get("/", async (req, res, next) => {
	return res.status(httpStatus.OK).json({
		code: httpStatus.OK,
		status: httpStatus[200],
		message: "Hi welcome to Zairza Backend",
		data: null,
	});
});

require("./api/routes/index")(app);

// sending back 404 for any unknown api request
app.use((req, res, next) => {
	next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError , if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = { app };
