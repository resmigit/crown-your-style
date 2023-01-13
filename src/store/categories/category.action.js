import { createAction } from "../../utils/reducer/reducer.utils";
import {CATEGORY_ACTION_TYPES} from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

/* export const setCategoriesMap = (categoriesMap)=>{
    // return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP,categoriesMap);
} */
/* export const setCategories = (categoriesArray)=>{
    return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categoriesArray);
} */

export const fetchCategoriesStart =() =>{
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess =(categoriesArray) =>{
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);
}

export const fetchCategoriesFailed =(error) =>{
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);
}

export const fetchCategoriesAsync = () =>async( dispatch)=> {
    dispatch(fetchCategoriesStart());
    try{
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }    
    catch(error){
        dispatch(fetchCategoriesFailed(error));
    }
}
    