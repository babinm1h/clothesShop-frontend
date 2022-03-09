import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/reduxHooks';
import { useEffect } from 'react';
import { checkAuth } from './store/actions/auth';
import Loader from './components/Loader/Loader';


const App = () => {

  const dispatch = useDispatch()
  const { isLoading } = useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  if (isLoading) {
    return <div className="loading_centered"><Loader /></div>
  }

  return (
    <>
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
