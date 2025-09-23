import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutPage from "./Components/About";
import AddBlog from "./Components/AddBlog";
import Recipes from "./Components/Recipes";

function App() {
  return (
    <>
      <Navbar />  {/* Navbar visible everywhere */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<AddBlog />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}
export default App;
