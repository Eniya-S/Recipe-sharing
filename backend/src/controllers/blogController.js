import mongoose from "mongoose";
import Blog from "../models/Blog.js";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

export const createBlog = async (req, res) => {
  try {
    const { title, content, createdBy } = req.body;
    const blog = new Blog({ title, content, createdBy });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default Blog;