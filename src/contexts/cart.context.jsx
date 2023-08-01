import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  };

  return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () =>{},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: 
    return{
      ...state,
      ...payload
    }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      throw new Error(`unhandled type of ${type} in cart reducer`);
  }
}
/*
const isCartOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return state === true ? false : true;
    default:
      return state;
  }
} 
*/
export const CartProvider = ({ children }) => {

const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

const UpdateCartItemsReducer = (newCartItems) => {
  const newCartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity, 0);
  
  const newCartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

  dispatch(
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems, 
      cartTotal: newCartTotal, 
      cartCount: newCartCount,
    }));
}


  const addItemToCart = (productToAdd) =>{
   const newCartItems = (addCartItem(cartItems, productToAdd));
   UpdateCartItemsReducer(newCartItems);
};

  const removeItemFromCart = (cartItemToRemove) =>{
    const newCartItems = (removeCartItem(cartItems, cartItemToRemove));
    UpdateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) =>{
  const newCartItems = (clearCartItem(cartItems, cartItemToClear));
  UpdateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen= (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};