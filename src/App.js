import React from "react";
import { Button } from "react-bootstrap";


const SideBar = () => {
  return (
    <>
      <Button>Home</Button>
      <Button>Search</Button>
      <Button>Chat</Button>
      <Button>Profile</Button>
    </>
  );
};

const MainPage = () => {
  return (
    <>
      <h1>Main page goes here</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <SideBar></SideBar>
      <MainPage></MainPage>
    </>
  );
};

export default App;
