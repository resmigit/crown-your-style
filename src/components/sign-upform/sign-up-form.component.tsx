import {useState,FormEvent,ChangeEvent} from 'react';
import { useDispatch } from 'react-redux';
import { AuthError,AuthErrorCodes} from 'firebase/auth';
/* import { createAuthUserWithEmailAndPassword
        ,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'; */
import FormInput from '../form-input/form-input';
import { SignUpContainer } from './sign-up-form.styles';
//import './sign-up-form.styles.scss';
import Button from '../button/button.component';
import {signUpStart} from '../../store/user/user.action';
//import { UserContext } from '../../contexts/user.context';

const defaultFormFields={
    displayName:'',
    email : '',
    password : '',
    confirmPassword :''
}

const SignUpForm = ()=>{
    const dispatch = useDispatch();
    const[formFields,setFormFields] =useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
   // console.log(formFields);  
   //const {setCurrentUser}=useContext(UserContext);

    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }
    

    const handleSubmit =async(event :  FormEvent< HTMLFormElement >) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        try{
           // const {user}=await createAuthUserWithEmailAndPassword(email,password);
            //setCurrentUser(user);
           // console.log(user);
           // await createUserDocumentFromAuth(user,{displayName}); 
            //console.log('inside sign-up doc creation')     
            dispatch(signUpStart(email,password,displayName)) ;   
            resetFormFields();
        }
        catch(error){
            if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert('User cannot be created.Email id already in use.');
            }
            else{
                 console.log('user creation encountered an error',error);
            }           
        }
    }
    const handleChange = (event : ChangeEvent< HTMLInputElement>)=>{
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }

    return(
        //<div className='sign-up-container'>
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Signup with your email and password</span>
            <form onSubmit={handleSubmit}>                            
                <FormInput label ="Display Name" type='text' required onChange={handleChange}
                name="displayName" value={displayName}></FormInput>

                <FormInput label="Email" type='email' required onChange={handleChange}
                 name="email" value={email}></FormInput>
               
                <FormInput label="Password" type='password' required onChange={handleChange}
                name="password" value={password}></FormInput>

                <FormInput label="Confirm Password" type='password' required onChange={handleChange}
                name="confirmPassword" value={confirmPassword}></FormInput>

                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
        //</div>
    );
}
export default SignUpForm;