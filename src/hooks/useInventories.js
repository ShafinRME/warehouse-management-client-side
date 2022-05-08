import { useEffect, useState } from "react";

// Creating common api hook from server for frontend

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://mighty-hamlet-99009.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);

    return [inventories, setInventories];
}

export default useInventories;