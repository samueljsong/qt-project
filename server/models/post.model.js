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
    },
    description:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
    },
    likes:{
        type: Number,
        default: 0
    }

})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;