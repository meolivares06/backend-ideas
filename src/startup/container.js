const {createContainer, asClass, asValue, asFunction} = require('awilix');

// config layer
const config = require('../config');

// services layer
const {HomeService} = require('../services');
const {Home2Service} = require('../services');

// controllers layer
const {HomeController} = require('../controllers');
const {Home2Controller} = require('../controllers');

// routes layer
const {HomeRoutes, Home2Routes} = require('../routes/index.routes');
const Routes = require('../routes');

// Models layer
const userModel = require('../models/user.model');
const ideaModel = require('../models/idea.model');
const commentModel = require('../models/comment.model');

// App Layer
const app = require('./');

const container = createContainer();

container.register({
    UserModel: asValue(userModel),
    IdeaModel: asValue(ideaModel),
    CommentModel: asValue(commentModel),

    HomeService: asClass(HomeService).singleton(),
    Home2Service: asClass(Home2Service).singleton(),

    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    Home2Controller: asClass(Home2Controller.bind(Home2Controller)).singleton(),

    HomeRoutes: asFunction(HomeRoutes).singleton(),
    Home2Routes: asFunction(Home2Routes).singleton(),

    router: asFunction(Routes).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
});
module.exports = container;
