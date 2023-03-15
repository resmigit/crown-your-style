import {takeLatest,all,put,call} from 'typed-redux-saga/macro';//'redux-saga/effects';
import {User} from 'firebase/auth';
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess,signInFailed, signUpSuccess, signUpFailed ,signOutSuccess,signOutFailed
        ,EmailSignInStart
        ,SignUpStart
        ,SignUpSuccess} from './user.action';
import {getCurrentUser,createUserDocumentFromAuth
        ,signInWithGooglePopup
        ,signInAuthUserWithEmailAndPassword
        ,createAuthUserWithEmailAndPassword
        ,signOutUser
        ,AdditionalInfo} from '../../utils/firebase/firebase.utils';


export function* getSnapshotFromUserAuth(userAuth : User , additionalInfo? : AdditionalInfo){
    try{
        const userSnapshot = yield* call (createUserDocumentFromAuth ,userAuth ,additionalInfo);
        if(userSnapshot){
            yield* put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
        }
    }catch(error){
        yield* put (signInFailed(error as Error));
    }
}
export function* isUserAuthenticated(){
    try{
        const userAuth = yield* call(getCurrentUser);
        if(!userAuth)
            return;
        yield* call( getSnapshotFromUserAuth , userAuth);
    } catch(error){
        yield* put (signInFailed(error as Error));
    }
}
export function* signInWithGoogle(){
    try{
        const {user} = yield* call(signInWithGooglePopup);
        yield* call(getSnapshotFromUserAuth,user);
    }catch(error){
        yield* put(signInFailed(error as Error));
    }  
}

export function* signInWithEmail({payload:{email,password}} : EmailSignInStart){
    try{
       // const {user} = yield* call (signInAuthUserWithEmailAndPassword,email,password);
        const userCredential = yield* call (signInAuthUserWithEmailAndPassword,email,password);
        if(userCredential){
            const {user} = userCredential;
            yield* call(getSnapshotFromUserAuth,user);
        }        
    }catch(error){
        yield* put(signInFailed(error as Error));
    }
}

export function* signUp({payload:{email,password,displayName}} : SignUpStart){
    try{
        const userCredential = yield* call(createAuthUserWithEmailAndPassword,email,password);
        if(userCredential){
            const {user} = userCredential ;
             yield* put(signUpSuccess(user,{displayName}));
        }        
    }catch(error){
        yield* put (signUpFailed(error as Error));
    }
}

export function* signInAfterSignUp({payload:{user,additionalInfo}} : SignUpSuccess){
    yield* call(getSnapshotFromUserAuth,user,additionalInfo);
}
export function* signOut(){
    try{
        console.log('here inside signOut1');
         yield* call(signOutUser);
         console.log('here inside signOut2');
         yield* put(signOutSuccess());
    }catch(error){
         yield* put(signOutFailed(error as Error));
    }   
}

export function* onGoogleSignInStart(){
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart(){
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onCheckUserSession(){    
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,  isUserAuthenticated );
}

export function* onSignUpStart(){
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(){
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp);
}
export function* onSignOutStart(){
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut);
}

export function* userSagas(){
    yield* all([ call(onCheckUserSession) , call(onGoogleSignInStart) ,call(onEmailSignInStart) ,
    call(onSignUpStart) , call(onSignUpSuccess) ,call(onSignOutStart)] );
}

/* export function* getSnapshotFromUserAuth(userAuth , additionalInfo){
    try{
        const userSnapshot = yield call (createUserDocumentFromAuth ,userAuth ,additionalInfo);
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
       // console.log(userSnapshot);
        //console.log(userSnapshot.data()); 
    }catch(error){
        yield put (signInFailed(error));
    }
}
export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth)
            return;
        yield call( getSnapshotFromUserAuth , userAuth);
    } catch(error){
        yield put (signInFailed(error));
    }
}
export function* signInWithGoogle(){
    try{
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth,user);
    }catch(error){
        yield put(signInFailed(error));
    }  
}

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield call (signInAuthUserWithEmailAndPassword,email,password);
        yield call(getSnapshotFromUserAuth,user);
    }catch(error){
        yield put(signInFailed(error));
    }
}

export function* signUp({payload:{email,password,displayName}}){
    try{
        const {user} = yield call(createAuthUserWithEmailAndPassword,email,password);
        yield put(signUpSuccess(user,{displayName}));
    }catch(error){
        yield put (signUpFailed(error));
    }
}

export function* signInAfterSignUp({payload:{user,additionalInfo}}){
    yield call(getSnapshotFromUserAuth,user,additionalInfo);
}
export function* signOut(){
    try{
        console.log('here inside signOut1');
         yield call(signOutUser);
         console.log('here inside signOut2');
         yield put(signOutSuccess());
    }catch(error){
         yield put(signOutFailed(error));
    }   
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onCheckUserSession(){    
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,  isUserAuthenticated );
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp);
}
export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut);
}

export function* userSagas(){
    yield all([ call(onCheckUserSession) , call(onGoogleSignInStart) ,call(onEmailSignInStart) ,
    call(onSignUpStart) , call(onSignUpSuccess) ,call(onSignOutStart)] );
} */