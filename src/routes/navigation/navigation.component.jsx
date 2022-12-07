import {Fragment,useContext} from 'react';
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {UserContext} from '../../contexts/user.context';
import {signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';


const Navigation =() =>{
  const {currentUser}=useContext(UserContext);
  //const {currentUser,setCurrentUser}=useContext(UserContext);
   //console.log(currentUser);
  /*  const signOutHandler=async()=>{
      await signOutUser();
      setCurrentUser(null);
   } */
    return(
      <Fragment>
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
          <CartDropdown></CartDropdown>
        </div>
        <Outlet></Outlet>
      </Fragment>
    );
  }
  export default Navigation;
  