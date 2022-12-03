import './button.styles.scss';

/* inverted
default
google sign-in */

const Button_Type_Classes ={
    google:'google-sign-in',
    inverted:'inverted'
}

const Button =({children,buttonType,...otherProps})=>{
    return(
        <div>
            <button className={`button-container ${Button_Type_Classes[buttonType]}`}
            {...otherProps}>{children}</button>
        </div>
    );
}
export default Button;