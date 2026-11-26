import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css"; // Create this CSS file for styling

function Profile() {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState({ username: "Your Name", email: "your@email.com" }); // Replace with actual user data

  useEffect(() => {
    const userId = "USER_ID_HERE"; // Replace with actual user ID logic
    axios.get(`/api/blogs?createdBy=${userId}`)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://ui-avatars.com/api/?name=Your+Name"
          alt="Profile"
          className="profile-avatar"
        />
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
      <div className="dashboard-section">
        <h3>Dashboard</h3>
        <div className="blogs-list">
          <h4>My Published Blogs</h4>
          {blogs.length === 0 ? (
            <p>No blogs published yet.</p>
          ) : (
            blogs.map(blog => (
              <div className="blog-card" key={blog._id}>
                <h5>{blog.title}</h5>
                <p>{blog.content}</p>
                <span className="blog-date">{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;