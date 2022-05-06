import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ManageItem.css'

const ManageItem = ({ inventory }) => {
    const { id, name, price, description, img, quantity, supplier } = inventory;
    return (
        <div className='manage-inventory-container'>
            <PageTitle title="ManageItem"></PageTitle>
            <img src={img} alt="" />
            <div>
                {name}
            </div>
            <div>
                {price}
            </div>
            <div>
                {supplier}
            </div>
            <button className='delete'>Delete</button>
            <button className='update'>Update</button>


        </div>
    );
};

export default ManageItem;