import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/home');
    }
    return (
        <div>
            <div>
                <div className='footer1'>
                    <h1>OOOOOPPPPPSSSSSSSS!!!!!!!!</h1>
                    <p>Page Not Found</p>
                    <h3>Sorry Dude</h3>

                </div>

                <img className='image' src="https://i.ibb.co/C5ZWpPk/side-image.png" alt="" />
            </div>
            <button onClick={handleNavigate} className='footer-button'>Back to Home</button>

        </div>
    );
};

export default PageNotFound;