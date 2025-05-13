import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router";

const OfferList = ({ offers }) => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Liste des Produits</h2>
      <Row>
        {offers.map((offer) => (
          <Col md={4} sm={6} xs={12} key={offer.id} className="mb-4">
            <Link to={`/offre/${offer.id}`} className="text-decoration-none">
              <Card>
                <Card.Body>
                  <Card.Title>{offer.name}</Card.Title>
                  <Card.Text>
                    <strong>{offer.price}€</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OfferList;
