import React, { useState, useEffect, useContext } from 'react';
import WorkOffIcon from '@mui/icons-material/WorkOff';
// import { cartContext } from './Shoppingcart';

import { removeFromCart, clearCart } from './cartActions';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  // const { cart, setCart } = useContext(cartContext); 
  // // console.log("cart",cart);

  // const removeItemFromCart = (id) => {
  //   setCart(cart.filter(product => product.id !== id))             //filter - returns a new array that contains all products except the one with the matching
  // }
  // const clearAllItemsFromCart = () => {
  //   setCart([])
  // }

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("cart",cart);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearAllItemsFromCart = () => {
    dispatch(clearCart());
  };


  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {                      //reduce -  iterate over an array and accumulate a single result
      console.log("total",total);
      const price = parseFloat(product.price.replace(/[$,]/g, ''));
      console.log("price",price);
      return total + price * product.quantity;
    }, 0);
  };
  

  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-6  items-center flex justify-center gap-3">
          <WorkOffIcon/> 
          Your cart is empty.
        </div>
        ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
            {cart.map((product) => (
              <div className="flex justify-between items-center border-b pb-4 mb-4" key={product.id}>
                <div className='w-20'>
                  <img src={product.img} alt="Food Menu"  className="object-cover rounded-lg" />
                </div>
                <div>{product.quantity}</div>
                <div className='w-48 flex flex-col'>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <span className="font-bold">{product.price}</span>
                </div>
                <div className=''>
                  <button type='button' className="text-red-500 hover:underline ml-4" onClick={() => removeItemFromCart(product.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="flex justify-between gap-1 w-full">
            {/* <div className="grid grid-cols-4 "> */}
              {/* <button className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
                Checkout
              </button> */}
              <h2 className="text-lg font-semibold w-48">Total:</h2>
              <div className='font-bold w-48'>{calculateTotalQuantity()}</div>
              <div className='font-bold w-48'>$ {calculateTotalPrice()} </div>
              <div className='font-bold w-48 '>
                <button type='button' className="text-red-500 hover:underline ml-4 float-right" onClick={clearAllItemsFromCart}>Remove All</button>
              </div>
            </div>
        </div>
        )}
        


    </div>
  );
};

export default Cart;