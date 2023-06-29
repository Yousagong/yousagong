import "./Header.css";
import { Link } from "react-router-dom";
import "../Button/LoginButton.css";
import LoginButton from "../Button/LoginButton";
import WriteUpButton from "../Button/WriteUpButton";
import { db, authService } from "../../firebase";
import {
  collection,
  connectFirestoreEmulator,
  getDocs,
} from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Stack } from "@mui/material";
import Registration from "../Registration/Registration";

export default function Header() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    authService
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <a className="logo" href="/">
        <h1>유사공</h1>
      </a>
      <li className="menu-list">
        <Link to="/education">
          <ul className="category-list">
            <h4>학습</h4>
          </ul>
        </Link>
        <Link to="/cook">
          <ul className="category-list">
            <h4>요리</h4>
          </ul>
        </Link>
        <Link to="/design">
          <ul className="category-list">
            <h4>디자인</h4>
          </ul>
        </Link>
        <Link to="/community">
          <ul className="category-list">
            <h4>커뮤니티</h4>
          </ul>
        </Link>
      </li>
      <WriteUpButton />
      {user ? (
        <div className="LoginButton" onClick={handleLogout}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" className="login-button">
              로그아웃
            </Button>
          </Stack>
        </div>
      ) : (
        <div className="LoginButton" onClick={handleGoogleLogin}>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              className="login-button"
              onClick={<Registration></Registration>}
            >
              로그인
            </Button>
          </Stack>
        </div>
      )}

      {/* <SignUpButton /> */}
    </div>
  );
}
