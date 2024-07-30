import React, {useState} from 'react';
const HookForm = (props) => {
    const [firstName, setFirstName] =useState('');
    const [lastName, setLastName] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstName: firstName,
            lastName: lastName, 
            email: email, 
            password: password,
            confirmPassword: confirmPassword
        };
        console.log("Welcome", newUser);
    };


    
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type = 'text' value = {firstName} onChange= {(e)=> setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type = 'text' value = {lastName} onChange= {(e)=> setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type = 'text' value = {email} onChange= {(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type = 'password' value = {password} onChange= {(e)=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input type = 'password' value = {confirmPassword} onChange= {(e)=> setConfirmPassword(e.target.value)}/>
                </div>
                </form>

            <div className='data'>
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        
        </>
    );
};
export default HookForm;