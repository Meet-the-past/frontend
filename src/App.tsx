import React from "react";
import { Route, Routes } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Mainpage />} />
    </Routes>
  );
}

export default App;
