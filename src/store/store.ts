import { compose, createStore, applyMiddleware,Middleware} from 'redux';
import { persistStore,persistReducer,PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import { compose, configureStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import rootSaga from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? : typeof compose
    }
}

//root-reducer
/* const loggerMiddleware= (store) =>(next) =>(action)=>{
    if(!action.type){
        return next(action);
    }
    console.log('type: ',action.type);
    console.log('payload: ',action.payload);
    console.log('currentState: ',store.getState());

    next(action);

    console.log('next state: ',store.getState());
} */

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist : (keyof RootState)[];
}
const persistConfig : ExtendedPersistConfig ={
    key : 'root' ,
    storage, //storage: storage
    whitelist : ['cart']
    //blacklist : [ 'user' ] 
}

const persistedReducer = persistReducer( persistConfig, rootReducer);

//const middleWares = [loggerMiddleware];
const sagaMiddleware = createSagaMiddleware();
const middleWares = [ process.env.NODE_ENV !== 'production' && logger , sagaMiddleware]                   
                        .filter((middleware): middleware is Middleware => Boolean(middleware));//.filter(Boolean);
//const middleWares = [ process.env.NODE_ENV !== 'production' && logger , thunk].filter(Boolean);

/* lecture-example- const thunkMiddleware =(store)=> (next)  =>(action)=>{
    if(typeof(action) === 'function'){
        action(dispatch)
    }
} */
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||
                        compose;
//const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
//export const store = createStore(rootReducer,undefined,composedEnhancers);
export const store = createStore(persistedReducer,undefined,composedEnhancers);
sagaMiddleware.run(rootSaga);
export const persistor  = persistStore(store);
