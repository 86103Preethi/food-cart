// cartReducer.jsx
const initialState = {
    cart: [],
    totalQuantity: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingProduct = state.cart.find((item) => item.id === action.payload.id);
        let updatedCart;
        if (existingProduct) {
            updatedCart = state.cart.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
           updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
        }
        const totalQuantity = updatedCart.reduce((total, product) => total + product.quantity, 0);
        return {
        ...state,
        cart: updatedCart,
        totalQuantity,
        };

      case 'REMOVE_FROM_CART':
        const updatedCartAfterRemoval = state.cart.filter((item) => item.id !== action.payload);
        const newTotalQuantityAfterRemoval = updatedCartAfterRemoval.reduce((total, product) => total + product.quantity, 0);
        return {
          ...state,
          cart: updatedCartAfterRemoval,
          totalQuantity: newTotalQuantityAfterRemoval,
        };
  
      case 'CLEAR_CART':
        return {
          ...state,
          cart: [],
          totalQuantity: 0,
        };

      case 'INCREASE_QUANTITY' :
        const increase = state.cart.map((item) => item.id === action.payload ? {...item,quantity:item.quantity+1} : item)
        const increasetotalQuantity = increase.reduce((total, product) => total + product.quantity, 0);
        return {
          ...state,
          cart:increase,
          totalQuantity:increasetotalQuantity,
        } 

      case 'DECREASE_QUANTITY':
        const decrease = state.cart.map((item) =>item.id === action.payload && item.quantity > 1? {...item,quantity:item.quantity - 1 }: item)
        const deacreasetotalQuantity = decrease.reduce((total, product) => total + product.quantity, 0);
        return {
          ...state,
          cart: decrease,
          totalQuantity:deacreasetotalQuantity,
        };  

      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  