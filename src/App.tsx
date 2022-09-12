import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HistoryPage from "pages/HistoryPage";
import AuthRoute from "./utils/AuthRoute";

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute option={true} />}>
        <Route path="/history" element={<HistoryPage />} />
      </Route>

      <Route element={<AuthRoute option={false} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/" element={<Mainpage />} />
    </Routes>
  );
}

export default App;
