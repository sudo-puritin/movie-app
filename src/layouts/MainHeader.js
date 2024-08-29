import * as React from "react";
import "./ALayouts.css";

import Logo from "../components/Logo";

import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const MainHeader = () => {
  // const { isAuthenticated} = useAuth();

  let auth = useAuth();

  function onClickLogout() {
    auth.logout(() => {
      Navigate("/login", { replace: true });
    });
  }

  return (
    <Box
      className="headerContainer"
      style={{
        position: "absolute",
        top: 0,
        zIndex: 10,
        width: "100%",
      }}
    >
      <AppBar className="appBar" position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography
            className="titleLogo"
            variant="h5"
            color="inherit"
            component="div"
          >
            CoderMovie
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Link to="/">
            <Button
              ml={2}
              mr={2}
              className="btn"
              id="navHome"
              variant="h6"
              color="inherit"
            >
              Home
            </Button>
          </Link>

          <Link to="/movie">
            <Button
              ml={2}
              mr={2}
              className="btn"
              id="navMovie"
              variant="h6"
              color="inherit"
            >
              Movie
            </Button>
          </Link>

          <Link to="/tv">
            <Button
              ml={2}
              mr={2}
              className="btn"
              id="navTVSeries"
              variant="h6"
              color="inherit"
            >
              TV Series
            </Button>
          </Link>
          {!auth.isAuthenticated ? (
            <Link to="/login">
              <IconButton
                className="btn"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          ) : (
            <IconButton
              className="btn"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={onClickLogout}
            >
              |
              <LogoutIcon />
              <p className="textSignOut">Sign out</p>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
