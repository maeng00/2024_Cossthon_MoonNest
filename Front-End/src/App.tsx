import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.tsx";
import Home from "./tabs/home.tsx";
import Test from "./tabs/test.tsx";
import Report from "./tabs/report.tsx";
import MyPage from "./tabs/myPage.tsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/report" element={<Report />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
