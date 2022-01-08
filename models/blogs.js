const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    image:String,
    body:{
        type:String,
        required: true,
    },
    rating:Number,
    edited:Boolean,
    created:Date,
})

blogSchema.virtual("getDate").get(function (){
    return this.created.toDateString();
})

module.exports = mongoose.model('Blog',blogSchema);