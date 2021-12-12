import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import EventHandling from "./Components/eventhandling";
import Gallery from "./Components/gallery";
import Header from "./Components/header";
import Home from "./Components/home"; // import every component here in root folder
import Login from "./Components/Login page";
import Productlist from "./Components/productlist";
import Signup from "./Components/signup";
import { useState } from "react";
import { ProductProvider } from "./productContext";
import ManageUsers from "./Components/manageUsers";
// import Login from './Components/Login page';

function App() {
  const [darkMode, setdarkMode] = useState(false);

  const myTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#390053",
      },

      background: {
        paper: "#2a3024",
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <ProductProvider>
        <BrowserRouter>
          <Header darkMode={darkMode} setdarkMode={setdarkMode}></Header>
          <Route path="/event" component={EventHandling} />
          <Route path="/home" component={Home} /> {/* <Route></Route> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/browse" component={Productlist} />
          <Route path="/manageUsers" component={ManageUsers} />
        </BrowserRouter>
        {/* <Login></Login> */}
        {/* <login></login>  assignment work  */}
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
