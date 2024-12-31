let _commentService = null;
class CommentController {
    constructor({ IdeaService }) {
        _commentService = IdeaService;
    }

    async create(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const createdComment = await _commentService.createComment(body, ideaId);

        return res.status(201).send(createdComment);
    }

    async get(req, res) {
        const { commentId } = req.params;
        const comment = await _commentService.get(commentId);
        return res.send(comment);
    }

    async getAll(req, res) {
        const comments = await _commentService.getAll();
        return res.send(comments);
    }

    async update(req, res) {
        const { body } = req;
        const { commentId } = req.params;
        const updatedComment = await _commentService.update(commentId, body);
        return res.send(updatedComment);
    }

    async delete(req, res) {
        const { commentId } = req.params;
        const deletedComment = await _commentService.delete(commentId);
        return res.send(deletedComment);
    }

    async getIdeaComments(req, res) {
        const { ideaId } = req.params;
        const comments = await _commentService.getIdeaComments(ideaId);
        return res.send(comments);
    }

    /*async create(req, res) {
        const { body } = req;
        const createdUser = await _ideaService.create(body);
        return res.status(201).send(createdUser);
    }*/
}

module.exports = CommentController;