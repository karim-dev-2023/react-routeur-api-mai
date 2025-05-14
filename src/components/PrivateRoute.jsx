import { useNavigate, Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice.js";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    const isValid = auth && new Date(auth.expiresAt) > new Date();
    if (!isValid) {
      dispatch(logout());
      navigate("/connexion");
      return;
    }
  }, [auth, navigate]);
  return <Outlet />;
};
export default PrivateRoute;
