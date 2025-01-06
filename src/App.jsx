import { useState, useEffect } from 'react'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    authService.getUserStatus()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout())
        }
      })
      .catch((err) => {
        console.log("App:GetUserStatus:Error", err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])


  return !Loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className='w-full block'>
        <Header />
        <main>
          {<Outlet />}
        </main>
        <Footer />
      </div>
    </div>  //Loading Shimmer Effects
  ) : null
}

export default App
