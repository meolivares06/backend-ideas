const {createContainer, asClass, asValue, asFunction} = require('awilix');

// config layer
const config = require('../config');

// services layer
const {HomeService, Home2Service, UserService, IdeaService, CommentService} = require('../services');

// controllers layer
const {HomeController, Home2Controller} = require('../controllers');

// routes layer
const {HomeRoutes, Home2Routes} = require('../routes/index.routes');
const Routes = require('../routes');

// Models layer
const {userModel, ideaModel, commentModel} = require('../models');

// Repositories layer
const {UserRepository, IdeaRepository, CommentRepository} = require('../repositories');

// App Layer
const app = require('./');

const container = createContainer();

container.register({
    // repositories
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    // models
    User: asValue(userModel),
    Idea: asValue(ideaModel),
    Comment: asValue(commentModel),
    // services
    HomeService: asClass(HomeService).singleton(),
    Home2Service: asClass(Home2Service).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    // controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    Home2Controller: asClass(Home2Controller.bind(Home2Controller)).singleton(),
    // routes
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    Home2Routes: asFunction(Home2Routes).singleton(),
    // configurations
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
});
module.exports = container;
