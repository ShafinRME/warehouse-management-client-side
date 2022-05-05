import React from 'react';
import './ManageItem.css'

const ManageItem = ({ inventory }) => {
    const { id, name, price, description, img, quantity, supplier } = inventory;
    return (
        <div className='manage-inventory-container'>
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