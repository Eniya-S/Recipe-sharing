import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.post("/blogs", async (req, res) => {
  try {
    const { title, content, createdBy } = req.body;
    const blog = new Blog({ title, content, createdBy });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
