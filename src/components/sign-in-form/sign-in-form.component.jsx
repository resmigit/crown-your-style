import {useState} from 'react';
import { signInWithGooglePopup
        ,createUserDocumentFromAuth
        ,signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import { SignUpContainer,ButtonsContainer } from './sign-in-form.styles';
//import './sign-in-form.styles.scss';
import Button,{Button_Type_Classes} from '../button/button.component';
//import { UserContext } from '../../contexts/user.context';

const defaultFormFields={    
    email : '',
    password : ''    
}

const SignInForm = ()=>{
    const[formFields,setFormFields] =useState(defaultFormFields);
    const {email,password} = formFields;
    //console.log(formFields);
    //const {setCurrentUser} = useContext(UserContext);

    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async()=>{
        //const {user} = await signInWithGooglePopup();
        await signInWithGooglePopup();
        //await createUserDocumentFromAuth(user);        
    }

    const handleSubmit =async(event) =>{
        event.preventDefault();
    
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);   
           // setCurrentUser(user);    
            resetFormFields();
        }
        catch(error){
            switch(error.code)
                {
                    case 'auth/wrong-password':
                        alert('Incorrect password for email');
                        break;
                    case 'auth/user-not-found':
                        alert('No user associated with this email');
                        break;
                    default:
                        console.log('Error occured '+ error) 
                }                
        }    
       
    }
    const handleChange = (event)=>{
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }
    return(
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign-in with your email and password</span>
            <form onSubmit={handleSubmit}> 
                <FormInput label="Email" type='email' required onChange={handleChange}
                 name="email" value={email}></FormInput>               
                <FormInput label="Password" type='password' required onChange={handleChange}
                name="password" value={password}></FormInput>
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={Button_Type_Classes.google} onClick={signInWithGoogle}>Google Sign in</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
}
export default SignInForm;
/*     return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign-in with your email and password</span>
            <form onSubmit={handleSubmit}> 
                <FormInput label="Email" type='email' required onChange={handleChange}
                 name="email" value={email}></FormInput>               
                <FormInput label="Password" type='password' required onChange={handleChange}
                name="password" value={password}></FormInput>
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={Button_Type_Classes.google} onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm; */