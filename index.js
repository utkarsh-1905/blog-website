const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const session = require("express-session");
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "It is a secret",
    saveUninitialized: true,
    resave: false,
    cookie: {
      secure: false,
      expires: Date.now() + 1000 * 60 * 60 * 3,
    },
  })
);

//Routes

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.render("blogs", { blogs });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/blogs/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
 //TO COUNT UNIQUE VISITORS
  if (!req.session.blogVisitors.id === req.params.id) {
    req.session.blogVisitors = {
      id: req.params.id,
      views: 0,
    };
  } else {
    req.session.blogVisitors.views++;
  }

  res.render("show", { blog });
});

const port = process.env.PORT || 3000;

app.listen(port);
