import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Card, Spinner, Alert } from "react-bootstrap";

const Offer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await fetch(
          `https://offers-api.digistos.com/api/offers/${id}`,
          {
            headers: {
              Accept: "application/json",
              // Add Authorization token
            },
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw { status: response.status, message: data.message };
        }

        setOffer(data);
      } catch (err) {
        if (err.status === 401) {
          setError("Accès non autorisé (401).");
        } else {
          setError("Erreur lors du chargement de l'offre.");
        }
        console.error(err.message || err);
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, [id]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error)
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {error}
      </Alert>
    );

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{offer.name}</Card.Title>
          <Card.Text>
            <strong>Prix :</strong> {offer.price}€
          </Card.Text>
          <Card.Text>
            <strong>Description :</strong> {offer.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Offer;
