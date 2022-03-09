import Footer from './components/Footer';
import styled from "styled-components"
import AppRoutes from './components/AppRoutes';


const Container = styled.div`
width:100%;
height:100vh;
`

const App = () => {
  return (
    <>
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
