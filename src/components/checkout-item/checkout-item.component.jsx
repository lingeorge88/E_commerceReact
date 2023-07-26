import {CheckoutItemContainer, ImageContainer,Name, Quantity, Arrow, Value, Price, RemoveButton}from'./checkout-item.styles.jsx';
import {React, useContext} from 'react';
import { CartContext} from '../../contexts/cart.context';

const CheckOutItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity } = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <Name> {name} </Name>
        <Quantity>
            <Arrow onClick={removeItemHandler }> &#10134; </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={ addItemHandler }> &#10133; </Arrow> 
            </Quantity>
        <Price> {price} </Price>
        <RemoveButton onClick={clearItemHandler}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckOutItem;