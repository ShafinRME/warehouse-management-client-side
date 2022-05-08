import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    // This is for page title common component
    return (
        <Helmet>
            <title>{title}-SpaceX Car House</title>
        </Helmet>
    );
};

export default PageTitle;