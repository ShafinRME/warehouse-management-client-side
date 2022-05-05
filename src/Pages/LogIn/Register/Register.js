import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form' >
            <h2>Please Register</h2>
            <form onClick={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an Account ? <Link to="/login" className='text-info text-decoration-none' >Please Login Here</Link> </p>
        </div>
    );
};

export default Register;