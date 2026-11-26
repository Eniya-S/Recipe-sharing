import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  tag: { type: String },
  imageUrl: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

// ...existing code...
const userId = /* get user ID from auth context, Redux, or localStorage */;
const formData = {
  title,
  ingredients,
  instructions,
  tag,
  createdBy: userId
  // ...other fields...
};
axios.post("/api/recipes", formData)
  .then(res => {/* success logic */})
  .catch(err => {/* error logic */});
// ...existing code...