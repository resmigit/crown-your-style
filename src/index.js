import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react';
import {Elements} from '@stripe/react-stripe-js';
import {stripePromise} from './utils/stripe/stripe.utils';

import App from './App';
//import {UserProvider} from './contexts/user.context';
//import { ProductsProvider } from './contexts/products.context';
// import {CategoriesProvider } from './contexts/categories.context';
//import { CartProvider } from './contexts/cart.context';
import { store , persistor } from './store/store';
//import './index.scss';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading ={null}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/*  <CategoriesProvider> */}
              {/* <CartProvider> */}
              <Elements stripe={stripePromise}>
                <App/>
              </Elements>                
              {/* </CartProvider> */}          
            {/* </CategoriesProvider> */}      
          {/* </UserProvider> */}     
        </BrowserRouter> 
      </PersistGate>
    </Provider>   
  </React.StrictMode>
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
