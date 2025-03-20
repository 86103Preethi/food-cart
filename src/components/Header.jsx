import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import leaf from '../assets/food folder/leaf.jpeg';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';


const Header = ({isSidebarVisible,setSidebarVisible,setIsLoggedIn,isVideo,setIsVideo}) => {
  const total = useSelector((state) => state.totalQuantity);
  const navigate = useNavigate(); 
  const [open,setOpen] = useState(false);

  const handleClick = () => {
    setOpen(open === true ? false : true);
  };

  const handleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setOpen(false);
  };

  const handleDisplay = () => {
    setIsVideo(!isVideo);
  }
  

  return (
    <div className='header flex justify-between items-center p-4 font-bold fixed top-0 w-full' style={{ zIndex: 9999 }}>
      <div className='text-lg font-bold flex gap-2 items-center'>
        <span onClick={handleSidebar}>
          {!isSidebarVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
          ):(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
            </svg>
          )}
        </span>
        Foodie
      </div>

      <ul className='flex space-x-4 gap-3 items-end'>
        <li>
          <Link to='/'>Home</Link>
        </li>  
        <li onClick={handleDisplay}>
          <Link > <SmartDisplayIcon/> </Link>
        </li>
        <li>
          <Link to='/cart'>
           <Badge badgeContent={total} color="primary">
             <ShoppingBagIcon/>
            </Badge>
          </Link>
        </li>
        <li>
          <Link onClick={handleClick}>
            <Avatar alt="Preethi" src={leaf} sx={{ width: 24, height: 24 }}/>
            <Menu 
              anchorEl={document.querySelector('img[alt="Preethi"]')}
              open={open}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{ marginTop: '24px' }}
            >
              <MenuItem >Profile</MenuItem>
              <MenuItem >Orders</MenuItem>
              <MenuItem >Wishlists</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Link>
        </li>  
      </ul> 

    </div>
  );
}

export default Header;