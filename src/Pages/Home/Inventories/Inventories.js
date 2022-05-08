import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const navigate = useNavigate();
    const handleToManage = () => {
        navigate('/manageItems');
    }
    const [inventories] = useInventories();
    return (
        <div id='inventories' className='container '>
            <PageTitle title="Inventories"></PageTitle>
            <h2 className='text-center p-5 mt-3 mb-3 inventories-header'>Our Inventories</h2>
            <div className="inventories-container">
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    >

                    </Inventory>)
                }
            </div>
            <button className='manage-button' onClick={handleToManage}>Manage Inventories</button>

        </div>
    );
};

export default Inventories;