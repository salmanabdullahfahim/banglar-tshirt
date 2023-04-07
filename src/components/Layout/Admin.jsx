import React from 'react';
import Header from '../Header/HEader';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;