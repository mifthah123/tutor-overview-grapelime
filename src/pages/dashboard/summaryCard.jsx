import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./overView.css";

const SummaryCard = () => {
  const cards = [
    {
      title: "Upcoming Tutorials",
      value: 14,
      color: "#0097A7",
    },
    {
      title: "Number of Tutorial Hours Tracked Last Month",
      value: 65,
      color: "#4DD0E1",
    },
    {
      title: "Pending Tutorial Requests",
      value: 6,
      color: "#BDBDBD",
    },
  ];

  return (
    <Row className="g-3 summary-cards">
      {cards.map((card, i) => (
        <Col key={i} lg={4}>
          <Card
            className="summary-card"
            style={{ backgroundColor: card.color }}
          >
            <Card.Body>
              <Card.Title className="summary-title">{card.title}</Card.Title>
              <Card.Text className="summary-value">{card.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SummaryCard;
