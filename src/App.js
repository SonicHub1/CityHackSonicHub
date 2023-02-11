import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import FeedScreen from "./screens/FeedScreen";
import MapScreen from "./screens/MapScreen";
import Profile from "./screens/Profile";
import "./styles/App.css";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <BrowserRouter>
            <SideBar>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/feed" element={<FeedScreen />} />
                <Route path="/mapscreen" element={<MapScreen />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </SideBar>
        </BrowserRouter>
      </Row>
    </Container>
  );
};

export default App;
