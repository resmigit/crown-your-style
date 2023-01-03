import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import {setCategoriesMap} from '../../store/categories/category.action';
import {setCategories} from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
//import './shop.styles.scss';

const Shop =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const getCategoriesMap = async() => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
           // const categoryMap = await getCategoriesAndDocuments();
           console.log(categoriesArray);  
           dispatch(setCategories(categoriesArray));
           //dispatch(setCategoriesMap(categoryMap));          
        }
        getCategoriesMap();       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);    
    return(         
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path=':category' element={<Category/>}></Route>
         </Routes>
        
        )
}
export default Shop;