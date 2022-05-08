import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    let errorElement;

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://mighty-hamlet-99009.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email Just Now')
        }
        else {
            toast('Please Enter Your Email Address!!!');
        }

    }

    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='d-block mx-auto w-50 mb-5 mt-4' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to SpaceX Car House ? <Link to="/register" className='text-primary text-decoration-none' >Please Register Here.</Link> </p>
            <p>Forget Password ? <button className='text-primary text-decoration-none btn btn-link' onClick={resetPassword} >Reset Your Password.</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;