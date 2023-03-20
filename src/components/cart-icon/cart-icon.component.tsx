//import { useContext } from 'react';
//import { CartContext } from '../../contexts/cart.context';
import { useDispatch ,useSelector} from 'react-redux';
import { selectIsCartOpen , selectCartCount} from '../../store/cart/cart.selector';
import {setIsCartOpen} from '../../store/cart/cart.action';
import { CartIconContainer,ShoppingIcon,ItemCount } from './cart-icon.styles';
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
//import './cart-icon.styles.scss';

const CartIcon =()=>{
   // const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext); 
    const dispatch = useDispatch() ;
    const isCartOpen =  useSelector(selectIsCartOpen);
    const cartItemCount = useSelector(selectCartCount);

    const toggleCartOpen =()=>{
        dispatch(setIsCartOpen(!isCartOpen));
    }
    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon></ShoppingIcon>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
}
export default CartIcon;