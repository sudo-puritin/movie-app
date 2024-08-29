import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";

import "./APage.css";

const NotFoundPage = () => {
  return (
    <Container sx={{ display: "flex", height: "100%", alignItems: "center" }}>
      <Box
        sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}
        className="notFoundBox"
      >
        <Typography variant="h4" paragraph>
          Page not found!
        </Typography>
        <Typography sx={{ color: "white", mb: "1rem" }}>
          Oops, we couldn't find the page you requested.
        </Typography>
        <Button to="/" className="outlineButton" component={RouterLink}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};
export default NotFoundPage;
