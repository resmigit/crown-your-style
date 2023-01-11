{/* import { createContext,useReducer } from "react";
import {createAction} from '../utils/reducer/reducer.utils.js';
//import CartItem from "../components/cart-item/cart-item.component";

/* const addCartItem=(cartItems,productToAdd)=>{
    //find if cart items contains products to Add
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);
    //If found increment the quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id
                                         ? {...cartItem,quantity:cartItem.quantity + 1}
                                         :cartItem
                            );
    }
    //return new array with modified cartItems/new cart item
    return[...cartItems,{...productToAdd,quantity:1}];
}

const removeCartItem=(cartItems,cartItemToRemove)=>{
    //find cart item to remove
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToRemove.id);

    //check if qty is equal to 1,then remove that item from cart
    if(existingCartItem.quantity ===1)
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

    //return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem)=>cartItem.id === cartItemToRemove.id
                                         ? {...cartItem,quantity:cartItem.quantity - 1}
                                         :cartItem
                        );
}

const clearCartItem =(cartItems,cartItemToClear) =>{
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
} */

{/* export const CartContext =createContext({
    isCartOpen :false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:() => {},
    cartItemCount :0,
    setCartItemCount:() => {},
    removeItemFromCart:()=>{},
    clearItemFromCart :() =>{},
    cartTotal :0,
    setCartItemTotal :() =>{}
}); */}

/* const CART_ACTION_TYPES ={
    'SET_CART_ITEMS':'SET_CART_ITEMS',
    'SET_IS_CART_OPEN':'SET_IS_CART_OPEN'
} */
/* const INITIAL_STATE ={
    isCartOpen :false,
    cartItems:[],
    cartItemCount :0,
    cartTotal :0
}

const cartReducer = (state,action) =>{
    const { type,payload } = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload               
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen :payload              
            }
        default :
                throw new Error(`Unhandled action type ${type} in cartReducer`)
    }
} */

/* export const CartProvider= ({children})=>{ 
    const [{cartItems,isCartOpen,cartItemCount,cartTotal},dispatch] = useReducer(cartReducer,INITIAL_STATE)
    const updateCartItemsReducer = (newCartItems) =>{
        /* const newCartCount = newCartItems.reduce((total,cartItem)=>total+ cartItem.quantity,0);
        const newCartTotal = newCartItems.reduce((cartTotal,cartItem)=>cartTotal+(cartItem.quantity*cartItem.price),0); */
    /*     dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,
                                {
                                    cartItems:newCartItems,
                                    cartTotal:newCartTotal,
                                    cartItemCount:newCartCount
                                }));  */
        /* dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS
                ,payload:
                    {
                        cartItems:newCartItems,
                        cartTotal:newCartTotal,
                        cartItemCount:newCartCount
                    }}); */
        /*
        generate new cart Total
        generate new cartCount
               
        dispatch action with new payload ={
            newCartItems,
            newCartTotal,
            newCartCount
        }
        */
    }
/*    
    const addItemToCart =(productToAdd) =>{
        const newCartItems = addCartItem(cartItems,productToAdd);  
        updateCartItemsReducer(newCartItems);
    }
    const removeItemFromCart =(cartItemToRemove) =>{
        const newCartItems =removeCartItem(cartItems,cartItemToRemove);
        updateCartItemsReducer(newCartItems);        
    }
    const clearItemFromCart =(cartItemToClear) =>{
        const newCartItems = clearCartItem(cartItems,cartItemToClear); 
        updateCartItemsReducer(newCartItems);       
    } */
    /* const setIsCartOpen =(bool) =>{
        //dispatch({type:'SET_IS_CART_OPEN',payload:bool})
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));
    } */

    /* const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems
                ,cartItemCount,removeItemFromCart,clearItemFromCart,cartTotal};
    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>); */

/* import { createContext,useState,useEffect } from "react";
//import CartItem from "../components/cart-item/cart-item.component";

const addCartItem=(cartItems,productToAdd)=>{
    //find if cart items contains products to Add
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);
    //If found increment the quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id
                                         ? {...cartItem,quantity:cartItem.quantity + 1}
                                         :cartItem
                            );
    }
    //return new array with modified cartItems/new cart item
    return[...cartItems,{...productToAdd,quantity:1}];
}

const removeCartItem=(cartItems,cartItemToRemove)=>{
    //find cart item to remove
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToRemove.id);

    //check if qty is equal to 1,then remove that item from cart
    if(existingCartItem.quantity ===1)
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

    //return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem)=>cartItem.id === cartItemToRemove.id
                                         ? {...cartItem,quantity:cartItem.quantity - 1}
                                         :cartItem
                        );
}

const clearCartItem =(cartItems,cartItemToClear) =>{
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const CartContext =createContext({
    isCartOpen :false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:() => {},
    cartItemCount :0,
    setCartItemCount:() => {},
    removeItemFromCart:()=>{},
    clearItemFromCart :() =>{},
    cartTotal :0,
    setCartItemTotal :() =>{}
});

export const CartProvider= ({children})=>{
    const[isCartOpen,setIsCartOpen] = useState(false);
    const[cartItems,setCartItems] = useState([]);
    const[cartItemCount,setCartItemCount] = useState(0);
    const[cartTotal,setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total+ cartItem.quantity,0);
        setCartItemCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((cartTotal,cartItem)=>cartTotal+(cartItem.quantity*cartItem.price),0);
        setCartTotal(newCartTotal);
    },[cartItems]);

    const addItemToCart =(productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));        
    }
    const removeItemFromCart =(cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));        
    }
    const clearItemFromCart =(cartItemToClear) =>{
        setCartItems(clearCartItem(cartItems,cartItemToClear));        
    }
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems
                ,cartItemCount,removeItemFromCart,clearItemFromCart,cartTotal};
    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>);
} */