import { compose, createStore, applyMiddleware} from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import { compose, configureStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

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

const persistConfig ={
    key : 'root' ,
    storage, //storage: storage
    blacklist : [ 'user' ] 
}

const persistedReducer = persistReducer( persistConfig, rootReducer);

//const middleWares = [loggerMiddleware];
const middleWares = [ process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||
                        compose;
//const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
//export const store = createStore(rootReducer,undefined,composedEnhancers);
export const store = createStore(persistedReducer,undefined,composedEnhancers);
export const persistor  = persistStore(store);
