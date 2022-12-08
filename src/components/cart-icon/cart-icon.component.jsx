import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon =()=>{
    const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext);    
    const toggleCartOpen =()=>{
        setIsCartOpen(!isCartOpen);
    }
    return(
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{cartItemCount}</span>
        </div>
    );
}
export default CartIcon;