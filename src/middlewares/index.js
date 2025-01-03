const errorMiddleware = require("../middlewares/error.middleware");
const notFoundMiddleware = require("../middlewares/not-found.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const parseIntMiddleware = require("../middlewares/parse-int.middleware");
const cacheMiddleware = require("../middlewares/parse-int.middleware");

module.exports = {
    notFoundMiddleware,
    errorMiddleware,
    authMiddleware,
    parseIntMiddleware,
    cacheMiddleware
}