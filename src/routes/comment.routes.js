const {Router} = require('express');

module.exports = function({CommentController}) {
    const router = Router();

    router.get("/:ideaId/unique", CommentController.getIdeaComments);
    router.post("/:ideaId", CommentController.create);
    router.get("/:commentId", CommentController.get);
    router.patch("/:commentId", CommentController.update);
    router.delete("/:commentId", CommentController.delete);

    return router;

}