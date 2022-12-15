import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer,ShoppingIcon,ItemCount } from './cart-icon.styles';
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
//import './cart-icon.styles.scss';

const CartIcon =()=>{
    const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext);    
    const toggleCartOpen =()=>{
        setIsCartOpen(!isCartOpen);
    }
    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon></ShoppingIcon>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
}
export default CartIcon;