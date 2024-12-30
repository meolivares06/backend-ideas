const errorMiddleware = require("../middlewares/error.middleware");
const notFoundMiddleware = require("../middlewares/not-found.middleware");

module.exports = {
    notFoundMiddleware,
    errorMiddleware
}