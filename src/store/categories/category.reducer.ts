import { AnyAction } from 'redux';
import {Category
   // , CATEGORY_ACTION_TYPES
} from './category.types';
import {
    // CategoryAction ,
     fetchCategoriesStart ,fetchCategoriesSuccess , fetchCategoriesFailed} from './category.action';

export type CategoriesState = {
    readonly categories : Category [] ;
    readonly isLoading : boolean ;
    readonly error : Error | null ;
}

export const CATEGORIES_INITIAL_STATE : CategoriesState = {
    //categoriesMap : {}
    categories : []
    ,isLoading : false
    ,error : null
}

export const categoriesReducer =( state = CATEGORIES_INITIAL_STATE,action = {} as AnyAction)//CategoryAction) 
    :CategoriesState =>{
        if( fetchCategoriesStart.match(action)){
            return{
                ...state,                
                isLoading :true
            }
        }

        if(fetchCategoriesSuccess.match(action)){
            return{
                ...state,                
                categories :action.payload,
                isLoading :false
            }
        }

        if(fetchCategoriesFailed.match(action)){
            return{
                ...state,                
                error :action.payload,
                isLoading : false
            }
        }
        return state;
}

/* export const categoriesReducer =( state = CATEGORIES_INITIAL_STATE,action = {} as CategoryAction)=>{
    const {type,payload} = action;
    switch(type) {
        //case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
        //case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
            return{
                ...state,                
                isLoading :true
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return{
                ...state,
                //categoriesMap :payload
                categories :payload,
                isLoading :false
            }
            case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return{
                ...state,                
                error :payload,
                isLoading : false
            }
        default:
            return state;
    }
} */