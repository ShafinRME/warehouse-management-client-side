import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '70px' }} src="https://i.ibb.co/0Xf7XpS/google.png" alt="" />
                    <span className='px-2'>Google Sign In</span>

                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '50px' }} src="https://i.ibb.co/PrcScz9/facebook.png" alt="" />
                    <span className='px-2'>Facebook Sign In</span>

                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '45px' }} src="https://i.ibb.co/djNwppJ/github.png" alt="" />
                    <span className='px-2'>GitHub Sign In</span>

                </button>
            </div>

        </div >
    );
};

export default SocialLogin;