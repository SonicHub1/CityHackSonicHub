import { Button } from "react-bootstrap";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <Button>Home</Button>
        <Button>Search</Button>
        <Button>Chat</Button>
        <Button>Profile</Button>
      </div>
    </>
  );
};

export default SideBar;
