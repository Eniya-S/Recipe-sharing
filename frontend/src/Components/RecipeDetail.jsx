import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetail() {
  // Use useParams to get the :id from the URL
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setError("Failed to load recipe details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]); // Re-run effect if the ID changes

  if (loading) {
    return <div>Loading recipe...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  // Display the full recipe details
  return (
    <div className="recipe-detail-container">
      <h1>{recipe.title}</h1>
      <p className="author">By {recipe.createdBy?.username || "Anonymous"}</p>
      <hr />
      
      <h2>Ingredients</h2>
      <ul>
        {/* Assuming ingredients is an array of strings as per your model */}
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p className="instructions-text">{recipe.instructions}</p> 

      {/* Optional: Display Description, Tag, etc. */}
      {recipe.description && <p>Description: {recipe.description}</p>}
    </div>
  );
}