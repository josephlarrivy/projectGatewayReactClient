import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import EnterEmailVerificationCode from "../pages/EnterEmailVerificationCode";
import Login from "../pages/Login";
import GenerateApiKey from "../pages/GenerateApiKey"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/enterEmailVerificationCode/:emailAddress?/:code?" element={<EnterEmailVerificationCode />} />
      <Route path="/login" element={<Login />} />
      <Route path="/generateApiKey" element={<GenerateApiKey />} />
    </Routes>
  );
};

export default Router;
