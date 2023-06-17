import { Routes, Route } from "react-router-dom";

import React from "react";
import Signup from "../Page/Signup";
import Login from "../Page/Login";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
