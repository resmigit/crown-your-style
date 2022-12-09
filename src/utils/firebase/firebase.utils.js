import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider
        ,signInWithRedirect,signInWithPopup
        ,signInWithEmailAndPassword
        ,createUserWithEmailAndPassword
        ,signOut
        ,onAuthStateChanged} from 'firebase/auth';
import {getFirestore,doc,setDoc,getDoc
        ,collection,writeBatch} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByv7vBu6DjpyDSkFLxkaMz5F6hy9SdZsI",
  authDomain: "crwnys-db.firebaseapp.com",
  projectId: "crwnys-db",
  storageBucket: "crwnys-db.appspot.com",
  messagingSenderId: "700716312062",
  appId: "1:700716312062:web:8f55406daddd238e84ccaf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup =()=> signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);
export const db =getFirestore();
export const addCollectionAndDocuments =async(collectionkey,objectsToAdd) =>{
    const collectionRef = collection(db,collectionkey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object)=>{
        const docRef =doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })
    await batch.commit();
    console.log('done');
}
export const createUserDocumentFromAuth =async(userAuth,additionalInfo = {})=>{
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
            console.log('error creating the user',error.message);
        }
    }
    return userDocRef;
}
export const createAuthUserWithEmailAndPassword =async(email,passsword)=>{
    if(!email || !passsword )
        return;
    return await createUserWithEmailAndPassword(auth,email,passsword);
}
export const signInAuthUserWithEmailAndPassword =async(email,passsword)=>{
    if(!email || !passsword )
        return;
    return await signInWithEmailAndPassword(auth,email,passsword);
}
export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener= (callback) =>onAuthStateChanged(auth,callback);


