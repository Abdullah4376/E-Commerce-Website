import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import {login, logout} from './features/productSlice.js'
import Header from './components/Header.jsx';

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
        <main className='mt-[13vh] font-inter'>
          <Outlet />
        </main>
    </>
  ) : null
}

export default App
