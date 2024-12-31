const {Router} = require('express');

module.exports = function({AuthController}) {
    const router = Router();

    router.post("/login", AuthController.login);
    router.post("/register", AuthController.register);

    return router;

}