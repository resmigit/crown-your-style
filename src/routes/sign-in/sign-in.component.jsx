import {// auth
        signInWithGooglePopup
        //,signInWithGoogleRedirect
        ,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js';
import SignUpForm from '../../components/sign-upform/sign-up-form.component';
/* import { useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth'; */

const SignIn =() =>{   
    /* useEffect(()=>{
                  return async()=>{
                    const response = await getRedirectResult(auth);                    
                    if(response){
                        const userDocRef = await createUserDocumentFromAuth(response.user);        
                    }
                    }
                },[]); */
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);        
    }

    return(
        <div>
            <h1>Sign in page</h1>
              {/*  <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button> */}
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
            <SignUpForm></SignUpForm>         
        </div>
    );
}
export default SignIn;