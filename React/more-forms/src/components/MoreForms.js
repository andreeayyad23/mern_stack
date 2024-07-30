import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HookForm = (props) => {
    const [firstName, setFirstName] =useState('');
    const [firstNameError, setFirstNameError] =useState('');
    const [lastName, setLastName] =useState('');
    const [lastNameError, setlastNameError] =useState('');
    const [email, setEmail] =useState('');
    const [emailerror, setEmailError] =useState('')
    const [password, setPassword] =useState('');
    const [passwordError, setPasswordError] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [confirmPasswordError, setConfirmPasswordError] =useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name must be Requierd");
            
        }else if (e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters.");
        } else setFirstNameError (""); 
    }

    const handleLasttName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setlastNameError("Last Name must be Requierd");

        }else if (e.target.value.length <2) {
            setlastNameError("Last Name must be at least 2 characters.");
        } else { 
            setlastNameError (""); 
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length <1) {
            setEmailError("Email must be Requierd");
        } else if (e.target.value.length <5) {
            setEmailError("Email must be at least 5 characters.")
        } else {
            setEmailError ("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length <1) {
            setPasswordError("Password must be Requierd");
        }else if(e.target.value.length <8){
            setPasswordError("Password must be at least 8 characters.")
        }else {
            setEmailError ("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword (e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Password must be Match!");
        }else {
            setConfirmPasswordError ("");
        }
    }

    const createUser = (e) =>{
        e.preventDefault() ; 

        const newUser = {firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    	setFirstName("");
    	setLastName("");
        setEmail("");
    	setPassword("");
        setConfirmPassword("");


    }
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type = 'text' value = {firstName} onChange= {handleFirstName}/>
                    {
                    firstNameError ?
                    <p className="text-danger">{ firstNameError }</p> :
                    ''
                }

                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type = 'text' value = {lastName} onChange= {handleLasttName}/>
                    {
                    lastNameError ?
                    <p  className="text-danger">{ lastNameError }</p> :
                     ''
                }
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type = 'text' value = {email} onChange= {handleEmail}/>
                    {
                    emailerror ?
                    <p className="text-danger">{ emailerror }</p> :
                     ''
                }
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type = 'password' value = {password} onChange= {handlePassword}/>
                    {
                    passwordError ?
                    <p className="text-danger">{ passwordError }</p> :
                     ''
                }
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input type = 'password' value = {confirmPassword} onChange= {handleConfirmPassword}/>
                    {
                    confirmPasswordError ?
                    <p className="text-danger">{ confirmPasswordError }</p> :
                     ''
                }
                </div>
                </form>
        
        </>
    )

};
export default HookForm;