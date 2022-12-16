import { CartItemContainer,ItemDetails } from './cart-item.styles';
//import './cart-item.styles.scss'

const CartItem=({cartItem})=>{
    const {name,imageUrl,price,quantity}= cartItem;
    return(
        <CartItemContainer>
            <img src={imageUrl} alt= {`${name}`}></img>
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>           
        </CartItemContainer>
    );
}
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