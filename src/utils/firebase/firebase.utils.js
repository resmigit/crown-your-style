import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider,signInWithRedirect,signInWithPopup} from 'firebase/auth';
import {getFirestore,doc,setDoc,getDoc} from 'firebase/firestore';

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
export const db =getFirestore();
export const createUserDocumentFromAuth =async(userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid)
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt
                });
            }
        catch(error){
            console.log('error creating the user',error.message);
        }
    }
    return userDocRef;
}

