import {FC , memo} from 'react';
import { CartItemContainer,ItemDetails } from './cart-item.styles';
import {CartItem as TCartItem} from '../../store/cart/cart.types';
//import './cart-item.styles.scss'

type CartItemProps = {
    cartItem : TCartItem;
}

const CartItem :FC<CartItemProps > = memo(({cartItem})=>{
    const {name,imageUrl,price,quantity}= cartItem;
    return(
        <CartItemContainer>
            <img src={imageUrl} alt= {`${name}`}></img>
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x INR {price}</span>
            </ItemDetails>           
        </CartItemContainer>
    );
});
export default CartItem;
/* const CartItem=({cartItem})=>{
    const {name,imageUrl,price,quantity}= cartItem;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt= {`${name}`}></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>           
        </div>
    );
}
export default CartItem; */