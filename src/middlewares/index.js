const errorMiddleware = require("../middlewares/error.middleware");
const notFoundMiddleware = require("../middlewares/not-found.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

module.exports = {
    notFoundMiddleware,
    errorMiddleware,
    authMiddleware
}