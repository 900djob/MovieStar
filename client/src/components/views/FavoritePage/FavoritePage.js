import axios from "axios";
import React, { useEffect, useState } from "react";
import Auth from "../../../hoc/auth";
import "./FavoritePage.css";
import { Button, Popover } from "antd";
import { IMAGE_BASE_URL } from "../../../Config";

function FavoritePage() {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
      fetchFavoriteMovie();
  }, []);

  const fetchFavoriteMovie = () => {
    axios
      .post("/api/favorite/getFavoriteMovies", {
        userFrom: localStorage.getItem("userId"),
      })
      .then((res) => {
        if (res.data.success) {
          setFavorites(res.data.favorites);
        } else {
          alert("정보를 가져오는데 실패했습니다.");
        }
      });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId,
      userFrom,
    };
    axios.post("/api/favorite/removeFromFavorite", variables).then((res) => {
      if (res.data.success) {
        fetchFavoriteMovie();
      } else {
        alert("오류가 발생했습니다.");
      }
    });
  };

  const renderCards = Favorites.map((favorite, index) => {
    const content = (
      <div>
        {favorite.moviePost ? (
          <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} />
        ) : (
          "no image"
        )}
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={favorite.movieTitle}>
          <td>{favorite.movieTitle}</td>
        </Popover>
        <td>{favorite.movieRuntime}mins</td>
        <td>
          <Button
            onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h2>Favorite Movies</h2>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <td>Remove from favorites</td>
          </tr>
        </thead>
        <tbody>{renderCards}</tbody>
      </table>
    </div>
  );
}

export default Auth(FavoritePage, true);
