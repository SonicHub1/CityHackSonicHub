import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import FeedScreen from "./screens/FeedScreen";
import MapScreen from "./screens/MapScreen";
import Profile from "./screens/Profile";
import './styles/App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/mapscreen" element={<MapScreen />} />
            <Route path="/profile" element={<Profile />} />
          
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>
  );
};

export default App;
