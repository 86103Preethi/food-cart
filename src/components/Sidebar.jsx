import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { Home, NewReleases, History } from '@mui/icons-material';

const Sidebar = ({ isSidebarVisible, setFilter }) => {
  const [activeFilter, setActiveFilter] = useState('all'); 

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
    setActiveFilter(filterType); 
  };

  return (
   
    <Drawer
      className={`${isSidebarVisible ? 'visible' : 'hidden'}`}
      sx={{
        width: 200,
        flexShrink: 0,
        height: '100%',  
        zIndex: 1000, 
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
          top: '48px',
          left:0,
          // color:'#f1356d',
          // backgroundColor: isSidebarVisible ? '#f4f4f4' : 'transparent',
          transition: 'background-color 0.3s ease', 
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem onClick={() => handleFilterChange('all')}
          sx={{
            backgroundColor: activeFilter === 'all' ? '#e0e0e0' : 'transparent',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          <ListItemIcon >
            <Home style={{color:'#f1356d'}}/>
          </ListItemIcon>
          <ListItemText primary="All" />
        </ListItem>

        <ListItem onClick={() => handleFilterChange('latest')}
        sx={{
          backgroundColor: activeFilter === 'Latest' ? '#e0e0e0' : 'transparent',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}>
          <ListItemIcon>
            <NewReleases style={{color:'#f1356d',hover:'antiquewhite'}}/>
          </ListItemIcon>
          <ListItemText primary="Latest" />
        </ListItem>
        
        <ListItem onClick={() => handleFilterChange('old')}
        sx={{
          backgroundColor: activeFilter === 'Old' ? '#e0e0e0' : 'transparent',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}>
          <ListItemIcon>
            <History style={{color:'#f1356d'}}/>
          </ListItemIcon>
          <ListItemText primary="Old" />
        </ListItem>
      </List>

      <Divider />
    </Drawer>

  );
};

export default Sidebar;