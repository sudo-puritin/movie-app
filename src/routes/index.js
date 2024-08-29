import * as React from "react";

import { Routes, Route } from "react-router-dom";

import BlankLayout from "../layouts/BlankLayout";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import LoginPage from "../pages/login/Login";
import NotFoundPage from "../pages/NotFound";
import AuthRequire from "./AuthRequire";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/:category" element={<Catalog />} />
      <Route
        path="/:category/:id"
        element={
          <AuthRequire>
            <Detail />
          </AuthRequire>
        }
      ></Route>

      <Route path="/:category/search/:keyword" element={<Catalog />} />
    </Routes>
  );
};

export default Routers;
