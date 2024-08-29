import React from "react";
import "../APage.css";

import { useForm } from "react-hook-form";

import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { Typography } from "@mui/material";
import { FormProvider } from "../../components/form";

const LoginPage = () => {
  const defaultValues = {
    username: "Tester01",
    password: "123",
  };

  const methods = useForm({ defaultValues });

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    let from = location.state?.from?.pathname || "/";
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.login(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <>
      <div
        className="loginHeader"
        style={{ backgroundImage: `url("assets/WallpaperDog-20493433.jpg")` }}
      ></div>

      <div className="formWrapper">
        <FormProvider methods={methods} onSubmit={handleSubmit}>
          <Typography className="titleLogin" variant="h3" mb={3}>
            Sign In
          </Typography>

          <div className="userDataContent">
            <label>
              Username: <input name="username" type="text" />
            </label>{" "}
            <label>
              Password: <input name="password" type="password" />
            </label>{" "}
          </div>
          <button className="btnLogin" type="submit">
            Login
          </button>
        </FormProvider>
      </div>
    </>
  );
};

export default LoginPage;
