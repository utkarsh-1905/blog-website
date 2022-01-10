const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("../models/blogs");
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/blog-website";

const connectDB = async () => {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connectDB()
  .then(() => console.log("Connected to Database"))
  .catch((e) => new ExpressError(e));

const seeds = async () => {
  await Blog.deleteMany({});
  for (let i = 1; i <= 10; i++) {
    const blog = new Blog({
      title: `hello lorem ipsum lorem lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum${i}`,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla maiores aperiam libero consectetur assumenda architecto inventore id ratione laudantium a dolore esse aut minima fugit quas quis doloribus quaerat. Eveniet incidunt iure ad, animi repellat provident voluptate nesciunt quidem harum quam exercitationem saepe doloremque itaque aperiam deserunt dolores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla maiores aperiam libero consectetur assumenda architecto inventore id ratione laudantium a dolore esse aut minima fugit quas quis doloribus quaerat. Eveniet incidunt iure ad, animi repellat provident voluptate nesciunt quidem harum quam exercitationem saepe doloremque itaque aperiam deserunt dolores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla maiores aperiam libero consectetur assumenda architecto inventore id ratione laudantium a dolore esse aut minima fugit quas quis doloribus quaerat. Eveniet incidunt iure ad, animi repellat provident voluptate nesciunt quidem harum quam exercitationem saepe doloremque itaque aperiam deserunt dolores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla maiores aperiam libero consectetur assumenda architecto inventore id ratione laudantium a dolore esse aut minima fugit quas quis doloribus quaerat. Eveniet incidunt iure ad, animi repellat provident voluptate nesciunt quidem harum quam exercitationem saepe doloremque itaque aperiam deserunt dolores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla maiores aperiam libero consectetur assumenda architecto inventore id ratione laudantium a dolore esse aut minima fugit quas quis doloribus quaerat. Eveniet incidunt iure ad, animi repellat provident voluptate nesciunt quidem harum quam exercitationem saepe doloremque itaque aperiam deserunt dolores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla maiores aperiam libero consectetur assumenda architecto inventore id ratione laudantium a dolore esse aut minima fugit quas quis doloribus quaerat. Eveniet incidunt iure ad, animi repellat provident voluptate nesciunt quidem harum quam exercitationem saepe doloremque itaque aperiam deserunt dolores in! ",
      image:
        "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      edited: false,
      created: new Date(),
    });
    await blog.save();
  }
};

seeds().then(() => {
  mongoose.connection.close();
  console.log("Database populated");
});
