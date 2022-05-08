import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const navigate = useNavigate();
    const handleToManage = () => {
        navigate('/manageItems');
    }
    const [user] = useAuthState(auth);
    const [invent, setInvent] = useState([]);
    useEffect(() => {
        const getMyItem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/inventory?email=${email}`;
            const { data } = await axios.get(url);
            setInvent(data)
        }
        getMyItem();
    }, [])
    return (
        <div>
            <h2>My Added Items{invent.length}</h2>
            <button className='manage-button' onClick={handleToManage}>Manage Inventories</button>
        </div>
    );
};

export default MyItems;