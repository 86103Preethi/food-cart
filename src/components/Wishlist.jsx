import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToCart,removewishList } from './cartActions';
import { useDispatch } from 'react-redux';
import WorkOffIcon from '@mui/icons-material/WorkOff';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist || []);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleremoveClicked = (product) => {
    dispatch(removewishList(product)); 
  }

  return (
    <div style={{ paddingTop: '4rem' }}>
      {wishlist.length === 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-6  items-center flex justify-center gap-3 max-w-4xl mx-auto"> 
          <WorkOffIcon /> 
          Your wishlist is empty.
        </div>
        ) : (
          <div className="grid grid-cols-7 gap-3">
            {wishlist.map((product) => (
              <Card key={product.id} sx={{ maxWidth:400,margin:3}}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={product.img}
                  title="Food Menu"
                />
                <CardContent className='m-0'>
                  <Typography variant="h7" component="div" sx={{m:0,fontWeight:'bold'}}>
                  {product.name.length > 20 ? product.name.substring(0,20)+'...' : product.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', m:0}}>
                  {product.description}
                  </Typography>
                  <h1>Price: {product.price}</h1>
                </CardContent>

                <CardActions className='flex justify-between'>
                  <Button type='button' size="small" style={{color:'#f1356d',background:'antiquewhite',m:0}} onClick={() => addProductToCart(product)}>Add to cart</Button>
                  <FavoriteIcon sx={{fontSize:'25px'}} className='darkPink' onClick={() => handleremoveClicked(product)}/>
                </CardActions>

              </Card>
            ))}
          </div>
        )}
    </div>
  );
};

export default Wishlist;