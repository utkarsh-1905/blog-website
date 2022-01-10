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
    views:Number,
})

blogSchema.virtual("getDate").get(function (){
    return this.created.toDateString();
})

blogSchema.virtual("getDescription").get(function (){
    return this.body.substring(0, 150);
})

module.exports = mongoose.model('Blog',blogSchema);