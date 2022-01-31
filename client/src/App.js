import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NewNavbar from "./components/views/NavBar/NewNavbar";
import MovieDetail from "./components/views/MovieDetail/MovieDetail";
import FavoritePage from "./components/views/FavoritePage/FavoritePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NewNavbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/favorite" element={<FavoritePage />} />
          <Route exact path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
