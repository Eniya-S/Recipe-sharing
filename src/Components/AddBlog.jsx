import { useState } from "react";
import "./AddBlog.css";

function AddBlog() {
  const [coverImage, setCoverImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="add-blog-container">
      <h1>Share Your Cooking Blog</h1>

      <form className="blog-form">
        <div className="form-group">
          <label>Blog Title</label>
          <input type="text" placeholder="Enter blog title" required />
        </div>

        <div className="form-group">
          <label>Cover Image (optional)</label>
          <input type="file" onChange={handleImageChange} />
          {coverImage && <img src={coverImage} alt="Preview" className="preview-image" />}
        </div>

        <div className="form-group">
          <label>Blog Content</label>
          <textarea placeholder="Share your cooking experiences, tips, or stories..." />
        </div>

        <div className="form-group">
          <label>Tags / Categories (optional)</label>
          <input type="text" placeholder="e.g., Tips, Reviews, Quick Tricks" />
        </div>

        <div className="form-buttons">
          <button type="submit" className="publish-btn">Publish</button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
