import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPages from "./pages/LandingPages";
import LoginPages from "./pages/LoginPages";
import InsomniaPages from "./pages/InsomniaPages";
import DepressionPages from "./pages/DepressionPages";
import AnxietyPages from "./pages/AnxietyPages";
import ConselingPages from "./pages/ConselingPages";
import ThanksPages from "./pages/ThanksPages";
import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setIsLogin(true);
        setLoading(false);
        return;
      }

      setIsLogin(false);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-2xl title font-bold "
        style={{ background: "./src/assets/img/bg.jpg" }}
      >
        Loading . . .
      </div>
    );
  }

  return (
    <BrowserRouter>
      {isLogin ? (
        <Routes>
          <Route path="/home" element={<LandingPages />}></Route>
          <Route path="*" element={<LandingPages />}></Route>
          <Route path="/insomnia" element={<InsomniaPages />}></Route>
          <Route path="/depression" element={<DepressionPages />}></Route>
          <Route path="/anxiety" element={<AnxietyPages />}></Route>
          <Route path="/conseling" element={<ConselingPages />}></Route>
          <Route path="/thanks" element={<ThanksPages />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPages />}></Route>
          <Route path="*" element={<LoginPages />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
