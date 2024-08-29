import "./App.css";
import "swiper/css";

import { BrowserRouter } from "react-router-dom";

import Routers from "./routes";
import MainHeader from "./layouts/MainHeader";
import MainFooter from "./layouts/MainFooter";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainHeader />
        <Routers />
        <MainFooter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
