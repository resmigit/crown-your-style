import {takeLatest ,all,call,put} from 'typed-redux-saga/macro';//'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess,fetchCategoriesFailed } from './category.action';
import {CATEGORY_ACTION_TYPES} from './category.types';

export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield* call(getCategoriesAndDocuments)//,'categories');
        yield* put(fetchCategoriesSuccess(categoriesArray));
    }    
    catch(error){
        yield* put(fetchCategoriesFailed(error as Error));
    }
}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync);
}
export function* categoriesSaga() {
    yield* all( [call(onFetchCategories)] );
}
/* export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    }    
    catch(error){
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync);
}
export function* categoriesSaga() {
    yield all( [call(onFetchCategories)] );
} */