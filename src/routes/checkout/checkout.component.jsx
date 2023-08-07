import {React} from 'react';
import { useSelector } from 'react-redux';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import {Total, CheckoutContainer, CheckoutHeader, HeaderBlock}from './checkout.styles.jsx';

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
     const cartTotal = useSelector(selectCartTotal);

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