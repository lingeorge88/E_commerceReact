import React from 'react';
import { useState } from 'react';
import { auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName, email, password, confirmPassword} = formFields;
console.log(formFields);

const handleSubmit = async (event) => {
    event.preventDefault();
    if(password != confirmPassword){
        alert("passwords do not match");
        return;
    }

    try {
        const {user} =createAuthUserWithEmailAndPassword(email, password);
    } catch(error){
        console.log(error);
    }
}

const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
};


  return (
    <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit = {handleSubmit} >
            <label htmlFor="">Display Name</label>
            <input type ="text" required onChange={handleChange} name="displayName" value={displayName}/>

            <label htmlFor="">Email</label>
            <input type ="email" required onChange={handleChange} name="email" value={email}/>

            <label htmlFor="">Password</label>
            <input type = "password" required onChange={handleChange} name="password" value={password}/>

            <label htmlFor="">Confirm Password</label>
            <input type = "password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
            <button type = 'submit'>Sign Up</button>
        </form>
    
    
    </div>
  )
}

export default SignUpForm;