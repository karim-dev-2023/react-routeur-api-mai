import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="my-3">
          <Outlet />
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
