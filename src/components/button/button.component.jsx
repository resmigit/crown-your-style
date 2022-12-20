import { BaseButton,GoogleSignInButton, InvertedButton } from './button.styles';
//import './button.styles.scss';

/* inverted
default
google sign-in */

export const Button_Type_Classes ={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted'
};
const getButton = (buttonType = Button_Type_Classes.base) =>(
    {
        [Button_Type_Classes.base] : BaseButton,
        [Button_Type_Classes.google]:GoogleSignInButton,
        [Button_Type_Classes.inverted] :InvertedButton
    }[buttonType]
)
const Button =({children,buttonType,...otherProps})=>{
    const CustomButton  = getButton(buttonType);
    return(
        <div>
            <CustomButton {...otherProps}>{children}</CustomButton>
        </div>
    );
}
export default Button;