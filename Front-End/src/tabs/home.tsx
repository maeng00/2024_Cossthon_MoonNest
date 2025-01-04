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
              width: "89%",
              margin: "100px 0 100px 5%",
              height: "570px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              opacity: "0.6",
            }}
          >
            <img
              src="../main.jpg"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            {/* <video
              autoPlay
              muted
              loop
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            >
              <source src="video/main_video.mp4" type="video/webm" />
              <source src="video/main_video.mp4" type="video/mp4" />
            </video> */}
          </div>

          <div
            style={{
              width: "100vw",
              height: "100vh",
              textAlign: "left",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ zIndex: "2" }}>
              <img
                src="../logo/main_logo.png"
                style={{ width: "1100px", paddingBottom: "70px" }}
              />
              <br />
              <div
                style={{
                  zIndex: "2",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "50px",
                }}
              >
                <div>
                  <Button
                    type="secondary"
                    size="medium"
                    title="Start"
                    onClick={() => {
                      window.location = "/Test";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100vw",
              height: "100vh",
              textAlign: "left",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#aacbc4",
            }}
          >
            <div style={{ width: "80%", padding: "50px", textAlign: "center" }}>
              <h2
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontSize: "24px",
                  color: "#0D2259",
                }}
              >
                MoonNest
              </h2>
              <p
                style={{
                  fontFamily: "Pretendard-Regular",
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                우리 서비스는 아동의 행동 발달을 체계적으로 모니터링하고, 이를
                바탕으로 발달 상태를 진단하여 맞춤형 결과를 제공합니다. 이를
                통해 부모님은 아이의 발달이 정상적으로 진행되고 있는지, 또는
                추가적인 지원이 필요한지를 쉽게 확인할 수 있습니다. 또한,
                아동에게 맞춤형 피드백을 제공하여 성장 과정에서의 중요한
                순간들을 놓치지 않도록 도와드립니다.
              </p>
              <h3
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontSize: "20px",
                  color: "#0D2259",
                  marginTop: "100px",
                }}
              >
                MoonNest 필요성
              </h3>
              <p
                style={{
                  fontFamily: "Pretendard-Regular",
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                아이들의 발달은 중요하고, 그 시작이 빠를수록 많은 도움을 받을 수
                있습니다. 우리는 발달장애를 조기에 진단하고, 아동이 또래 수준에
                맞게 성장하고 있는지 확인할 수 있도록 돕습니다. 생애 초기 발달이
                중요한 만큼, 부모님께서는 아이가 적절한 발달 경로를 따르고
                있는지 점검하며, 필요한 지원을 적시에 제공할 수 있도록
                돕겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
