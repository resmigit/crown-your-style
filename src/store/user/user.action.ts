import {USER_ACTION_TYPES} from './user.types';
import { createAction ,withMatcher ,Action, ActionWithPayload} from "../../utils/reducer/reducer.utils";
import { UserData ,AdditionalInfo } from '../../utils/firebase/firebase.utils';
import {User} from 'firebase/auth';

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION> ;

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER,UserData>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{email:string,password:string}>;

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED,Error>;

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START,{email : string,password : string,
                                                displayName : string}>;
/* export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS,
                                {user : UserData,additionalInfo :AdditionalInfo}> ; */
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS,
                                {user : User,additionalInfo :AdditionalInfo}> ;
                                
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED,Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED,Error>;



export const setCurrentUser = withMatcher((user : UserData) : SetCurrentUser =>{    
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);});

export const checkUserSession = withMatcher(() : CheckUserSession =>{
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
});
export const googleSignInStart = withMatcher((): GoogleSignInStart =>{
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
});
export const emailSignInStart = withMatcher((email : string,password :string) : EmailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{email,password});
});
export const signInSuccess = withMatcher((user : UserData & {id : string}) : SignInSuccess=>{
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS,user);
});
export const signInFailed = withMatcher((error : Error) : SignInFailed =>{
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED,error);
});
export const signUpStart =withMatcher((email : string,password : string,displayName : string) : SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START,{email,password,displayName}));

/* export const signUpSuccess = withMatcher((user : UserData,additionalInfo : AdditionalInfo) : SignUpSuccess=>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,{user,additionalInfo})); */
export const signUpSuccess = withMatcher((user : User,additionalInfo : AdditionalInfo) : SignUpSuccess=>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,{user,additionalInfo}));

export const signUpFailed = withMatcher((error : Error) : SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED,error));

export const signOutStart = withMatcher( () : SignOutStart=>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher(() : SignOutSuccess=>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error : Error) : SignOutFailed=>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error));