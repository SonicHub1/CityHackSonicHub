import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import Chat from "./screens/Chat";
import FeedScreen from "./screens/FeedScreen";
import MapScreen from "./screens/MapScreen";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
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
                <Route path="/chat" element = {<Chat />}/>
                <Route path="/search" element = {<Search />}/>

              </Routes>
            </SideBar>
        </BrowserRouter>
      </Row>
    </Container>
  );
};

export default App;
