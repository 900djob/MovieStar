import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../../Config";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../../../_actions/user_actions";
import Auth from "../../../hoc/auth";
import styles from "./LandingPage.module.css";
import MainImage from "./Section/MainImage";

const LandingPage = () => {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
        setMainMovieImage(res.results[0]);
      });
  }, []);

  return (
    <>
      <div style={{ width: "100%", margin: "0" }}>
        {/* main image */}
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        )}

        <div style={{ width: "85%", margin: "1rem auto" }}>
          <h2>Movies by latest</h2>
          <hr />
          {/* movie grid card */}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Load More</button>
        </div>
      </div>
    </>
  );
};

export default Auth(LandingPage, null);
