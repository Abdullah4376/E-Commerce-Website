import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import {login, logout} from './features/productSlice.js'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}));
      } else {
        dispatch(logout())
      }
    })
    .catch((e) => console.log('Error Using getCurrentUser in App.jsx', e))
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  ) : null
}

export default App
