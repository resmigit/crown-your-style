import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Routes,Route} from 'react-router-dom';
/* import { onAuthStateChangedListener
  ,createUserDocumentFromAuth 
  ,getCurrentUser} from './utils/firebase/firebase.utils'; */
//import { CreateAction } from './utils/reducer/reducer.util';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { checkUserSession } from './store/user/user.action';
//import { setCurrentUser } from './store/user/user.action';

/* const Shop = () =>{
  return(
    <h1>I am the Shop Page</h1>
  );
} */

const App=()=> {   
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(checkUserSession());
      //getCurrentUser().then((user) =>console.log(user));
  /*   const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
             createUserDocumentFromAuth(user);             
        }
        dispatch(setCurrentUser(user));        
    });
    return unsubscribe; */
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
  return (    
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop/*' element={<Shop/>}></Route> 
        <Route path='auth' element={<Authentication/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
      </Route>                      
    </Routes>     
  );
}

export default App;

/* const App=()=> {   
  return (    
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop/*' element={<Shop/>}></Route> 
        <Route path='auth' element={<Authentication/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
      </Route>                      
    </Routes>     
  );
}

export default App; */
