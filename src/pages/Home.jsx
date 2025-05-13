import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router";

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} className="mb-4">
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title>Pas encore inscrit ?</Card.Title>
              <Link to="/inscription" className="btn btn-primary mt-3">
                S'inscrire
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title>Déjà un compte ?</Card.Title>
              <Link to="/connexion" className="btn btn-secondary mt-3">
                Se connecter
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
