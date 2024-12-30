const {createContainer, asClass, asValue, asFunction} = require('awilix');

// config layer
const config = require('../config');

// services layer
const {HomeService} = require('../services');

// controllers layer
const {HomeController} = require('../controllers');

// routes layer
const {HomeRoutes} = require('../routes/index.routes');
const Routes = require('../routes');

// App Layer
const app = require('./');
const container = createContainer();

container.register({
    HomeService: asClass(HomeService).singleton(),
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
});
module.exports = container;
