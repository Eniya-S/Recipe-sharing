// import { motion } from "framer-motion";

// function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="hero container">
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <h1>Cook. Share. Inspire.</h1>
//           <p>
//             Discover crowd-favorite recipes, share your own creations, and explore cuisines from around the world —
//             all in one fresh, friendly space.
//           </p>
//           <div className="searchbar">
//             <input placeholder="Search recipes, e.g., 'pasta', 'veg', 'under 20 min'…" />
//             <button className="primary-btn">Search</button>
//           </div>
//         </motion.div>
//       </section>

//       {/* How It Works Section */}
//       <section className="how-it-works container">
//         <h2>How It Works</h2>
//         <div className="grid how-grid">
//           <div className="step">
//             <h3>1. Search Recipes</h3>
//             <p>Find dishes by name, ingredient, or cooking time.</p>
//           </div>
//           <div className="step">
//             <h3>2. Share Your Own</h3>
//             <p>Upload and showcase your favorite recipes.</p>
//           </div>
//           <div className="step">
//             <h3>3. Inspire & Connect</h3>
//             <p>Get reviews, tips, and feedback from the community.</p>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="categories container">
//         <h2>Browse by Categories</h2>
//         <div className="grid categories-grid">
//           <div className="category-card">🍲 Indian</div>
//           <div className="category-card">🍝 Italian</div>
//           <div className="category-card">🍣 Japanese</div>
//           <div className="category-card">🥗 Healthy</div>
//           <div className="category-card">🍰 Desserts</div>
//         </div>
//       </section>

//       {/* Trending Recipes Section */}
//       <section className="trending container">
//         <h2>Trending Recipes</h2>
//         <div className="grid trending-grid">
//           <div className="blog-card">🔥 Butter Chicken</div>
//           <div className="blog-card">🔥 Chocolate Lava Cake</div>
//           <div className="blog-card">🔥 Pani Puri</div>
//           <div className="blog-card">🔥 Sushi Rolls</div>
//         </div>
//       </section>

//       {/* Popular Recipes Section */}
//       <section>
//         <h2>Popular Recipes</h2>
//         <div className="grid recipes">
//           <div className="blog-card">Paneer Butter Masala</div>
//           <div className="blog-card">Chicken Biryani</div>
//           <div className="blog-card">Masala Dosa</div>
//           <div className="blog-card">Gulab Jamun</div>
//         </div>
//       </section>

//       {/* Blogs Section */}
//       <section>
//         <h2>Latest Blogs</h2>
//         <div className="grid blogs">
//           <div className="blog-card">
//             <h3>The Secret to Perfect Rotis</h3>
//             <p>Discover techniques for soft, fluffy rotis every time.</p>
//             <button>Read More</button>
//           </div>
//           <div className="blog-card">
//             <h3>Spices of India</h3>
//             <p>A journey through the fragrant spice markets.</p>
//             <button>Read More</button>
//           </div>
//         </div>
//       </section>

//       {/* Reviews Section */}
//       <section>
//         <h2>Community Reviews</h2>
//         <div className="grid reviews">
//           <div className="blog-card">⭐️⭐️⭐️⭐️⭐️ “Loved the biryani recipe!”</div>
//           <div className="blog-card">⭐️⭐️⭐️⭐️ “Paneer dish turned out amazing.”</div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer>
//         <p>© 2025 Incredible India Food Explorer | Built with ❤️</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>Cook. Share. Inspire.</h1>
          <p>
            Discover crowd-favorite recipes, share your own creations, and explore cuisines from around the world —
            all in one fresh, friendly space.
          </p>
          <div className="searchbar">
            <input placeholder="Search recipes, e.g., 'pasta', 'veg', 'under 20 min'…" />
            <button className="primary-btn">Search</button>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works container">
        <h2>How It Works</h2>
        <div className="grid how-grid">
          <div className="step">
            <h3>1. Search Recipes</h3>
            <p>Find dishes by name, ingredient, or cooking time.</p>
          </div>
          <div className="step">
            <h3>2. Share Your Own</h3>
            <p>Upload and showcase your favorite recipes.</p>
          </div>
          <div className="step">
            <h3>3. Inspire & Connect</h3>
            <p>Get reviews, tips, and feedback from the community.</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories container">
        <h2>Browse by Categories</h2>
        <div className="grid categories-grid">
          <div className="category-card"> Indian</div>
          <div className="category-card"> Italian</div>
          <div className="category-card"> Japanese</div>
          <div className="category-card"> Healthy</div>
          <div className="category-card"> Desserts</div>
        </div>
      </section>

      {/* Trending Recipes Section */}
      <section className="trending container">
        <h2>Trending Recipes</h2>
        <div className="grid trending-grid">
          <div className="blog-card"> <img src="./images/butterchicken.jpg" alt="Butter Chicken" /> <h3>Butter Chicken</h3></div>
          <div className="blog-card"> <img src="./images/choco.jpg" alt="Chocolate Cake" /> <h3>Chocolate Cake</h3></div>
          <div className="blog-card"> <img src="./images/panipuri.jpg" alt="Pani Pri" />Pani Puri</div>
          <div className="blog-card"> <img src="./images/sushi.jpg" alt="Sushi" /><h3>Sushi</h3></div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="recipes container">
        <h2>Popular Recipes</h2>
        <div className="grid recipes">
          <div className="blog-card"><img src="./images/panbut.jpg" alt="Paneer Butter Masala" /> <h3>Paneer Butter Masala</h3></div>
          <div className="blog-card"><img src="./images/chkbir.jpeg" alt="Chicken Biryani" /> <h3>Chicken Biryani</h3></div>
          <div className="blog-card"><img src="./images/md.jpg" alt="Masala Dosa" /> <h3>Masala Dosa</h3></div>
          <div className="blog-card"><img src="./images/jamun.jpg" alt="Gulab Jamun" /> <h3>Gulab Jamun</h3></div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs container">
        <h2>Latest Blogs</h2>
        <div className="grid blogs">
          <div className="blog-card">
            <h3>The Secret to Perfect Rotis</h3>
            <p>Discover techniques for soft, fluffy rotis every time.</p>
            <button>Read More</button>
          </div>
          <div className="blog-card">
            <h3>Spices of India</h3>
            <p>A journey through the fragrant spice markets.</p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews container">
        <h2>Community Reviews</h2>
        <div className="grid reviews">
          <div className="blog-card">“Loved the biryani recipe!”</div>
          <div className="blog-card">“Paneer dish turned out amazing.”</div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 GoDelicious | Built with love</p>
      </footer>
    </div>
  );
}

export default Home;
