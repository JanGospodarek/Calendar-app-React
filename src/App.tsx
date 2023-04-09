import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import { Main } from "./pages/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    complementary: PaletteOptions["primary"];
    back: any;
    initial: any;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0512a6",
      light: "#522ec1",
    },
    complementary: {
      main: "#618a11",
      light: "#9cc12e",
    },
    back: {
      main: "#040B27",
      light: "rgba(68,74,105,0.4)",
      border: "#575c7c",
    },
    secondary: {
      main: "#d96a00",
      light: "#e0c20d",
    },
    initial: {
      main: "#ffffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<LogIn />} />
              <Route path="main" element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
