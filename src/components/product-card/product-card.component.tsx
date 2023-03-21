//import { useContext } from 'react';
//import { CartContext } from '../../contexts/cart.context';
//import './product-card.styles.scss';
import { FC} from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { ProductCardContainer,Footer,Name,Price } from './product-card.styles';
import Button,{Button_Type_Classes} from '../button/button.component';
import { CategoryItem } from '../../store/categories/category.types';

type ProductCardProps = {
    product : CategoryItem;
}
const ProductCard : FC <ProductCardProps > =({product})=>{
    const{id,name,price,imageUrl} = product;
   // const {addItemToCart} = useContext(CartContext);  
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch() ;
    const addProductToCart =() => dispatch(addItemToCart( cartItems, product));
    return(  
        <ProductCardContainer key={id}>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={Button_Type_Classes.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainer>
)  
}
export default ProductCard;
/* const ProductCard=({product})=>{
    const{id,name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart =() =>addItemToCart(product);
    return(  
        <div className='product-card-container' key={id}>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={Button_Type_Classes.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </div>
)  
}
export default ProductCard; */