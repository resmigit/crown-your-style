import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import {setCategoriesMap} from '../../store/categories/category.action';
//import {setCategories} from '../../store/categories/category.action';
import {fetchCategoriesAsync} from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
//import './shop.styles.scss';

const Shop =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{             
        dispatch(fetchCategoriesAsync());                   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  /*   useEffect(()=>{
        const getCategoriesMap = async() => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
           // const categoryMap = await getCategoriesAndDocuments();                      
           //dispatch(setCategoriesMap(categoryMap));          
        }
        getCategoriesMap();       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); */    
    return(         
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path=':category' element={<Category/>}></Route>
         </Routes>
        
        )
}
export default Shop;