import Mainpage from "./pages/Mainpage";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
    </Routes>
  );
}

export default App;
