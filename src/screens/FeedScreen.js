import React from "react";
import FeedCard from "../components/FeedCard";
import { Container, Row, Col } from "react-bootstrap";

const FeedScreen = () => {
  const FeedData = [
    {
      name: "Aryaman",
      time: "2h ago",
      imageUrl: "../assets/guitar_performance.jpg",
    },
  ];
  return (
      <Container fluid>
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
        </Row>

        <Row>
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
        <Row>
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
