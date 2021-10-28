import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

 
initializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
   /*  const [error, setError] = useState(''); */

    const auth = getAuth();
    

    const singnInUsingGoogle = () => {

        setIsLoading(true);
        
    const googleProvider = new GoogleAuthProvider();
     
       return   signInWithPopup(auth, googleProvider)
                      
                     
         
             
        
       /*  .catch(error => {
            setError(error.message);
       }) */
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => setIsLoading(false));

    }
/* observe user state change */
    useEffect( () =>{
      const unSubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
               
             setUser(user);
          
            }  
            else{
                setUser({})
            }
            setIsLoading(false);
            return () => unSubscribed;
          });
    },[])
    return {
        user,
        isLoading,
        /* error, */
        singnInUsingGoogle,
        logOut,


    }
};

export default useFirebase;