import React, { useState, createContext , useEffect} from 'react';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Sidebar from './Sidebar';
import Login from './login';
import Wishlist from './Wishlist';

export const cartContext = createContext();

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isVideo, setIsVideo] = useState(false);

  // const location = useLocation();  

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);


  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
 
        {isLoggedIn && (
          <>
            <Sidebar filter={filter} setFilter={setFilter} />
            <Header isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible} setIsLoggedIn={setIsLoggedIn} 
            isVideo={isVideo} setIsVideo={setIsVideo}/>

          </>
        )}

       
        <div>
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Home filter={filter} setFilter={setFilter} isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible} isVideo={isVideo} setIsVideo={setIsVideo} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
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



