import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    // Showing my item data
    const navigate = useNavigate();
    const handleToManage = () => {
        navigate('/manageItems');
    }
    const [user] = useAuthState(auth);
    const [invent, setInvent] = useState([]);
    useEffect(() => {
        const getMyItem = async () => {
            const email = user.email;
            const url = `https://mighty-hamlet-99009.herokuapp.com/inventory?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setInvent(data)
        }
        getMyItem();
    }, [user])
    return (
        <div>
            <h2>My Added Items{invent.length}</h2>
            <button className='manage-button' onClick={handleToManage}>Manage Inventories</button>
        </div>
    );
};

export default MyItems;