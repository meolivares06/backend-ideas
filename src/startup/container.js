const {createContainer, asClass, asValue, asFunction} = require('awilix');

// config layer
const config = require('../config');

// Models layer
const {User, Idea, Comment} = require('../models');

// services layer
const {HomeService, Home2Service, UserService, IdeaService, CommentService, AuthService} = require('../services');

// controllers layer
const {HomeController, Home2Controller, UserController, IdeaController, CommentController, AuthController} = require('../controllers');

// routes layer
const {HomeRoutes, Home2Routes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes} = require('../routes/index.routes');
const Routes = require('../routes');

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
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
    // services
    HomeService: asClass(HomeService).singleton(),
    Home2Service: asClass(Home2Service).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    // controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    Home2Controller: asClass(Home2Controller.bind(Home2Controller)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(UserController)).singleton(),
    CommentController: asClass(CommentController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    
    // routes
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    Home2Routes: asFunction(Home2Routes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    // configurations
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
});
module.exports = container;
