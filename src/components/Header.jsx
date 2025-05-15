import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import "../assets/styles/Header.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
function Header() {
  const location = useLocation();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData && new Date(authData.expiresAt) > new Date()) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [location]);

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
          {isConnected ? (
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
