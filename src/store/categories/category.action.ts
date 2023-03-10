import { createAction , Action, ActionWithPayload , withMatcher} from "../../utils/reducer/reducer.utils";
import {CATEGORY_ACTION_TYPES,Category} from './category.types';

//import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

/* export const setCategoriesMap = (categoriesMap)=>{
    // return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP,categoriesMap);
} */
/* export const setCategories = (categoriesArray)=>{
    return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categoriesArray);
} */

export type FetchCategoriesStart = Action <CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload <CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[] >;

export type FetchCategoriesFailed = ActionWithPayload <CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error >;

//export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed ;

export const fetchCategoriesStart = withMatcher( ():FetchCategoriesStart =>{
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
})

export const fetchCategoriesSuccess = withMatcher((categoriesArray : Category[]) : FetchCategoriesSuccess=>{
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);
})

export const fetchCategoriesFailed = withMatcher( (error : Error) : FetchCategoriesFailed =>{
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);
} )

/* export const fetchCategoriesAsync = () =>async( dispatch)=> {
    dispatch(fetchCategoriesStart());
    try{
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }    
    catch(error){
        dispatch(fetchCategoriesFailed(error));
    }
} */
    