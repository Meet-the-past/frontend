import UploadPage from "./pages/UploadPage";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResultPage from "pages/ResultPage";
import HistoryPage from "pages/HistoryPage";
import AuthRoute from "./utils/AuthRoute";
import TestUploadPage from "./pages/TestUploadPage";

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute needLogin={true} />}>
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Route>

      <Route element={<AuthRoute needLogin={false} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/" element={<Mainpage />} />
      <Route path="/test-upload" element={<TestUploadPage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  );
}

export default App;
