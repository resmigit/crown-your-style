import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow
        ,Value,RemoveButton } from './checkout-item.styles';
//import './checkout-item.styles.scss';

const CheckoutItem =({cartItem})=>{
    const{name,imageUrl,price,quantity} = cartItem;
    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartContext);
    const clearItemHandler=()=> clearItemFromCart(cartItem);
    const addItemHandler =()=>addItemToCart(cartItem);
    const removeItemHandler =() => removeItemFromCart(cartItem);
    
    return(
            <CheckoutItemContainer>
                <ImageContainer>
                    <img src={imageUrl} alt={`${name}`}></img>
                </ImageContainer>
                <BaseSpan>{name}</BaseSpan>
                <Quantity>
                    <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                    <Value>{quantity}</Value>
                    <Arrow onClick={addItemHandler}>&#10095;</Arrow>
                </Quantity>
                <BaseSpan>{price}</BaseSpan>
                <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
            </CheckoutItemContainer>
        )
}
export default CheckoutItem;

/* const CheckoutItem =({cartItem})=>{
    const{name,imageUrl,price,quantity} = cartItem;
    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartContext);
    const clearItemHandler=()=> clearItemFromCart(cartItem);
    const addItemHandler =()=>addItemToCart(cartItem);
    const removeItemHandler =() => removeItemFromCart(cartItem);
    
    return(
            <div className='checkout-item-container'>
                <div className='image-container'>
                    <img src={imageUrl} alt={`${name}`}></img>
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>
                    <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                    <div className='arrow' onClick={addItemHandler}>&#10095;</div>
                </span>
                <span className='price'>{price}</span>
                <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
            </div>
        )
    
}
export default CheckoutItem;
 */