import { useEffect, useState } from "react";
import initializeFirebase from "../Component/pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut,onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,updateProfile,getIdToken} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] =useState('')
    const [admin,setAdmin] = useState (false);
    const [token,setToken] =useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email,password,name,navigate) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Signed in 
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser)
            saveUser(email,name,"POST")
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: {displayName:name},
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            navigate('/')
            // ...
          })
          .catch((error) => {
           setAuthError(error.message)
            // ..
          })
          .finally(() => setIsLoading(false));
    }
        const loginUser = ( email, password,location,navigate) => {
          setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.email || "/"
        navigate(destination)
        setAuthError('')
        

        // ...
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));
    }

    const signWithGoogle = (location, navigate) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
          .then((result) => {
            saveUser(user.email, user.displayName, 'PUT');
              setAuthError('');
              const destination = location?.state?.from || '/';
              navigate(destination);
          }).catch((error) => {
              setAuthError(error.message);
          }).finally(() => setIsLoading(false));
  }

        // observer use state 

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user)
              getIdToken(user)
              .then(idToken =>setToken(idToken))
              // ...
            } else {
              // User is signed out
              // ...
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[auth])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then (data => setAdmin(data.admin))
    },[user.email])
    
    const logOut = () => {
      setIsLoading(true)
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
          
    }
    const saveUser = (email,displayName,method) => {
      const user = {email,displayName};
      fetch('http://localhost:5000/users',{
        method:method,
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(user)
      })
      .then()
    }

    return {
        user,
        authError,
        registerUser,
        signWithGoogle,
        admin,
        token,
        loginUser,
        logOut,
        isLoading
    }
}
export default useFirebase;