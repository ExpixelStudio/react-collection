import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Details from "./pages/details";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-white text-yellow-600 text-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/details/:id" element={<Details />} /> {/* /:id dynamic page */}
  
        </Routes>
      </div>
    </>
  );
}

export default App;
