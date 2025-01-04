import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/button.tsx";
import Nav from "../components/nav.tsx";
import BottomInfo from "../components/bottomInfo.tsx";
import "../App.css";

export default function Main() {
  return (
    <div>
      <Nav type="logOut" />
      <div>
        <div
          style={{
            position: "absolute",
            top: " 0",
            left: "0",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "90%",
              margin: "100px 0 100px 5%",
              height: "570px",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
