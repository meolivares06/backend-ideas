const mongose = require('mongoose');
const {Schema} = mongose;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true },

});

commentSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongose.model('comment', commentSchema);