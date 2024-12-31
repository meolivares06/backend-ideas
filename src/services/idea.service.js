const BaseService = require('./base.service');
let _ideaRepository = null;

class IdeaService extends BaseService {
  constructor({IdeaRepository}) {
    super(IdeaRepository);
    _ideaRepository = IdeaRepository;
  }

    async getIdeasByAuthor(author) {
        if (!author) {
            const error = new Error();
            error.status = 400;
            error.message = "author must be sent";
            throw error;
        }

        return await _ideaRepository.getIdeasByAuthor(author);
    }
    async getUserIdeas(author) {
      if (!author) {
          const error = new Error();
          error.status = 400;
          error.message = "author must be sent";
          throw error;
      }
      return await this.getIdeasByAuthor(author);
    }

    
    async upvoteIdea(ideaId){
      if (!ideaId) {
        const error = new Error();
        error.status = 400;
        error.message = "ideaId must be sent";
        throw error;
      } 
      const idea = await _ideaRepository.findById(ideaId);
      if (!idea) {
        const error = new Error();
        error.status = 400;
        error.message = "idea does not exist";
        throw error;
      }
      idea.upvotes.push(true);
      return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes });
  }

  async downvoteIdea(ideaId){
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId must be sent";
      throw error;
    } 
    const idea = await _ideaRepository.findById(ideaId);
    if (!idea) {
      const error = new Error();
      error.status = 400;
      error.message = "idea does not exist";
      throw error;
    }
    idea.downvotes.push(true);
    return await _ideaRepository.update(ideaId, { downvotes: idea.downvotes });
  }
}

module.exports = IdeaService;