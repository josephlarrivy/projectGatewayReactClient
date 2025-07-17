import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import EnterEmailVerificationCode from "../pages/EnterEmailVerificationCode";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/enterEmailVerificationCode/:emailAddress?/:code?" element={<EnterEmailVerificationCode />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
