import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import Countup from '../Countup/Countup';
import Inventories from '../Inventories/Inventories';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* Adding page title and components in home page */}
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
            <Comments></Comments>
            <Countup></Countup>
        </div>
    );
};

export default Home;