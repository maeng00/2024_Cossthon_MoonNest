import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../components/nav.tsx";

export default function Test() {
  const [showPopup, setShowPopup] = useState(true);
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [messages, setMessages] = useState([
    "(대근육) 반쯤 뒤집기 +1",
    "(소근육) 두 손 모으기 +1",
    "(대근육) 뒤집기 +1",
    "(대근육) 누워서 발 잡기 +1",
    "(대근육) 뒤집기 +2",
  ]);
  const videoRef = React.useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const timeout = setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, "(대근육) 뒤집기 +3"]);
      }, 37000);

      return () => clearTimeout(timeout);
    }
  }, [isPlaying]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleAnalyze = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(false);
      if (videoRef.current) videoRef.current.play();
      setIsPlaying(true);
    }, 3000);
  };

  return (
    <div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
          onClick={() => setShowPopup(false)}
        >
          <div
            style={{
              position: "relative",
              width: "80vw",
              height: "80vh",
              backgroundColor: "#fff",
              borderRadius: "10px",
              zIndex: "1001",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "20px",
                background: "transparent",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
                color: "#000",
              }}
              onClick={() => setShowPopup(false)}
            >
              ×
            </div>
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: "Pretendard-Bold",
                    fontSize: "40px",
                    marginBottom: "40px",
                  }}
                >
                  Select a Video
                </div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleUpload}
                  style={{ cursor: "pointer" }}
                />
                <div style={{ marginTop: "100px" }}>
                  <button
                    onClick={handleAnalyze}
                    disabled={!videoFile}
                    style={{ marginRight: "10px" }}
                  >
                    Analyze
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Nav type="logOut" />
      <div>
        <div
          style={{
            position: "absolute",
            top: "0",
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
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "65%", height: "100%" }}>
              <div
                style={{
                  width: "90%",
                  height: "400px",
                  backgroundColor: "#000",
                  margin: "70px auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                {videoUrl ? (
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    style={{ width: "100%", height: "100%" }}
                    controls={true}
                  />
                ) : (
                  <p>No video selected</p>
                )}
              </div>
            </div>
            <div style={{ width: "35%", height: "100%" }}>
              <div
                style={{
                  width: "80%",
                  height: "480px",
                  backgroundColor: "#fff",
                  margin: "30px auto",
                  color: "#000",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "20px",
                  border: "5px solid #000",
                  fontFamily: "Pretendard-SemiBold",
                  fontSize: "20px",
                  overflowY: "auto", // 스크롤 가능
                  padding: "10px",
                }}
              >
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }} // 각 메시지에 지연 시간 추가
                    style={{
                      margin: "10px 0",
                      padding: "5px 0",
                    }}
                  >
                    {message}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
