const {Router} = require('express');
const {parseIntMiddleware} = require('../middlewares');

module.exports = function({IdeaController}) {
    const router = Router();

    router.get("/", [parseIntMiddleware], IdeaController.getAll);
    router.post("/", IdeaController.create);
    router.get("/:ideaId", IdeaController.get);
    router.patch("/:ideaId", IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    router.get("/:userId/all", IdeaController.getUserIdeas);
    router.post("/:ideaId/upvote", IdeaController.upvoteIdea);
    router.post("/:ideaId/downvote", IdeaController.downvoteIdea);

    return router;

}