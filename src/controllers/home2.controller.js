let _home2Service = null;

class Home2Controller {
  constructor({ Home2Service }) {
    _home2Service = Home2Service;
  }

  index(req, res) {
    return res.send(_home2Service.index());
  }
}

module.exports = Home2Controller;