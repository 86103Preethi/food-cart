import React, { useState, useEffect, useContext } from 'react';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import { cartContext } from './shoppingcart';
import { removeFromCart, clearCart,increaseQuantity,decreaseQuantity } from './cartAction';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  // const { cart, setCart } = useContext(cartContext); 

  // const removeItemFromCart = (id) => {
  //   setCart(cart.filter(product => product.id !== id))             //filter - returns a new array that contains all products except the one with the matching
  // }
  // const clearAllItemsFromCart = () => {
  //   setCart([])
  // }

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearAllItemsFromCart = () => {
    dispatch(clearCart());
  };


  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {                      //reduce -  iterate over an array and accumulate a single result
      const price = parseFloat(product.price.replace(/[$,]/g, ''));
      return total + price * product.quantity;
    }, 0);
  };
  
  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  // Increase quantity of product in the cart
  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  // Decrease quantity of product in the cart
  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
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
            
                {/* Quantity controls */}
                <div className="flex items-center space-x-4 border border-gray-200 p-1 rounded-lg">
                  {product.quantity === 1 ? (
                    <div onClick={() => removeItemFromCart(product.id)}> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </div>
                    ) : (
                    <div> 
                     <button type="button" className="text-xl font-bold text-gray-700" onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                    </div>
                  )}
                  <div>{product.quantity}</div>
                  <button type="button" className="text-xl font-bold text-gray-700" onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                </div>

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
              <h2 className="text-lg font-semibold w-48">Totals:</h2>
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
