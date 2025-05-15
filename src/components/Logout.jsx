import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogout = async () => {
      // (1) Appel API pour notifier la déconnexion
      await fetch("https://offers-api.digistos.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      // (2) Suppression du token côté frontend
      localStorage.removeItem("auth");
      // (3) Redirection vers la page de login
      navigate("/connexion");
    };

    handleLogout();
  }, []);

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default Logout;
