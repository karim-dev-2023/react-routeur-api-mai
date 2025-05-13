import { Route, Routes } from "react-router";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import OfferProList from "./pages/OfferProList.jsx";
import OfferPublicList from "./pages/OfferPublicList.jsx";
import Offer from "./pages/Offer.jsx";
import Logout from "./components/Logout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/deconnexion" element={<Logout />} />
        <Route path="/offres/professionnelles" element={<OfferProList />} />
        <Route path="/offres/publiques" element={<OfferPublicList />} />
        <Route path="/offre/:id" element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
