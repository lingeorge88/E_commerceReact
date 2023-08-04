import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link} from 'react-router-dom';
import {ReactComponent as CtrlLogo} from '../../assets/game-controller.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CartContext } from '../../contexts/cart.context';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import {signOutUser} from '../../utils/firebase/firebase.utils';


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const {isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CtrlLogo />
        </LogoContainer>
        <NavLinks>
        
          <NavLink to='/shop' className='shop-button nes-btn is-success'>SHOP</NavLink>

          {currentUser ? (
            <NavLink className='signIn-button nes-btn is-warning' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth' className='signIn-button nes-btn is-primary'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
    )
  };

  export default Navigation;