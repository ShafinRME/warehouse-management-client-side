import React, { useEffect, useState } from 'react';
import useInventories from '../../hooks/useInventories';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ManageItems.css'

const ManageItems = () => {
    // Getting data from hook and sending data on Server
    const [inventories, setInventories] = useInventories();
    const handleDelete = id => {
        const confirm = window.confirm('Are you are you want to Delete this inventory???');
        if (confirm) {
            const url = `https://mighty-hamlet-99009.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                })

        }
    }
    return (
        // Showing data on UI
        <div className='container mb-5'>
            <PageTitle title="ManageItems"></PageTitle>
            <h3 className='text-center p-5 mt-3 mb-3 inventories-header'>Manage Inventories</h3>
            <div className='manage-inventories-container '>
                {
                    inventories.map(inventory => <div key={inventory._id}>
                        <div className='manage-inventory-container'>

                            <img src={inventory.img} alt="" />
                            <div>
                                {inventory.name}
                            </div>
                            <div>
                                {inventory.price}
                            </div>
                            <div>
                                {inventory.supplier}
                            </div>
                            < button className='delete' onClick={() => handleDelete(inventory._id)}>Delete</button>
                            <button className='update'>Update</button>
                        </div>
                    </div>)

                }

            </div>

        </div >
    );
};

export default ManageItems;