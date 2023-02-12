import React, { useState, useEffect } from "react";
import FeedCard from "../components/FeedCard";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/FeedScreen.css'

const FeedScreen = () => {

  return (
      <Container fluid className="feed-box">
        <Row>
          <h1>Feed</h1>
        </Row>
        <Row>
          <Col>
            <FeedCard name="Aryan Kasliwal" time = "2:10pm" imagePath = "https://i.pinimg.com/564x/c3/89/18/c3891830f480d90da165aea310f42c81.jpg" text="Some quick example text to build on the card title and make up the
          bulk of the card's content."></FeedCard>
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
