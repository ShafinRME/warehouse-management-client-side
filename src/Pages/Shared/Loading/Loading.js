import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    // This part is for loading component
    return (
        <div style={{ height: '400px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;