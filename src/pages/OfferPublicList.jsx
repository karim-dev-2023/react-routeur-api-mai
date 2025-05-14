import { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import OfferList from "../components/OfferList.jsx";

const OfferPublicList = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://offers-api.digistos.com/api/offers/public",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        const { data: offers, message } = await response.json();
        if (!response.ok) {
          throw { status: response.status, message: message };
        }

        setOffers(offers);
      } catch (err) {
        setError("Une erreur est survenue lors du chargement des offres.");
        console.error(err.message || err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  }
  if (error) {
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {error}
      </Alert>
    );
  }

  return <OfferList offers={offers} />;
};

export default OfferPublicList;
