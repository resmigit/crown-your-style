import {Fragment,useContext} from 'react'; 
//import {Outlet,Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
//import {UserContext} from '../../contexts/user.context';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CartContext } from '../../contexts/cart.context';
import {signOutUser } from '../../utils/firebase/firebase.utils';
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles'
//import './navigation.styles.scss';


const Navigation =() =>{
  // const {currentUser}=useContext(UserContext);
 // const currentUser = useSelector((state)=>state.user.currentUser);
  const currentUser = useSelector(selectCurrentUser);
  const{isCartOpen} = useContext(CartContext);
  //const {currentUser,setCurrentUser}=useContext(UserContext);
   //console.log(currentUser);
  /*  const signOutHandler=async()=>{
      await signOutUser();
      setCurrentUser(null);
   } */
    return(
      <Fragment>
      <NavigationContainer>      
         <LogoContainer to='/'>
           <CrwnLogo></CrwnLogo>
         </LogoContainer>          
         <NavLinks>
           <NavLink to='/shop'>SHOP</NavLink>         
          {
            currentUser? <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
              :<NavLink to='/auth'>Sign In</NavLink>
          } 
          <CartIcon></CartIcon>   
         </NavLinks> 
         {isCartOpen && <CartDropdown></CartDropdown> }       
       </NavigationContainer>   
   {/*    
       <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo></CrwnLogo>
          </Link>          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
          </div>       
          <div className='nav-links-container'>
          {
            currentUser? <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
             :<Link className='nav-link' to='/auth'>Sign In</Link>
          } 
          <CartIcon></CartIcon>           
          </div>
          {isCartOpen && <CartDropdown></CartDropdown> }
        </div>
    */}
   
        <Outlet></Outlet>
      </Fragment>
    );
  }
  export default Navigation;
  