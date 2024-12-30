const {Router} = require('express');

module.exports = function({Home2Controller}) {
    const router = Router();

    router.get("/", Home2Controller.index);

    return router;

}