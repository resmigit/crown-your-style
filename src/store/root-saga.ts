import {all,call} from 'typed-redux-saga/macro'//'redux-saga/effects';
import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

export default function* rootSaga(){
     yield* all( [ call(categoriesSaga) ,call(userSagas) ] );
}

/* export default function* rootSaga(){
     yield all( [ call(categoriesSaga) ,call(userSagas) ] );
} */