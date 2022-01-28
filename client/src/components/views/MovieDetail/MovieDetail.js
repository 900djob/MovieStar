import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import Auth from "../../../hoc/auth";
import MainImage from "../LandingPage/Section/MainImage";
import MovieInfo from "./Section/MovieInfo";
import GridCards from "../commons/GridCards";
import { Row } from "antd";


function MovieDetail(props) {
  const { movieId } = useParams();

  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetch(endpointInfo)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });

      fetch(endpointCrew)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.cast)
        setCasts(res.cast)
      });

  }, []);

  const toggleActorView = () => {
    setActorToggle(!ActorToggle)
  }

  return (
    <div>
      {/* Header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      {/* body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* movie info */}
        <MovieInfo movie={Movie} />
        <br />
        {/* actors grid */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button style={{margin: "3rem"}} onClick={toggleActorView}>Toggle Actors View</button>
        </div>
        {ActorToggle && (
          <Row gutter={[35, 35]}>
            {Casts &&
              Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : null
                    }
                    actorName={cast.name}
                    characterName={cast.character}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Auth(MovieDetail, null);
