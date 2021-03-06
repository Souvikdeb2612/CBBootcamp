const mongoose = require('mongoose');
const reviews = require('./review');

const blogSchema= new mongoose.Schema({
    title: {
        type:String,
        // required:true,
    },
    author: {
        type:String,
    },
    img:{
        type:String,
    },
    text:{
        type:String,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

})


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;