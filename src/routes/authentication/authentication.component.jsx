/* import {// auth
        signInWithGooglePopup
        //,signInWithGoogleRedirect
        ,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js'; */
import SignUpForm from '../../components/sign-upform/sign-up-form.component';
/* import { useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth'; */
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';
//import './authentication.styles.scss';

const Authentication =() =>{   
    /* useEffect(()=>{
                  return async()=>{
                    const response = await getRedirectResult(auth);                    
                    if(response){
                        const userDocRef = await createUserDocumentFromAuth(response.user);        
                    }
                    }
                },[]); */

    return(
        <AuthenticationContainer>         
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm> 
        </AuthenticationContainer>   
   /*     <div className='authentication-container'>
           // <h1>Sign in page</h1> 
             //  <button onClick={signInWithGoogleRedirect}>
             //   Sign In With Google Redirect
           // </button> 
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm> 
        </div> */
    );
}
export default Authentication;