import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import Auth from "../../../hoc/auth";
import MainImage from "../LandingPage/Section/MainImage";
import MovieInfo from "./Section/MovieInfo";

function MovieDetail(props) {
  const { movieId } = useParams();

  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetch(endpointInfo)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);
      });
  }, []);

  return (
    <div>
      {/* Header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      {/* body */}
      <div style={{width: "85%", margin: "1rem auto"}}>
        {/* movie info */}
        <MovieInfo 
            movie={Movie}
        />
      </div>

    </div>
  );
}

export default Auth(MovieDetail, null);
