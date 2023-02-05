import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<LogIn />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
