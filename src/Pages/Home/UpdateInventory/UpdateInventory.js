import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const UpdateInventory = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <PageTitle title="Update-Inventory"></PageTitle>
            <h2>Updated version: {inventoryId}</h2>
        </div>
    );
};

export default UpdateInventory;