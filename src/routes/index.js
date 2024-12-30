// general routes configuration, inject middlewares etc...
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const {notFoundMiddleware, errorMiddleware} = require('../middlewares');

module.exports = function({ HomeRoutes, Home2Routes }) {
    const router = express.Router();
    const apiRoutes = express.Router();

    // defaults middlewares, before routes logic
    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/home2", Home2Routes);

    router.use("/v1/api", apiRoutes);

    // logic middlewares
    router.use(notFoundMiddleware);
    router.use(errorMiddleware);
    
    return router;
}