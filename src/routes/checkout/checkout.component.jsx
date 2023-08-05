import {Total, CheckoutContainer, CheckoutHeader, HeaderBlock}from './checkout.styles.jsx';
import {React, useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';


const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
        <CheckoutHeader>

            <HeaderBlock>
            <span>Product</span>
            </HeaderBlock>

            <HeaderBlock>
            <span>Description</span>
            </HeaderBlock>

            <HeaderBlock>
            <span>Quantity</span>
            </HeaderBlock>

            <HeaderBlock>
            <span>Price</span>
            </HeaderBlock>

            <HeaderBlock>
            <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        
            {cartItems.map((cartItem) => {
                return(
                <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                    );
                })}
                <Total>Total:<i className="nes-icon coin is-medium" style={{ marginLeft: '10px' }}></i>{cartTotal} </Total>
        </CheckoutContainer>
  )
}

export default CheckOut;