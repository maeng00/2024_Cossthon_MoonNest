import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button.tsx";
import "../App.css";

type NavType =
  | "logOut"
  | "main"
  | "community"
  | "joinUs"
  | "dataCenter"
  | "study"
  | "myPage";

export default function Nav(props: NavType) {
  const { type } = props;
  const [currentFocus, setCurrentFocus] = useState("");

  return (
    <div
      style={{
        position: "fixed",
        top: " 0",
        left: "5%",
        width: "90%",
        zIndex: "4",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div style={{ position: "absolute", left: "30px" }}>
          <Link to="/">
            <img
              src="../logo/small_logo.png"
              style={{ width: "150px", marginTop: "3px" }}
            />
          </Link>
        </div>

        <div
          style={{
            position: "absolute",
            right: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <div className="nav_text">Home</div>
          </Link>
          <Link to="/test">
            <div className="nav_text">Test</div>
          </Link>
          <Link to="/report">
            <div className="nav_text">Report</div>
          </Link>
          <Link to="/mypage" style={{ textDecoration: "none" }}>
            <div className="nav_text">MyPage</div>
          </Link>
          <img
            src="../btn/logout_disabled.png"
            style={{
              width: "28px",
              padding: "0 20px",
              cursor: "pointer",
              opacity: "0.8",
            }}
            onClick={() => {
              window.location = "/";
            }}
            onMouseOver={(event) => {
              event.target.src = `../btn/logout_disabled.png`;
            }}
            onMouseOut={(event) => {
              event.target.src = `../btn/logout_disabled.png`;
            }}
          />
        </div>
      </div>
    </div>
  );
}
