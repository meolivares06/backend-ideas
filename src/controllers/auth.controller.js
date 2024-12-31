let _authService = null;
class AuthController {
    constructor({AuthService}) {
        _authService = AuthService;
    }
  async login(req, res) {
    // Login logic
    const { username, password } = req.body;
    const credentials = await _authService.signIn({ username, password });
    return res.send(credentials);
  }

  async register(req, res) {
    // Register logic
    const createdUser = await _authService.signUp(req.body);
    return res.status(201).send(createdUser);
  }
}

module.exports = AuthController;