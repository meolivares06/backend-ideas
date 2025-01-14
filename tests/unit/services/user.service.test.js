const {UserRepository} = require('../../../src/repositories');
const {User} = require('../../../src/models');
let {UserModelMock: {user,users}} = require('../../mocks/user');


describe("User Service Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Should find a user by id", async () => {
        const _userRepository = new UserRepository({ User });
        jest.spyOn(_userRepository, "get").mockResolvedValue(user);

        const expected = await _userRepository.get(user._id);
        expect(expected).toMatchObject(user);

        // otra variante
        /*_userRepository.get.mockReturnValue(user);
         const _userService = new UserService({UserRepository});
         const expected = await _userService.get(user._id);
         expect(expected).toMatchObject(user)*/
    });

    it("Should find a user by username", async () => {
        const _userRepository = new UserRepository({ User });
        jest.spyOn(_userRepository, "getUserByUsername").mockResolvedValue(user);

        const expected = await _userRepository.getUserByUsername(user.username);
        expect(expected).toMatchObject(user);
    });

    it("Should return the list of users", async () => {
        const _userRepository = new UserRepository({ User });
        jest.spyOn(_userRepository, "getAll").mockResolvedValue(users);

        const expected = await _userRepository.getAll();
        expect(expected).toMatchObject(users);
    });
})