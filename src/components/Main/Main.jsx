import React, { Component } from "react";
import "./Main.css";
import Header from "../Header/Header";
import LoginButton from "../Button/LoginButton";
import WriteUpButton from "../Button/WriteUpButton";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <div className="Main-content">
          <h1>
            <b>유</b>용한 <b>사</b>이트 <b>공</b>유합니다.
          </h1>
        </div>
        <div className="main-button">
          <LoginButton name="로그인" />
        </div>
      </div>
    );
  }
}

export default Main;
