// import Recipe from "../models/Recipe.js";

// export const createRecipe = async (req, res) => {
//   try {
//     const { title, description, ingredients, instructions} = req.body;

//     if (!title || !ingredients?.length || !instructions?.length) {
//       return res.status(400).json({ message: "Title, ingredients, and steps are required" });
//     }

//     const recipe = new Recipe({
//       title,
//       description,
//       ingredients,
//       instructions,
//       createdBy: req.user.id
//     });

//     await recipe.save();
//     res.status(201).json(recipe);
//   } catch (error) {
//     console.error("Create recipe error:", error);
//     res.status(500).json({ message: "Failed to create recipe", error: error.message });
//   }
// };

// export const getRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.find().populate("createdBy", "username email");
//     res.json(recipes);
//   } catch (error) {
//     console.error("Get recipes error:", error);
//     res.status(500).json({ message: "Failed to fetch recipes", error: error.message });
//   }
// };

// export const getRecipeById = async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id).populate("createdBy", "username email");
//     if (!recipe) return res.status(404).json({ message: "Recipe not found" });
//     res.json(recipe);
//   } catch (error) {
//     console.error("Get recipe error:", error);
//     res.status(500).json({ message: "Failed to fetch recipe", error: error.message });
//   }
// };

// export const updateRecipe = async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) return res.status(404).json({ message: "Recipe not found" });

//     if (recipe.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to update this recipe" });
//     }

//     Object.assign(recipe, req.body);
//     await recipe.save();
//     res.json(recipe);
//   } catch (error) {
//     console.error("Update recipe error:", error);
//     res.status(500).json({ message: "Failed to update recipe", error: error.message });
//   }
// };

// export const deleteRecipe = async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) return res.status(404).json({ message: "Recipe not found" });

//     if (recipe.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to delete this recipe" });
//     }

//     await recipe.deleteOne();
//     res.json({ message: "Recipe deleted successfully" });
//   } catch (error) {
//     console.error("Delete recipe error:", error);
//     res.status(500).json({ message: "Failed to delete recipe", error: error.message });
//   }
// };

import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions } = req.body;
    if (!title || !ingredients?.length || typeof instructions !== 'string' || instructions.trim() === '') {
      return res.status(400).json({ 
        message: "Title, ingredients, and instructions must be provided." 
      });
    }

    const recipe = new Recipe({
      title,
      description,
      ingredients,
      instructions, 
      createdBy: req.user.id
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    console.error("Create recipe error:", error);
    res.status(500).json({ message: "Failed to create recipe", error: error.message });
  }
};

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("createdBy", "username email");
    res.json(recipes);
  } catch (error) {
    console.error("Get recipes error:", error);
    res.status(500).json({ message: "Failed to fetch recipes", error: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("createdBy", "username email");
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    console.error("Get recipe error:", error);
    res.status(500).json({ message: "Failed to fetch recipe", error: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    if (recipe.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to update this recipe" });
    }

    Object.assign(recipe, req.body);
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    console.error("Update recipe error:", error);
    res.status(500).json({ message: "Failed to update recipe", error: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    if (recipe.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this recipe" });
    }

    await recipe.deleteOne();
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error("Delete recipe error:", error);
    res.status(500).json({ message: "Failed to delete recipe", error: error.message });
  }
};

