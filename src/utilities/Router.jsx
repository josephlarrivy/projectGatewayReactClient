import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import EnterLoginCode from "../pages/EnterLoginCode";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/enterLoginCode/:emailAddress?/:code?" element={<EnterLoginCode />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
