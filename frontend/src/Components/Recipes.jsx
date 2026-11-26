// import React, { useState } from "react";
// import "./Recipes.css";

// export default function Recipes() {
//   const [recipes, setRecipes] = useState([
//     {
//       title: "Classic Pancakes",
//       description: "Fluffy pancakes made with simple ingredients.",
//       tag: "Breakfast",
//     },
//     {
//       title: "Vegan Buddha Bowl",
//       description: "A healthy mix of grains, veggies, and plant protein.",
//       tag: "Vegan",
//     },
//     {
//       title: "Chocolate Lava Cake",
//       description: "Rich and gooey dessert for chocolate lovers.",
//       tag: "Dessert",
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     title: "",
//     ingredients: "",
//     instructions: "",
//     tag: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.ingredients || !formData.instructions) {
//       alert("Please fill all required fields");
//       return;
//     }
//     const newRecipe = {
//       title: formData.title,
//       description: formData.instructions.substring(0, 80) + "...",
//       tag: formData.tag || "General",
//     };
//     setRecipes([newRecipe, ...recipes]);
//     setFormData({ title: "", ingredients: "", instructions: "", tag: "" });
//   };

//   return (
//     <div>
//       <div className = "container">
//         {/* Recipe Submission Form */}
//         <div className="formCard">
//           <h2 className="formHeading">Share Your Recipe</h2>
//           <form onSubmit={handleSubmit}>
//             <label className="label" htmlFor="title">
//               Recipe Name
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Enter recipe name"
//               className="input"
//               required
//             />

//             <label className = "label" htmlFor="ingredients">
//               Ingredients
//             </label>
//             <textarea
//               id="ingredients"
//               value={formData.ingredients}
//               onChange={handleChange}
//               placeholder="List ingredients..."
//               className="textarea"
//               required
//             />

//             <label className = "label" htmlFor="instructions">
//               Instructions
//             </label>
//             <textarea
//               id="instructions"
//               value={formData.instructions}
//               onChange={handleChange}
//               placeholder="Step-by-step instructions..."
//               className="textarea"
//               required
//             />

//             <label className = "label" htmlFor="tag">
//               Category / Tag
//             </label>
//             <input
//               type="text"
//               id="tag"
//               value={formData.tag}
//               onChange={handleChange}
//               placeholder="e.g., Vegan, Dessert, Quick Meal"
//               className = "input"
//             />

//             <button type="submit" class="button">
//               Add Recipe
//             </button>
//           </form>
//         </div>

//         {/* Recipe List */}
//         <section className = "recipeGrid">
//           {recipes.map((recipe, index) => (
//             <div key={index} className ="recipeCard">
//               <h3 className = "cardTitle">{recipe.title}</h3>
//               <p className = "cardDesc">{recipe.description}</p>
//               <span className = "tag">{recipe.tag}</span>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Recipes.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    tag: "",
  });
  const [image, setImage] = useState(null);

  // ✅ Fetch all recipes on load
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/recipes");
        setRecipes(res.data);
      } catch (err) {
        console.error("Error fetching recipes:", err.message);
      }
    };
    fetchRecipes();
  }, []);

  // ✅ Handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ Handle file input
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // ✅ Submit new recipe with image
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.instructions) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const data = new FormData();
      data.append("title", formData.title);
      data.append("ingredients", formData.ingredients);
      data.append("instructions", formData.instructions);
      data.append("tag", formData.tag);
      if (image) data.append("image", image);

      const res = await axios.post("http://localhost:5000/api/recipes", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setRecipes([res.data, ...recipes]);
      setFormData({ title: "", ingredients: "", instructions: "", tag: "" });
      setImage(null);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to add recipe. Did you log in?");
    }
  };

  // ✅ Delete recipe
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecipes(recipes.filter((r) => r._id !== id));
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Delete failed");
    }
  };

  return (
    <div className="container">
      {/* Recipe Form */}
      <div className="formCard">
        <h2 className="formHeading">Share Your Recipe</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label className="label" htmlFor="title">Recipe Name</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter recipe name"
            className="input"
            required
          />

          <label className="label" htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="List ingredients..."
            className="textarea"
            required
          />

          <label className="label" htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Step-by-step instructions..."
            className="textarea"
            required
          />

          <label className="label" htmlFor="tag">Category / Tag</label>
          <input
            type="text"
            id="tag"
            value={formData.tag}
            onChange={handleChange}
            placeholder="e.g., Vegan, Dessert, Quick Meal"
            className="input"
          />

          <label className="label" htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="input"
          />

          <button type="submit" className="button">Add Recipe</button>
        </form>
      </div>

      {/* Recipe List */}
      <section className="recipeGrid">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe._id}`} key={recipe._id} className="recipeCardLink">
            <div className="recipeCard">
              {recipe.imageUrl && (
                <img
                  src={`http://localhost:5000/${recipe.imageUrl}`}
                  alt={recipe.title}
                  className="recipeImage"
                />
              )}
              <h3 className="cardTitle">{recipe.title}</h3>
              <p className="cardDesc">...</p>
              <span className="tag">{recipe.tag}</span>
              <p className="author">By {recipe.createdBy?.username || "Anonymous"}</p>
              <button
                className="deleteBtn"
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(recipe._id);
                }}
              >
                Delete
              </button>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
