import {useState ,FormEvent} from 'react';
import { useSelector } from 'react-redux';
import {selectCartTotal} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import {StripeCardElement } from '@stripe/stripe-js';
import {Button_Type_Classes} from "../button/button.component";
import { PaymentFormContainer,FormContainer ,PaymentButton } from "./payment-form.styles"; 

const ifValidCardElement = (card: StripeCardElement | null) : card is StripeCardElement => card !== null;

const PaymentForm =() =>{
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment ,setIsProcessingPayment] = useState(false);

    const paymentHandler =async(e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        } 
        setIsProcessingPayment (true);

        const response = await fetch('/.netlify/functions/create-payment-intent',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body :JSON.stringify({amount:amount * 100})
        }).then((res) => res.json());
        const { paymentIntent: {client_secret} } = response;
        //const clientSecret = response.paymentIntent.client_secret;
       // console.log(client_secret);  
       
        const cardDetails = elements.getElement(CardElement);
       //if( cardDetails  === null) return;
       if(!ifValidCardElement(cardDetails)) return;

        const paymentResult = await stripe.confirmCardPayment(client_secret,{
            payment_method :{
                card : cardDetails,//elements.getElement(CardElement),
                billing_details :{
                    name:currentUser ? currentUser.displayName : 'Guest'                    
                }                
            }
        });
        setIsProcessingPayment(false);

        if(paymentResult.error){
            console.log(JSON.stringify(paymentResult.error));
           // alert(JSON.stringify(paymentResult.error));
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded')
            alert('Payment succeeded');
        }
    }; 
       
/*   const checkCardElementExists =()=>{
    console.log('This is now..',document.getElementById('cardElmt'))
    if(document.getElementById('cardElmt') !== null)
        return true;
    else{
        console.log('parent not present..not creating');
        return false;
    }
  } */
    return(        
        <PaymentFormContainer> 
            <FormContainer onSubmit={paymentHandler}> 
                <h2>Credit Card Payment : </h2>
                <CardElement></CardElement>
                 <PaymentButton buttonType={Button_Type_Classes.inverted} isLoading ={isProcessingPayment}>Pay Now</PaymentButton>
            </FormContainer>           
        </PaymentFormContainer> 
    );
}
export default PaymentForm;