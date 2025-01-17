const {UserRepository} = require('../../../src/repositories');
const mockingoose = require('mockingoose');
const {User} = require('../../../src/models');
let {UserModelMock: {user,users}} = require('../../mocks/user');

describe("User Repository Tests", () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it("Should return a user by id", async () => {
        const _user = {...user};
        delete _user.password;
        mockingoose(User).toReturn(_user, "findOne");

        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.get(_user._id);

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    });

    it("Should return a user by username", async () => {
        const _user = {...user};
        delete _user.password;
        mockingoose(User).toReturn(_user, "findOne");

        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.getUserByUsername(_user.username);

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    });

    it("Should return a user collection", async () => {
        const _users = users.map(user => {
            delete user.password;
            return user;
        });
        mockingoose(User).toReturn(_users, "find");

        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.getAll();

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_users);
    });

    it("Should update an specific user by id", async () => {
        const _user = {...user};
        delete _user.password;
        mockingoose(User).toReturn(_user, "findOneAndUpdate");
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.update(_user._id, { name: "Mario Olivares 2" });

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    });

    it("Should delete an specific user by id", async () => {        
        mockingoose(User).toReturn(user, "findOneAndDelete");
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.delete(user._id);
        expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
    });
});