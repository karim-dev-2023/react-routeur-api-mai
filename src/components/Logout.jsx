import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const handleLogout = async () => {
      try {
        // (1) Appel API pour notifier la déconnexion
        const response = await fetch(
          "https://offers-api.digistos.com/api/auth/logout",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("auth"))?.token
              }`,
            },
          }
        );

        // (2) Suppression du token côté frontend
        localStorage.removeItem('auth');
        // (3) Redirection vers la page de login
        navigate("/connexion");
      } catch (error) {
        console.error(error);
      }
    };

    handleLogout();
  }, []);

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default Logout;
