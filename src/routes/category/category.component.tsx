//import {useContext, useState,useEffect,Fragment} from 'react';
import { useState,useEffect,Fragment} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//import { CategoriesContext } from '../../contexts/categories.context';
import { selectCategoriesMap ,selectCategoriesIsLoading} from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer,CategoryTitle } from './category.styles';
//import './category.styles.scss';

type CategoryRouteParams = {
     category : string;
}

const Category=()=>{
 const {category} = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
 //const {categoriesMap} = useContext(CategoriesContext);
 const categoriesMap = useSelector(selectCategoriesMap);
 const isLoading = useSelector(selectCategoriesIsLoading);
 const [products,setProducts] = useState(categoriesMap[category]);

 useEffect(()=>{
    setProducts(categoriesMap[category]);
 },[category, categoriesMap]);

 return(
    <Fragment>      
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>   
        {
            isLoading ? (<Spinner></Spinner>) :(
            <CategoryContainer>   
            {
                products && products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))
            }     
            </CategoryContainer>
            )
        }
       
         {/*  <h2 className='category-title'>{category.toUpperCase()}</h2>    
        <div className='category-container'>   
            {
                products && products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))
            }     
        </div> */}
    </Fragment>
 )
}
export default Category;