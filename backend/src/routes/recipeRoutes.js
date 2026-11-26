import express from "express";
import Recipe from "../models/Recipe.js";
import {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"; // to check JWT

const router = express.Router();

// All recipe routes
router.post("/", authMiddleware, createRecipe);  // protected
router.get("/", getRecipes);                     // public
router.get("/:id", getRecipeById);               // public
router.put("/:id", authMiddleware, updateRecipe); // protected
router.delete("/:id", authMiddleware, deleteRecipe); // protected
router.post("/recipes", async (req, res) => {
  try {
    const { title, ingredients, instructions, tag, imageUrl, createdBy } = req.body;
    if (!title || !ingredients || !instructions || !createdBy) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      tag,
      imageUrl,
      createdBy
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    console.error("Error saving recipe:", err); // Error logging
    res.status(500).json({ error: err.message });
  }
});

export default router;
