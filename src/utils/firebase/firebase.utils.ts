import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider
        ,signInWithRedirect,signInWithPopup
        ,signInWithEmailAndPassword
        ,createUserWithEmailAndPassword
        ,signOut
        ,onAuthStateChanged
        ,User
        ,NextOrObserver} from 'firebase/auth';
import {getFirestore,doc,setDoc,getDoc
        ,collection,writeBatch
        ,query
        ,getDocs
        ,QueryDocumentSnapshot} from 'firebase/firestore';
import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
  apiKey: "AIzaSyByv7vBu6DjpyDSkFLxkaMz5F6hy9SdZsI",
  authDomain: "crwnys-db.firebaseapp.com",
  projectId: "crwnys-db",
  storageBucket: "crwnys-db.appspot.com",
  messagingSenderId: "700716312062",
  appId: "1:700716312062:web:8f55406daddd238e84ccaf"
};

// Initialize Firebase
//const firebaseApp = 
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup =()=> signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);
export const db =getFirestore();
export type ObjectToAdd ={
    title :string;
}

export const addCollectionAndDocuments = 
            async <T extends ObjectToAdd> (collectionkey : string, objectsToAdd : T[] ) : Promise <void> =>{
    const collectionRef = collection(db,collectionkey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object)=>{
        const docRef =doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })
    await batch.commit();
    //console.log('done');
}
export const getCategoriesAndDocuments =async() : Promise< Category[] > => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);
    //await Promise.reject(new Error('new error woops'));
    const querySnapShot = await getDocs(q);
    return querySnapShot.docs.map(docSnapShot => docSnapShot.data() as Category);
   /*  const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
        const{title,items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{}); 
    return categoryMap;*/
}

export type AdditionalInfo = {
    displayName? : string;
}
export type UserData = {
    createdAt : Date;
    displayName : string ;
    email : string;
}

export const createUserDocumentFromAuth =async(userAuth : User,additionalInfo = {} as AdditionalInfo)
        : Promise<void | QueryDocumentSnapshot<UserData>> =>{
    if(!userAuth)
    return;
    const userDocRef = doc(db,'users',userAuth.uid)
    //console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
   // console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,
                    ...additionalInfo
                });
            }
        catch(error){
            console.log('error creating the user',error);//.message);
        }
    }
    return userSnapShot as QueryDocumentSnapshot<UserData>;
   // return userDocRef;
}
export const createAuthUserWithEmailAndPassword =async(email : string,passsword : string)=>{
    if(!email || !passsword )
        return;
    return await createUserWithEmailAndPassword(auth,email,passsword);
}
export const signInAuthUserWithEmailAndPassword =async(email : string,passsword : string)=>{
    if(!email || !passsword )
        return;
    return await signInWithEmailAndPassword(auth,email,passsword);
}
export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener= (callback : NextOrObserver<User>) =>
                                                    onAuthStateChanged(auth,callback);

export const getCurrentUser =(): Promise <User |null> =>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = onAuthStateChanged(auth,(userAuth) => {
            unsubscribe();
            resolve(userAuth);
        },
        reject
        );
    });
}


