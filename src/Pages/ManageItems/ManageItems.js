import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';
import './ManageItems.css'

const ManageItems = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div className='container mb-5'>
            <h3 className='text-center p-5 mt-3 mb-3 inventories-header'>Manage Inventories</h3>
            <div className='manage-inventories-container '>
                {
                    inventories.map(inventory => <ManageItem
                        key={inventory.id}
                        inventory={inventory}
                    ></ManageItem>)
                }
            </div>

        </div>
    );
};

export default ManageItems;