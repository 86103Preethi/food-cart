// cartActions.jsx
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};
  
export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id,
    };
};
  
export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    };
};

export const increaseQuantity = (productId) => {
    return {
        type:'INCREASE_QUANTITY',
        payload: productId,
    }
}

export const decreaseQuantity = (productId) => {
    return {
        type:'DECREASE_QUANTITY',
        payload: productId,
    }
}

export const wishList = (product) => {
    return {
        type:'WISH_LIST',
        payload:product,
    }
}

export const removewishList = (product) => {
    return {
        type:'REMOVE_WISH_LIST',
        payload:product,
    }
}