import React, { useState, createContext , useEffect} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Sidebar from './Sidebar';
import Login from './Login';
import Wishlist from './Wishlist';

export const cartContext = createContext();

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // const location = useLocation();  

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  // const isLoginPage = location.pathname === '/login';

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
 
        {isLoggedIn && (
          <>
            <Sidebar filter={filter} setFilter={setFilter} />
            <Header isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible} setIsLoggedIn={setIsLoggedIn}/>
          </>
        )}
       
        <div>
          <Routes>
            {/* <Route path='/' element={<Home filter={filter} setFilter={setFilter} isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible}/>} /> */}
            <Route path='/'
              element={isLoggedIn ? <Home filter={filter} setFilter={setFilter} isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible}/> : <Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login  setIsLoggedIn={setIsLoggedIn}/>} /> 
            <Route path='/wishlist' element={<Wishlist />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}
export default ShoppingCart;