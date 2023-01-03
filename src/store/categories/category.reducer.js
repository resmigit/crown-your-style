import {CATEGORY_ACTION_TYPES} from './category.types';

export const CATEGORIES_INITIAL_STATE = {
    //categoriesMap : {}
    categories : []
}

export const categoriesReducer =( state = CATEGORIES_INITIAL_STATE,action = {} )=>{
    const {type,payload} = action;
    switch(type) {
        //case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
        case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
            return{
                ...state,
                //categoriesMap :payload
                categories :payload
            }
        default:
            return state;
    }
}