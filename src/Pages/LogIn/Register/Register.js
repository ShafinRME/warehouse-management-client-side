import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateeError] = useUpdateProfile(auth);
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

    }
    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Register"></PageTitle>
            <h2 className='text-primary text-center mt-2'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="terms">
                    <Form.Check onClick={() => setAgree(!agree)} className={agree ? 'text-primary' : ''} type="checkbox" label="Accept SpaceX Car House Terms and Conditions." />
                </Form.Group>
                <Button disabled={!agree} className='d-block mx-auto w-50 mb-5 mt-4' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already Have an Account ? <Link to="/login" className='text-primary text-decoration-none' >Please Login Here.</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;