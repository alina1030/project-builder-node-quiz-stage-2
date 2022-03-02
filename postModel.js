const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        question: 'String'
    }
)

// const Post = mongoose.model('Post',schema);
// module.exports = Post;

const question = mongoose.model('question',schema);
module.exports = question;