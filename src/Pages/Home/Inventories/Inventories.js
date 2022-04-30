import React, { useEffect, useState } from 'react';
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
        <div>
            <h2>This is inventories: {inventories.length}</h2>
            {
                inventories.map(inventory => <Inventory
                    key={inventory.id}
                    inventory={inventory}
                >

                </Inventory>)
            }

        </div>
    );
};

export default Inventories;