//import {useContext} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../store/cart/cart.selector';
import { CartDropDownContainer
        ,EmptyMessage
        ,CartItems} from './cart-dropdown.styles';   
import { useCallback        
       /*  , useState  
        ,useMemo    */    
        } from 'react';
//import './cart-dropdown.styles.scss';

/* const sleep = ( milliseconds : number) : void => {
    var start = new Date().getTime();
    for(var i = 0 ; i < 1e7 ; i++){
       if( new Date().getTime() - start > milliseconds)
        break;
    }
}
 */
const CartDropdown =()=>{
    //const {cartItems} =useContext(CartContext); 
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    /* const [temp,setTemp] = useState('A');
    const goToCheckoutHandler =() =>{
        navigate('/checkout');
    } */
    const goToCheckoutHandler = useCallback(()=>{
        navigate('/checkout');
       //console.log(temp);
    },[]);//[temp]) ;
   // const[count , setCount] = useState(0);

 /*    const hundredCount = useMemo(() =>{
        console.log('start');
        sleep(2000);
        console.log('end');
        return 100+count;
    },[count]); */
    //const val = hundredCount();
    return(
        <CartDropDownContainer>
            {/* {val} */}
           {/* hundredCount */}
           { <CartItems>
            {
                cartItems.length ?(cartItems.map((item)=> (
                    <CartItem key={item.id} cartItem={item}/>
                ))):
                (<EmptyMessage>Your Cart Is Empty</EmptyMessage>)
            }                           
            </CartItems>}
            {<Button onClick= {goToCheckoutHandler}>GO TO CHECKOUT</Button>}
            {/* Button onClick= {() => setCount(count +1)}>GO TO CHECKOUT</Button> */}
            {/* <Button onClick= {()=>setTemp('B')}>Update</Button> */}
        </CartDropDownContainer>
    );
}
export default CartDropdown;