import React from "react";
import FeedCard from "../components/FeedCard";


const FeedScreen = () => {
  const FeedData = [
    {
      name:'Aryaman',
      time:'2h ago',
      imageUrl: '../assets/guitar_performance.jpg'
    }
  ]
  return (
    <>
      <h1>feed</h1>
      <FeedCard ></FeedCard>
    </>
  );
};

export default FeedScreen;
