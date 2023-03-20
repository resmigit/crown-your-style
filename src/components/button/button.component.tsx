import { FC , ButtonHTMLAttributes} from 'react';
import { BaseButton,GoogleSignInButton, InvertedButton ,ButtonSpinner } from './button.styles';
//import './button.styles.scss';

/* inverted
default
google sign-in */

export enum Button_Type_Classes{
    base ='base',
    google = 'google-sign-in',
    inverted = 'inverted'
};
/* export const Button_Type_Classes ={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}; */
//const getButton = (buttonType = Button_Type_Classes.base)=>(
const getButton = (buttonType = Button_Type_Classes.base) : typeof BaseButton =>(
    {
        [Button_Type_Classes.base] : BaseButton,
        [Button_Type_Classes.google]:GoogleSignInButton,
        [Button_Type_Classes.inverted] :InvertedButton
    }[buttonType]
)

export type ButtonProps = {
    children? : React.ReactNode;
    buttonType ? : Button_Type_Classes;
    isLoading? :boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> ;
//const Button =({children,buttonType,isLoading, ...otherProps})=>{
const Button : FC<ButtonProps> =({children,buttonType,isLoading, ...otherProps}) =>{
    const CustomButton  = getButton(buttonType);
    return(
        <div>
            <CustomButton disabled ={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
            </CustomButton>
        </div>
    );
}
export default Button;