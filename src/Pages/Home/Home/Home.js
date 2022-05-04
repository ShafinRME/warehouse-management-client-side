import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import Countup from '../Countup/Countup';
import Inventories from '../Inventories/Inventories';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Comments></Comments>
            <Countup></Countup>
        </div>
    );
};

export default Home;