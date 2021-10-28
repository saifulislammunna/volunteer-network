import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification,sendPasswordResetEmail,updateProfile } from "firebase/auth";
 

 import './Login.css';

 /* login component */

const Login = ( ) => {
  const auth = getAuth();
  
 const { singnInUsingGoogle} = useAuth(); 
 const location = useLocation();
 const history = useHistory();
 const redirect_uri = location.state?.form || `/home`;
/*  console.log('came from',location.state?.form); */
 const handleGoogleLogin = () => {
    
     singnInUsingGoogle()
     .then(result => {
            history.push(redirect_uri);
     })
    

 }
 const [name, setName] = useState('');
 const [email,setEmail] = useState('');
 const [password, setPassword] =useState('');
 const [error, setError] = useState('');
 const [isLogin, setIsLogin] = useState(false);

/* toggle handling */
const toggleLogin = e => {
  setIsLogin(e.target.checked)
}

/* email change handling */
 const handleEmailChange = e => {
   setEmail(e.target.value);
 }

 /* name change handling */
const handleNameChange = e => {
  setName(e.target.value);
}

/* password change handling */
 const halePassWordChange = e => {
  setPassword(e.target.value);
 }

 /* registration handling */

 const handleRegistration =  e => {
    e.preventDefault();
     console.log( email, password);
     /* password length condition added */
     if(password.length < 6 ){
       setError('Password Must be 6 Characters long')
       return ;
     }
     /* password condition added  */
     if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
              setError('Password Must contain two upper case');
              return;
     }
    isLogin?processlogin(email, password) : regiterNewUser(email, password);
     

 }

 /* log in process handling */
const processlogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
    setError('');
   
  })
  /* error catch & sent error message */
  .catch(error => {
    setError(error.message);
  })
}


/* new user registration handling */

const regiterNewUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
    setError('');
    verifyEmail();
    setUserName();
  })
  .catch(error => {
    setError(error.message);
  })
}

/* email verification added */
const verifyEmail = () =>{
  sendEmailVerification(auth.currentUser)
  .then( result => {
    console.log(result);
  })
}

/* user name set on nav bar */
const setUserName = () => {
  updateProfile(auth.currentUser, {displayName: name})
  .then(result => {

  })
}

/*  handle reset password */
const handleResetPassword = () => {
 
  sendPasswordResetEmail(auth, email)
   .then(result => {
           
  })
}

    return (
        <div className="mx-5">
            <div className="p-3">   
            <h2>Please <span className="text-color">{isLogin ? 'Login' :'Register'}</span></h2>
               <div className=" " /* className="login-form" */>
               
               <form onSubmit={handleRegistration}>
               {!isLogin  &&  <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label fs-3">Name :</label>
    <div className="col-sm-10 pt-3">
    <input type="text" onBlur={handleNameChange} className="form-control" id="inputName"  placeholder="Your Name"/>
    </div>
  </div>}
                
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fs-3">Email :</label>
    <div className="col-sm-10 pt-3">
      <input onBlur={handleEmailChange} required type="email" className="form-control" id="inputEmail3" placeholder="Your Email"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fs-3">Password :</label>
    <div className="col-sm-10 pt-3">
      <input  onChange={halePassWordChange}  type="password" className="form-control" id="inputPassword3" placeholder="Your password"/>
    </div>
  </div>
    
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check d-flex   align-items-center">
        <input  onChange={toggleLogin} className="form-check-input pb-3" type="checkbox" id="gridCheck1"/>
        <label    className="form-check-label text-color fs-5 p-2 " htmlFor="gridCheck1">
          Already Register?
        </label>
      </div>
    </div>
  </div>
  <div className="row mb-3 text-danger">
    {error}
  </div>
    <div className="d-flex toggle-btn">
    <button type="submit" className="btn  btn-primary">{isLogin ? 'Log in' :'Register'}</button>
  <button onClick={handleResetPassword} type="button" className="btn btn-primary  "> Reset Password</button>
    </div>

</form>
                  
                 
              
               
               </div>
           
              
            
              
              <div  className="d-flex  toggle-btn">
                  <h5 className="text-color fs-5"> or, Log in With</h5>
                  </div>
               <div  className=" d-flex toggle-btn">

               <Button   onClick = {handleGoogleLogin}
                 className="btn"
                 >Google Log in</Button >
                 </div>  

              </div>
            
        </div>
    );
};

export default Login;