import { createContext,useState,useEffect } from "react";
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
}