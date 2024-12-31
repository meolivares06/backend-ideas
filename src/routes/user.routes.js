const {Router} = require('express');

module.exports = function({UserController}) {
    const router = Router();

    router.get("/", UserController.getAll);
    router.post("/", UserController.create);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    router.get("/:userName/user", UserController.getUserByUsername);

    return router;

}