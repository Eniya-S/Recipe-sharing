import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";

// ====== DB Connection ======
mongoose
  .connect("mongodb://127.0.0.1:27017/cookingApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// ====== Schemas & Models ======
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  tags: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Blog = mongoose.model("Blog", blogSchema);
const Recipe = mongoose.model("Recipe", recipeSchema);

// ====== App Setup ======
const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

// ====== Multer for File Upload ======
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ====== BLOG ROUTES ======

// Create Blog
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    // Normally you'd get userId from JWT middleware
    const userId = req.body.userId || null;

    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      createdBy: userId,
      image: req.file ? "uploads/" + req.file.filename : null,
    });

    await newBlog.save();
    res.json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ====== PROFILE ROUTES ======

// Get blogs created by logged-in user
app.get("/api/user/blogs", async (req, res) => {
  try {
    // Replace with logged-in user ID from auth middleware
    const userId = req.query.userId || null;

    const blogs = await Blog.find({ createdBy: userId });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get recipe posts created by logged-in user
app.get("/api/user/posts", async (req, res) => {
  try {
    const userId = req.query.userId || null;

    const posts = await Recipe.find({ createdBy: userId });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get liked posts
app.get("/api/user/liked-posts", async (req, res) => {
  try {
    const userId = req.query.userId || null;

    const user = await User.findById(userId).populate("likedPosts");
    res.json(user?.likedPosts || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ====== Start Server ======
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
