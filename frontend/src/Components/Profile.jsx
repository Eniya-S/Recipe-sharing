import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [userBlogs, setUserBlogs] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    // Fetch user's recipe posts
    fetch('/api/user/posts')
      .then(res => res.json())
      .then(data => setUserPosts(data));

    // Fetch user's blog posts
    fetch('/api/user/blogs?userId=${localStorage.getItem("userId")}')
      .then(res => res.json())
      .then(data => setUserBlogs(data));

    // Fetch posts liked by user
    fetch('/api/user/liked-posts')
      .then(res => res.json())
      .then(data => setLikedPosts(data));
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-title">Your Dashboard</h2>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h3>Your Posts</h3>
          {userPosts.length === 0 && userBlogs.length === 0 ? (
            <p className="empty-msg">No posts or blogs yet.</p>
          ) : (
            <div className="posts-list">
              {/* Recipe Posts */}
              {userPosts.map(post => (
                <div className="post-card" key={`post-${post.id}`}>
                  {post.image && <img src={post.image} alt={post.title} className="post-image" />}
                  <div className="post-content">
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    <span className="post-type">Recipe</span>
                  </div>
                </div>
              ))}
              {/* Blog Posts */}
              {userBlogs.map(blog => (
                <div className="post-card" key={`blog-${blog.id}`}>
                  {blog.image && <img src={blog.image} alt={blog.title} className="post-image" />}
                  <div className="post-content">
                    <h4>{blog.title}</h4>
                    <p>{blog.content}</p>
                    <span className="post-type">Blog</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="dashboard-section">
          <h3>Posts You Liked</h3>
          {likedPosts.length === 0 ? (
            <p className="empty-msg">You haven't liked any posts yet.</p>
          ) : (
            <div className="posts-list">
              {likedPosts.map(post => (
                <div className="post-card" key={post.id}>
                  {post.image && <img src={post.image} alt={post.title} className="post-image" />}
                  <div className="post-content">
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;