import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    height : 250px;
    display: flex;
    flex-direction: column;
    align-items : center;
    justify-content: center ;
    width :600px; 
  
   border-width :1px;
   border-color :darkgrey;
   border-style: solid; 

`

export const FormContainer =styled.form`    
    height : 100px;
    min-width : 500px;    
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top :20px;
`