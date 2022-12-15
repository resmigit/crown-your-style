import {FormInputLabel,Input,Group } from "./form-input.styles";
//import './form-input.styles.scss';

const FormInput =({label,...otherProps}) =>{
    return(
    <Group>
        <Input {...otherProps}></Input>
        {label && 
            (<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>   
            )            
        }        
       
    </Group>   
    )   
}
export default FormInput;

/* const FormInput =({label,...otherProps}) =>{
    return(
    <div className="group">
        <input className="form-input" {...otherProps}></input>
        {label && 
            (<label className={`${otherProps.value.length ? 'shrink' :''} form-input-label`}>{label}</label>   
            )            
        }        
       
    </div>   
    )   
}
export default FormInput; */

