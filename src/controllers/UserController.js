let _userService = null;
class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async create(req, res) {
        const { body } = req;
        const createdUser = await _userService.create(body);
        return res.status(201).send(createdUser);
    }
    async get(req, res) {
        const { userId } = req.params;
        const user = await _userService.get(userId);
        return res.send(user);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const users = await _userService.getAll(pageSize, pageNum);
        return res.send(users);
    }

    async update(req, res) {
        const { body } = req;
        const { userId } = req.params;
        const updatedUser = await _userService.update(userId, body);
        return res.send(updatedUser);
    }

    async delete(req, res) {
        const { userId } = req.params;
        const deletedUser = await _userService.delete(userId);
        return res.send(deletedUser);
    }

    async getUserByUsername(req, res) {
        const { userName } = req.params;
        const user = await _userService.getUserByUsername(userName);
        return res.send(user);
    }
    /*async create(req, res) {
        const { body } = req;
        const createdUser = await _userService.create(body);
        return res.status(201).send(createdUser);
    }*/
}

module.exports = UserController;