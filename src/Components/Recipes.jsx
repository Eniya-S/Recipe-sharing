import React, { useState } from "react";
import "./Recipes.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([
    {
      title: "Classic Pancakes",
      description: "Fluffy pancakes made with simple ingredients.",
      tag: "Breakfast",
    },
    {
      title: "Vegan Buddha Bowl",
      description: "A healthy mix of grains, veggies, and plant protein.",
      tag: "Vegan",
    },
    {
      title: "Chocolate Lava Cake",
      description: "Rich and gooey dessert for chocolate lovers.",
      tag: "Dessert",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    tag: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.instructions) {
      alert("Please fill all required fields");
      return;
    }
    const newRecipe = {
      title: formData.title,
      description: formData.instructions.substring(0, 80) + "...",
      tag: formData.tag || "General",
    };
    setRecipes([newRecipe, ...recipes]);
    setFormData({ title: "", ingredients: "", instructions: "", tag: "" });
  };

  return (
    <div>
      <div className = "container">
        {/* Recipe Submission Form */}
        <div className="formCard">
          <h2 className="formHeading">Share Your Recipe</h2>
          <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="title">
              Recipe Name
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter recipe name"
              className="input"
              required
            />

            <label className = "label" htmlFor="ingredients">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="List ingredients..."
              className="textarea"
              required
            />

            <label className = "label" htmlFor="instructions">
              Instructions
            </label>
            <textarea
              id="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Step-by-step instructions..."
              className="textarea"
              required
            />

            <label className = "label" htmlFor="tag">
              Category / Tag
            </label>
            <input
              type="text"
              id="tag"
              value={formData.tag}
              onChange={handleChange}
              placeholder="e.g., Vegan, Dessert, Quick Meal"
              className = "input"
            />

            <button type="submit" class="button">
              Add Recipe
            </button>
          </form>
        </div>

        {/* Recipe List */}
        <section className = "recipeGrid">
          {recipes.map((recipe, index) => (
            <div key={index} className ="recipeCard">
              <h3 className = "cardTitle">{recipe.title}</h3>
              <p className = "cardDesc">{recipe.description}</p>
              <span className = "tag">{recipe.tag}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}