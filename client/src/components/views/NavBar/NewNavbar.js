import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./NewNavbar.module.css";
import LoggedInUser from "../LoggedInUser/LoggedInUser";

const NewNavbar = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handlePost = (e) => {
    if (!user.userData.isAuth) {
      navigate("/login");
    } else {
      navigate("/favorite");
    }
  };

  const handleSignIn = (e) => {
    navigate("/login");
  };

  return (
    <>
      <nav
        className={styles.navbar}
      >
        <div className={styles.logo}>
          <a href="/">MovieStar</a>
        </div>
        <div className={styles.navbarElementWrapper}>
          <button
            type="button"
            className={styles.postRegister}
            onClick={handlePost}
          >
            즐겨찾기
          </button>
          {user.userData && !user.userData.isAuth ? (
            <button
              type="button"
              className={styles.login}
              onClick={handleSignIn}
            >
              로그인
            </button>
          ) : (
            <LoggedInUser />
          )}
        </div>
      </nav>
    </>
  );
};

export default NewNavbar;
