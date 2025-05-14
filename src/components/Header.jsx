import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";
import "../assets/styles/Header.css";
import { useState,useEffect } from "react";
function Header() {
  const location = useLocation(); // Donne accès à l'URL courante ; change à chaque navigation

  const getValidToken = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const isValid = auth && new Date(auth.expiresAt) > new Date();
    return isValid ? auth.token : null;
  };

  const [token, setToken] = useState(getValidToken);

  useEffect(() => {
    setToken(getValidToken());
  }, [location]); // Ce code s’exécutera à chaque fois que l’URL change

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            Accueil
          </Nav.Link>
          <Nav.Link as={NavLink} to="/offres/publiques">
            Offres Publiques
          </Nav.Link>
          <Nav.Link as={NavLink} to="/offres/professionnelles">
            Offres Professionnelles
          </Nav.Link>
          {token ? (
            <Nav.Link as={NavLink} to="/deconnexion">
              Déconnexion
            </Nav.Link>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/inscription">
                Inscription
              </Nav.Link>
              <Nav.Link as={NavLink} to="/connexion">
                Connexion
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;
