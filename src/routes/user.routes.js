const {Router} = require('express');
const {authMiddleware, parseIntMiddleware} = require('../middlewares');
module.exports = function({UserController}) {
    const router = Router();

    router.get("/", [authMiddleware, parseIntMiddleware], UserController.getAll);
    router.post("/", UserController.create);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    router.get("/:userName/user", UserController.getUserByUsername);

    return router;

}