import "./ALayouts.css";

import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const HeaderStyle = styled("header")(({ theme }) => ({
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignContent: "center",
  gap: "20px",
  fontSize: "1rem",
}));

function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <HeaderStyle>
        {/* <Logo sx={{ width: 70, height: 70 }} />
        <h1>CoderMovie</h1> */}
      </HeaderStyle>
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
