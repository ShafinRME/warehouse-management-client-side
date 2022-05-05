import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h2>Updated version: {inventoryId}</h2>
        </div>
    );
};

export default UpdateInventory;