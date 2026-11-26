import { useState } from "react";
import "./AddBlog.css";

function AddBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogTags, setBlogTags] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(URL.createObjectURL(e.target.files[0]));
      setCoverImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", blogTitle);
    data.append("content", blogContent);
    data.append("tags", blogTags);
    if (coverImageFile) data.append("image", coverImageFile);
    data.append("userId", localStorage.getItem("userId")); // assuming login saves userId

    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      body: data,
    });

    alert("Blog Published!");
    setBlogTitle("");
    setBlogContent("");
    setBlogTags("");
    setCoverImage(null);
    setCoverImageFile(null);
  };

  return (
    <div className="add-blog-container">
      <h1>Share Your Cooking Blog</h1>

      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blog Title</label>
          <input
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="form-group">
          <label>Cover Image (optional)</label>
          <input type="file" onChange={handleImageChange} />
          {coverImage && (
            <img src={coverImage} alt="Preview" className="preview-image" />
          )}
        </div>

        <div className="form-group">
          <label>Blog Content</label>
          <textarea
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            placeholder="Share your cooking experiences, tips, or stories..."
            required
          />
        </div>

        <div className="form-group">
          <label>Tags / Categories (optional)</label>
          <input
            type="text"
            value={blogTags}
            onChange={(e) => setBlogTags(e.target.value)}
            placeholder="e.g., Tips, Reviews, Quick Tricks"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="publish-btn">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
  