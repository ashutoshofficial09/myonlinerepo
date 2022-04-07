import styled from "@emotion/styled";
import React from "react";
import { Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header";
import SideBar from "./sideBar";
import SideBarOption from "./sideBarOption";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppBody>
          <SideBar />

          <Switch>
            <Route path="/" exact>
              {/* chat happens here */}
            </Route>
          </Switch>
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
