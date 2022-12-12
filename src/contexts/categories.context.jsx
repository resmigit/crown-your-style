import { createContext,useState,useEffect } from "react";
import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';
//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
//import PRODUCTS from '../shop-data.json';
//import SHOP_DATA from '../shop-data.js';


/* export const ProductsContext= createContext({
    products:[]
}); */
export const CategoriesContext= createContext({
    categoriesMap:{}
});
export const CategoriesProvider =({children})=>{    
     const [categoriesMap,setCategoriesMap] = useState({});    
     useEffect(()=>{
         const getCategoriesMap = async() => {
             const categoryMap = await getCategoriesAndDocuments();
             console.log(categoryMap);  
             setCategoriesMap(categoryMap);          
         }
         getCategoriesMap();
        
     },[]);    
     const value = {categoriesMap};
     return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>);   
 }

/* export const ProductsProvider =({children})=>{
   // const [products,setProducts] = useState(PRODUCTS);
    const [products,setProducts] = useState([]);    
    useEffect(()=>{
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);            
        }
        getCategoriesMap();
    },[]);
   /*  useEffect(()=>{
        addCollectionAndDocuments('categories',SHOP_DATA);
    },[]); */   
   /* const value = {products};
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>);   
} */