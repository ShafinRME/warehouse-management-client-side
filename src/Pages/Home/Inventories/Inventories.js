import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div id='inventories' className='container '>
            <PageTitle title="Inventories"></PageTitle>
            <h2 className='text-center p-5 mt-3 mb-3 inventories-header'>Our Inventories</h2>
            <div className="inventories-container">
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    >

                    </Inventory>)
                }
            </div>
            <button className='manage-button'>Manage Inventories</button>

        </div>
    );
};

export default Inventories;