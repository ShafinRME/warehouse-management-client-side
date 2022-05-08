import React, { useEffect, useState } from 'react';
import useInventories from '../../hooks/useInventories';
import ManageItem from '../ManageItem/ManageItem';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ManageItems.css'

const ManageItems = () => {
    const [inventories] = useInventories();
    return (
        <div className='container mb-5'>
            <PageTitle title="ManageItems"></PageTitle>
            <h3 className='text-center p-5 mt-3 mb-3 inventories-header'>Manage Inventories</h3>
            <div className='manage-inventories-container '>
                {
                    inventories.map(inventory => <ManageItem
                        key={inventory._id}
                        inventory={inventory}
                    ></ManageItem>)
                }
            </div>

        </div>
    );
};

export default ManageItems;