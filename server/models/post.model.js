const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userID:{
        type: String,
        required: true,
        minlength: 1,
    },
    bibleVerseTitle:{
        type: String,
        required:true,
    }

})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;