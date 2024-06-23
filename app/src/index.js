import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/montserrat";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#64dd17",
    },
    error: {
      main: "#ff3d00",
    },
    success: {
      main: "#2e7d32",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  shape: {
    borderRadius: 8,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
