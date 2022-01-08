const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const campgrounds = require('m:/projects/webdevpractice/yelpcamp/models/campgrounds');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/blog-website';

const connectDB = async () => {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
connectDB()
.then(() => console.log("Connected to Database"))
.catch((e) => new ExpressError(e));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));


//Routes

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/blogs',async (req,res)=>{
    const blogs = await Blog.find();
    res.render('blogs',{blogs});
})

const port = process.env.PORT || 3000;

app.listen(port);