import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../store/slice";
import { useNavigate } from "react-router";


const Logout = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      // (1) Appel API pour notifier la déconnexion
     const response = await fetch("https://offers-api.digistos.com/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // (2) Suppression du token côté frontend
      dispatch(logout(response));
      
      // (3) Redirection vers la page de login
      navigate("/connexion");
    };

    handleLogout();
  }, []);

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default Logout;
