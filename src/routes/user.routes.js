const {Router} = require('express');
const {authMiddleware, parseIntMiddleware} = require('../middlewares');
const cacheMiddleware = require('../middlewares/cache.middleware');
const {CACHE_TIME} = require('../helpers');
module.exports = function({UserController}) {
    const router = Router();

    router.get("/", [authMiddleware, parseIntMiddleware, cacheMiddleware(CACHE_TIME.ONE_HOUR)], UserController.getAll);
    router.post("/", UserController.create);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    router.get("/:userName/user", UserController.getUserByUsername);

    return router;

}