import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Registr from './pages/Registr';
import styled from "styled-components"
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';


const Container = styled.div`
width:100%;
height:100vh;
`

const App = () => {
  return (
    <>
      <Cart />
      <Footer />
    </>
  );
};

export default App;
