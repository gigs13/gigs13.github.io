import React from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/seo";
import Navbar from "./components/navbar";
import Resumen from "./components/resumen";
import Experiencias from "./components/experiencias";
import Habilidades from "./components/habilidades";
import Footer from "./components/footer";
import data from "./data/data.json";
import { Box, Divider } from "@mui/material";

export const UserContext = React.createContext();

function App() {
  const user = data;

  return (
    <UserContext.Provider value={user}>
      <HelmetProvider>
        <SEO
          title={`${user.name} ${user.lastName}`}
          description="My resume app created with Facebook library."
          name={`${user.name}'s resume`}
          type="website"
        />

        <Box sx={{ p: 1 }}>
          <Navbar />
          <Resumen />
          <Divider variant="middle" />
          <Experiencias />
          <Divider variant="middle" />
          <Habilidades />
        </Box>
        <Footer />
      </HelmetProvider>
    </UserContext.Provider>
  );
}

export default App;
