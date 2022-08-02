import Footer from "../components/Footer";
import Main from "../components/Main";
import Nav from "../components/Nav";

function Layout(props) {
  return (
    <>
      <Nav />
      <Main children={props.children} />
      <Footer />
    </>
  );
}

export default Layout;
