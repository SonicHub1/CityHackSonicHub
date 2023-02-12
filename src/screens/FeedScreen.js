import React, { useState, useEffect } from "react";
import FeedCard from "../components/FeedCard";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/FeedScreen.css'
import axios from 'axios';

const FeedScreen = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get("URL NEEDED").then((response) => {
      setData(response.data)
    });
  }, [])

  // const FeedData = [
  //   {
  //     name: "Aryaman",
  //     time: "2h ago",
  //     imageUrl: "../assets/guitar_performance.jpg",
  //   },
  // ];

  

  return (
      <Container fluid className="feed-box">
        <Row>
          <h1>Feed</h1>
        </Row>
        <Row>
          <Col>
            <FeedCard className="col" ></FeedCard>
          </Col>
          <Col>
            <FeedCard className="col"></FeedCard>
          </Col>
          <Col>
            <FeedCard className="col"></FeedCard>
          </Col>
        {/* </Row>

        <Row> */}
          <Col>
            <FeedCard className="col "></FeedCard>
          </Col>
          <Col>
            <FeedCard className="col"></FeedCard>
          </Col>
          <Col>
            <FeedCard className="col"></FeedCard>
          </Col>
        {/* </Row>
        <Row> */}
          <Col>
            <FeedCard className="col "></FeedCard>
          </Col>
          <Col>
            <FeedCard className="col"></FeedCard>
          </Col>
          <Col>
            <FeedCard className="col"></FeedCard>
          </Col>
        </Row>
      </Container>
  );
};

export default FeedScreen;
